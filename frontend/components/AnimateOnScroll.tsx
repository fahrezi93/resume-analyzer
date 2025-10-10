'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { Variants } from 'framer-motion'

interface AnimateOnScrollProps {
  children: ReactNode
  variants?: Variants
  className?: string
  delay?: number
  threshold?: number
  once?: boolean
}

export default function AnimateOnScroll({
  children,
  variants,
  className = '',
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: threshold,
    once,
    margin: '0px 0px -100px 0px' // Trigger animation before element is fully visible
  })

  const defaultVariants: Variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}