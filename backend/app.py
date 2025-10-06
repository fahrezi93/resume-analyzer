from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy
import fitz  # PyMuPDF
from docx import Document
import re
import os
from werkzeug.utils import secure_filename

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# Load spaCy model
try:
    nlp = spacy.load('en_core_web_sm')
except OSError:
    print("Error: spaCy model 'en_core_web_sm' not found. Please install it using: python -m spacy download en_core_web_sm")
    nlp = None

# Technical keywords to analyze
TECHNICAL_KEYWORDS = [
    'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 
    'AWS', 'Docker', 'Next.js', 'TypeScript'
]

# Allowed file extensions
ALLOWED_EXTENSIONS = {'pdf', 'docx'}

def allowed_file(filename):
    """Check if file extension is allowed"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def extract_text(file):
    """Extract text from PDF or DOCX file"""
    filename = file.filename.lower()
    
    try:
        if filename.endswith('.pdf'):
            # Extract text from PDF using PyMuPDF
            pdf_document = fitz.open(stream=file.read(), filetype="pdf")
            text = ""
            for page_num in range(pdf_document.page_count):
                page = pdf_document[page_num]
                text += page.get_text()
            pdf_document.close()
            return text
            
        elif filename.endswith('.docx'):
            # Extract text from DOCX using python-docx
            file.seek(0)  # Reset file pointer
            doc = Document(file)
            text = ""
            for paragraph in doc.paragraphs:
                text += paragraph.text + "\n"
            return text
    except Exception as e:
        print(f"Error extracting text: {str(e)}")
        return ""
    
    return ""

def analyze_keywords(text):
    """Analyze technical keywords in the text"""
    text_upper = text.upper()
    found_keywords = []
    missing_keywords = []
    
    for keyword in TECHNICAL_KEYWORDS:
        if keyword.upper() in text_upper:
            found_keywords.append(keyword)
        else:
            missing_keywords.append(keyword)
    
    return found_keywords, missing_keywords

def extract_contact_info(text):
    """Extract contact information using spaCy and regex"""
    if not nlp:
        return {"name": None, "email": None, "phone": None}
    
    doc = nlp(text)
    
    # Extract email using regex
    email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    emails = re.findall(email_pattern, text)
    email = emails[0] if emails else None
    
    # Extract phone number using regex (various formats)
    phone_pattern = r'(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\+?\d{10,15}'
    phones = re.findall(phone_pattern, text)
    phone = ''.join(phones[0]) if phones else None
    
    # Extract name (using NER for PERSON entities)
    name = None
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            name = ent.text
            break
    
    return {
        "name": name,
        "email": email,
        "phone": phone
    }

def generate_recommendations(contact_info, found_keywords, text):
    """Generate recommendations based on analysis"""
    recommendations = []
    
    # Contact info recommendations
    if not contact_info.get('email'):
        recommendations.append("Rekomendasi: Tambahkan alamat email yang valid pada CV Anda.")
    
    if not contact_info.get('phone'):
        recommendations.append("Rekomendasi: Tambahkan nomor telepon yang dapat dihubungi.")
    
    # Technical skills recommendations
    if len(found_keywords) < 3:
        recommendations.append("Rekomendasi: Tambahkan lebih banyak skill teknis yang relevan dengan posisi yang Anda lamar.")
    
    # Check for quantitative metrics
    number_pattern = r'\d+%|\d+\+|\d+k|\d+m|\d+ tahun|\d+ years'
    if not re.search(number_pattern, text, re.IGNORECASE):
        recommendations.append("Rekomendasi: Tambahkan metrik kuantitatif (persentase, angka pencapaian) untuk menunjukkan dampak kerja Anda.")
    
    # Action verbs check
    action_verbs = ['mengembangkan', 'memimpin', 'meningkatkan', 'mengoptimalkan', 'developed', 'led', 'improved', 'optimized']
    if any(verb.lower() in text.lower() for verb in action_verbs):
        recommendations.append("Baik! CV Anda mengandung kata kerja aksi yang kuat.")
    else:
        recommendations.append("Rekomendasi: Gunakan kata kerja aksi yang kuat untuk mendeskripsikan pengalaman kerja Anda.")
    
    # Frontend skills recommendation
    frontend_skills = ['react', 'vue', 'angular', 'html', 'css']
    has_frontend = any(skill.lower() in text.lower() for skill in frontend_skills)
    if not has_frontend and 'backend' in text.lower():
        recommendations.append("Saran: Tambahkan skill frontend seperti React untuk memperluas cakupan kemampuan Anda.")
    
    return recommendations

@app.route('/analyze', methods=['POST'])
def analyze_resume():
    """Main endpoint to analyze resume"""
    try:
        # Check if file is present in request
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
        
        file = request.files['file']
        
        # Check if file is selected
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        # Check if file extension is allowed
        if not allowed_file(file.filename):
            return jsonify({'error': 'File type not allowed. Please upload PDF or DOCX files only.'}), 400
        
        # Extract text from file
        text = extract_text(file)
        
        if not text.strip():
            return jsonify({'error': 'Could not extract text from the file. Please check if the file is readable.'}), 400
        
        # Analyze keywords
        found_keywords, missing_keywords = analyze_keywords(text)
        
        # Extract contact information
        contact_info = extract_contact_info(text)
        
        # Generate recommendations
        recommendations = generate_recommendations(contact_info, found_keywords, text)
        
        # Prepare response
        response = {
            'contact_info': contact_info,
            'analysis': {
                'found_keywords': found_keywords,
                'missing_keywords': missing_keywords
            },
            'recommendations': recommendations
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        return jsonify({'error': f'An error occurred while processing the file: {str(e)}'}), 500

@app.route('/', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'Resume Analyzer API is running',
        'spacy_loaded': nlp is not None
    }), 200

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)