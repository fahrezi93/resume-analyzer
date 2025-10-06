# Resume Analyzer

Aplikasi web untuk menganalisis CV menggunakan Python NLP dan Next.js. Sistem ini memberikan feedback dan rekomendasi untuk meningkatkan kualitas resume.

## Fitur

- **Upload File**: Mendukung format PDF dan DOCX
- **Analisis NLP**: Menggunakan spaCy untuk analisis teks dan ekstraksi informasi
- **Deteksi Kontak**: Otomatis mendeteksi nama, email, dan nomor telepon
- **Analisis Keyword**: Mengidentifikasi skill teknis yang ada dan yang belum ada
- **Rekomendasi**: Memberikan saran peningkatan berdasarkan analisis

## Teknologi Stack

### Backend
- **Python 3.8+**
- **Flask** - Web framework
- **spaCy** - Natural Language Processing
- **PyMuPDF** - PDF text extraction
- **python-docx** - DOCX text extraction
- **Flask-CORS** - Cross-origin resource sharing

### Frontend
- **Next.js 14+** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - UI components
- **react-dropzone** - File upload
- **Axios** - HTTP client

## Instalasi dan Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd resume-analyzer
```

### 2. Setup Backend (Python Flask)

```bash
# Masuk ke direktori backend
cd backend

# Buat virtual environment (opsional tapi direkomendasikan)
python -m venv venv

# Aktifkan virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Download spaCy model
python -m spacy download en_core_web_sm

# Jalankan server Flask
python app.py
```

Server Flask akan berjalan di `http://localhost:5000`

### 3. Setup Frontend (Next.js)

```bash
# Buka terminal baru dan masuk ke direktori frontend
cd frontend

# Install dependencies
npm install
# atau
yarn install

# Jalankan development server
npm run dev
# atau
yarn dev
```

Frontend akan berjalan di `http://localhost:3000`

## Penggunaan

1. Buka browser dan akses `http://localhost:3000`
2. Upload file CV dalam format PDF atau DOCX
3. Klik "Analyze My Resume"
4. Tunggu proses analisis selesai
5. Lihat hasil analisis yang mencakup:
   - Informasi kontak yang terdeteksi
   - Keyword teknis yang ditemukan dan yang belum ada
   - Rekomendasi untuk peningkatan CV

## Struktur Proyek

```
resume-analyzer/
├── backend/
│   ├── app.py              # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   └── .gitignore
├── frontend/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page
│   ├── components/
│   │   ├── ui/             # Shadcn/UI components
│   │   └── AnalysisReport.tsx
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── next.config.js
└── README.md
```

## API Endpoints

### `POST /analyze`
Menganalisis file CV yang diupload.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: File CV (PDF atau DOCX)

**Response:**
```json
{
  "contact_info": {
    "name": "Nama Terdeteksi",
    "email": "email@terdeteksi.com",
    "phone": "081234567890"
  },
  "analysis": {
    "found_keywords": ["Python", "Flask", "SQL"],
    "missing_keywords": ["React", "AWS", "Docker"]
  },
  "recommendations": [
    "Rekomendasi untuk meningkatkan CV..."
  ]
}
```

### `GET /`
Health check endpoint untuk memastikan server berjalan.

## Troubleshooting

### Backend Issues

1. **spaCy model tidak ditemukan**
   ```bash
   python -m spacy download en_core_web_sm
   ```

2. **Module tidak ditemukan**
   ```bash
   pip install -r requirements.txt
   ```

3. **Port 5000 sudah digunakan**
   - Ubah port di `app.py` line terakhir: `app.run(debug=True, host='localhost', port=5001)`
   - Update URL di frontend (`app/page.tsx`) menjadi `http://localhost:5001`

### Frontend Issues

1. **Dependencies tidak terinstall**
   ```bash
   npm install
   ```

2. **Port 3000 sudah digunakan**
   - Next.js akan otomatis mencari port kosong berikutnya

3. **TypeScript errors**
   - Pastikan semua dependencies terinstall dengan benar
   - Jalankan `npm run build` untuk check build errors

## Pengembangan Selanjutnya

Beberapa fitur yang bisa ditambahkan:
- [ ] Dukungan format file lain (TXT, RTF)
- [ ] Analisis lebih mendalam (sentiment analysis, readability score)
- [ ] Export hasil analisis ke PDF
- [ ] Multiple language support
- [ ] Database untuk menyimpan history analisis
- [ ] User authentication
- [ ] Template CV suggestions
- [ ] Integration dengan job boards

## Kontribusi

1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## Lisensi

MIT License