import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CountUpNumberProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  separator?: string
  decimals?: number
  className?: string
  once?: boolean
  threshold?: number
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  suffix = '',
  prefix = '',
  separator = ',',
  decimals = 0,
  className = '',
  once = true,
  threshold = 0.5
}) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentValue, setCurrentValue] = useState(start)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { 
    once,
    margin: "-10% 0px -10% 0px",
    amount: threshold
  })

  // Format number with separators and decimals
  const formatNumber = (num: number): string => {
    if (decimals > 0) {
      return num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })
    }
    
    // Custom formatting for integers with separator
    if (separator === ',') {
      return num.toLocaleString('en-US')
    } else if (separator === '.') {
      return num.toLocaleString('de-DE')
    } else if (separator === ' ') {
      return num.toLocaleString('fr-FR')
    } else {
      return num.toString()
    }
  }

  // Main animation logic
  useEffect(() => {
    if (isInView && (!once || !hasAnimated)) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp + (delay * 1000)
        
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = start + (end - start) * easeOut
        
        setCurrentValue(current)
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          if (once) setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    } else if (!isInView && !once) {
      setCurrentValue(start)
    }
  }, [isInView, end, start, duration, delay, once, hasAnimated])

  return (
    <motion.span
      ref={ref}
      className={`inline-block tabular-nums ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {prefix}
      <span>{formatNumber(Math.floor(currentValue))}</span>
      {suffix}
    </motion.span>
  )
}

// Hook for custom count-up logic
export const useCountUp = (
  end: number,
  start: number = 0,
  duration: number = 2,
  isActive: boolean = true
) => {
  const [current, setCurrent] = useState(start)

  useEffect(() => {
    if (!isActive) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const value = start + (end - start) * easeOut
      
      setCurrent(value)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, start, duration, isActive])

  return Math.floor(current)
}

// Preset components for common use cases
export const StudentCount: React.FC<{ count: number; className?: string }> = ({ 
  count, 
  className = "text-3xl font-bold" 
}) => (
  <CountUpNumber 
    end={count} 
    suffix="+" 
    className={className}
    duration={2.5}
  />
)

export const FollowerCount: React.FC<{ count: number; className?: string }> = ({ 
  count, 
  className = "text-2xl font-semibold" 
}) => (
  <CountUpNumber 
    end={count} 
    className={className}
    duration={2}
    separator=","
  />
)

export const PercentageCount: React.FC<{ percentage: number; className?: string }> = ({ 
  percentage, 
  className = "text-3xl font-bold" 
}) => (
  <CountUpNumber 
    end={percentage} 
    suffix="%" 
    className={className}
    duration={1.8}
    decimals={1}
  />
)

export default CountUpNumber 