import React from 'react'
import CountUpNumber from './CountUpNumber'

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  suffix = "",
  duration = 2.5,
  className = ""
}) => {
  // Extract numeric value from string if needed
  const numericValue = typeof value === 'string' 
    ? parseInt(value.replace(/[^\d]/g, '')) || 0
    : value

  // Determine suffix from original value if not provided
  let finalSuffix = suffix
  if (typeof value === 'string' && value.includes('+') && !suffix) {
    finalSuffix = '+'
  }
  if (typeof value === 'string' && value.includes('K') && !suffix) {
    finalSuffix = 'K'
  }

  return (
    <CountUpNumber
      end={numericValue}
      suffix={finalSuffix}
      duration={duration}
      className={className}
    />
  )
}

export default AnimatedCounter 