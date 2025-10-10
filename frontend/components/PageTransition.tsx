'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { pageVariants } from '@/lib/animations'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{
        type: 'tween',
        ease: 'anticipate',
        duration: 0.6,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}