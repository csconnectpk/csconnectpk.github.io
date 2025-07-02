# React Components Documentation

This project includes specialized React components built with TypeScript, Tailwind CSS, and modern web technologies.

## Components Overview

### SmartNavbar - Responsive Navigation Component
### CountUpNumber - Animated Counter Component

## SmartNavbar Component

A responsive navigation bar with glassmorphic design that adapts its appearance based on the background color.

### Features

- Background-aware color adaptation
- Glassmorphic design with backdrop blur
- Fully responsive across all screen sizes
- Dynamic text and button color changes
- Support for gradients and solid backgrounds
- Smooth transitions between states

### Color Adaptation Logic

| Background Type | Navbar Background | Text Color | Button Style |
|----------------|------------------|------------|--------------|
| Light/White | rgba(255,255,255,0.8) | Dark gray | Dark buttons |
| Dark/Black | rgba(255,255,255,0.1) | White | Light buttons |
| Gradients | Auto-detected | Adaptive | Adaptive |

### Usage

```tsx
import SmartNavbar from './components/SmartNavbar'

// Basic implementation
<SmartNavbar />

// With custom navigation items
<SmartNavbar 
  items={[
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]}
  className="custom-class"
/>
```

### Props Interface

```typescript
interface SmartNavbarProps {
  items?: NavItem[]      // Navigation items array
  className?: string     // Additional CSS classes
}

interface NavItem {
  name: string          // Display name
  path: string          // Route path
}
```

### Responsive Behavior

- Desktop (md+): Full horizontal navigation
- Mobile (<md): Hamburger menu with dropdown
- Tablet: Adaptive layout based on space

## CountUpNumber Component

Animated counter component that triggers when elements enter viewport, supporting various number formats.

### Features

- Intersection Observer for viewport detection
- Multiple format support (commas, decimals, prefixes, suffixes)
- Customizable animation duration and easing
- Performance optimized with requestAnimationFrame
- Configurable visibility threshold
- Reusable with once or repeat animations

### Animation Examples

```tsx
// Basic counter
<CountUpNumber end={2000} suffix="+" />

// Formatted with commas
<CountUpNumber end={1250000} separator="," />

// Percentage with decimals
<CountUpNumber end={99.9} suffix="%" decimals={1} />

// Currency with prefix
<CountUpNumber prefix="$" end={2500000} separator="," />

// Custom timing
<CountUpNumber 
  end={150} 
  suffix="K+" 
  duration={3} 
  delay={0.5}
/>
```

### Implementation

```tsx
import CountUpNumber, { 
  StudentCount, 
  FollowerCount, 
  PercentageCount 
} from './components/CountUpNumber'

// Direct usage
<CountUpNumber end={2000} suffix="+" />

// Preset components
<StudentCount count={2000} />
<FollowerCount count={15000} />
<PercentageCount percentage={98.5} />

// Hook usage
const currentValue = useCountUp(1000, 0, 2, true)
```

### Props Interface

```typescript
interface CountUpNumberProps {
  end: number           // Target number
  start?: number        // Starting number (default: 0)
  duration?: number     // Animation duration in seconds (default: 2)
  delay?: number        // Delay before animation starts (default: 0)
  suffix?: string       // Text after number
  prefix?: string       // Text before number
  separator?: string    // Thousands separator
  decimals?: number     // Decimal places (default: 0)
  className?: string    // CSS classes
  once?: boolean        // Animate only once (default: true)
  threshold?: number    // Intersection threshold (default: 0.5)
}
```

### Preset Components

#### StudentCount
```tsx
<StudentCount count={2000} className="text-4xl font-bold" />
// Output: "2,000+" with optimized styling
```

#### FollowerCount  
```tsx
<FollowerCount count={15000} className="text-2xl" />
// Output: "15,000" with comma separation
```

#### PercentageCount
```tsx
<PercentageCount percentage={98.5} className="text-3xl" />
// Output: "98.5%" with one decimal place
```

## Technical Implementation

### SmartNavbar Background Detection
- Uses `document.elementsFromPoint()` and `getComputedStyle()`
- RGB brightness calculation for dark/light determination
- Real-time color analysis and adaptation

### CountUpNumber Animation Engine
- Intersection Observer API for efficient viewport detection
- RequestAnimationFrame for smooth 60fps animations
- Configurable easing functions and timing controls

## Dependencies

```json
{
  "framer-motion": "^10.x.x",
  "react": "^18.x.x", 
  "react-router-dom": "^6.x.x",
  "tailwindcss": "^3.x.x"
}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12+)
- Mobile: Optimized for touch devices

## Performance Considerations

- Components use GPU acceleration where appropriate
- Intersection Observer reduces unnecessary calculations
- Efficient re-rendering with React optimization patterns
- Minimal bundle impact with tree-shaking support 