import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CountUpNumberProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
  delay?: number
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ 
  end, 
  suffix = '', 
  duration = 1.2, 
  className = '',
  delay = 0
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    const startDelay = delay * 1000

    const timeoutId = setTimeout(() => {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        
        // Enhanced easing function for smoother animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.floor(easeOutCubic * end)
        
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isInView, end, duration, delay])

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ 
        duration: 0.6, 
        delay: delay + 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      <motion.span
        key={count}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {count.toLocaleString()}{suffix}
      </motion.span>
    </motion.div>
  )
}

// Named export wrapper components
interface StudentCountProps {
  count: number
  className?: string
  duration?: number
  delay?: number
}

export const StudentCount: React.FC<StudentCountProps> = ({ count, className, duration, delay }) => (
  <CountUpNumber end={count} className={className} duration={duration} delay={delay} />
)

interface FollowerCountProps {
  count: number
  className?: string
  duration?: number
  delay?: number
}

export const FollowerCount: React.FC<FollowerCountProps> = ({ count, className, duration, delay }) => (
  <CountUpNumber end={count} className={className} duration={duration} delay={delay} />
)

interface PercentageCountProps {
  percentage: number
  className?: string
  duration?: number
  delay?: number
}

export const PercentageCount: React.FC<PercentageCountProps> = ({ percentage, className, duration, delay }) => (
  <CountUpNumber end={percentage} suffix="%" className={className} duration={duration} delay={delay} />
)

export default CountUpNumber 