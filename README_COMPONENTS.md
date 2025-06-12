# Smart UI Components

This project includes two advanced React components built with TypeScript, Tailwind CSS, and Framer Motion:

## 🎯 Components Overview

### 1. SmartNavbar - Background-Aware Glassmorphic Navigation
### 2. CountUpNumber - Intersection Observer Animated Counters

---

## 🌟 SmartNavbar Component

A responsive, centered navigation bar with glassmorphic design that automatically adapts its appearance based on the background color it's overlaying.

### ✨ Features

- **🔍 Smart Background Detection**: Automatically detects background colors and adapts navbar styling
- **🌊 Glassmorphic Design**: Beautiful frosted glass effect with backdrop blur
- **📱 Fully Responsive**: Works seamlessly across all screen sizes
- **🎨 Dynamic Color Adaptation**: Changes text, button, and border colors based on background
- **🌈 Multiple Background Support**: Works with solid colors, gradients, and images
- **⚡ Smooth Animations**: Fluid transitions between different states

### 🎨 Color Adaptation

| Background Type | Navbar Style | Text Color | Button Style |
|----------------|--------------|------------|--------------|
| **Light/White** | `rgba(255, 255, 255, 0.8)` | Dark gray | Dark buttons |
| **Dark/Black** | `rgba(255, 255, 255, 0.1)` | White | Light buttons |
| **Gradients** | Auto-detected based on dominant color | Adaptive | Adaptive |

### 🛠️ Usage

```tsx
import SmartNavbar from './components/SmartNavbar'

// Basic usage
<SmartNavbar />

// Custom navigation items
<SmartNavbar 
  items={[
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]}
  className="custom-navbar-class"
/>
```

### 🔧 Props

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

### 📱 Responsive Behavior

- **Desktop (`md:`)**: Full horizontal navigation with all items visible
- **Mobile (`< md`)**: Hamburger menu with dropdown
- **Tablet**: Adaptive layout based on available space

---

## 🔢 CountUpNumber Component

An animated counter component that triggers when elements come into view, with support for various number formats and smooth animations.

### ✨ Features

- **👁️ Intersection Observer**: Animates only when visible
- **📊 Format Support**: Commas, decimals, prefixes, suffixes
- **🎭 Multiple Animations**: Smooth easing with customizable duration
- **🔄 Reusable**: Once or repeat animations
- **⚡ Performance Optimized**: Uses requestAnimationFrame
- **🎯 Threshold Control**: Customizable visibility threshold

### 🎨 Animation Examples

```tsx
// Basic counter
<CountUpNumber end={2000} suffix="+" />

// Formatted with commas
<CountUpNumber end={1250000} separator="," />

// Percentage with decimals
<CountUpNumber end={99.9} suffix="%" decimals={1} />

// Currency with prefix
<CountUpNumber prefix="$" end={2500000} separator="," />

// Custom duration and delay
<CountUpNumber 
  end={150} 
  suffix="K+" 
  duration={3} 
  delay={0.5}
/>
```

### 🛠️ Usage

```tsx
import CountUpNumber, { 
  StudentCount, 
  FollowerCount, 
  PercentageCount 
} from './components/CountUpNumber'

// Basic usage
<CountUpNumber end={2000} suffix="+" />

// Preset components
<StudentCount count={2000} />
<FollowerCount count={15000} />
<PercentageCount percentage={98.5} />

// Custom hook
const currentValue = useCountUp(1000, 0, 2, true)
```

### 🔧 Props

```typescript
interface CountUpNumberProps {
  end: number           // Target number
  start?: number        // Starting number (default: 0)
  duration?: number     // Animation duration in seconds (default: 2)
  delay?: number        // Delay before animation starts (default: 0)
  suffix?: string       // Text after number (e.g., "+", "%")
  prefix?: string       // Text before number (e.g., "$")
  separator?: string    // Thousands separator (",", ".", " ")
  decimals?: number     // Decimal places (default: 0)
  className?: string    // CSS classes
  once?: boolean        // Animate only once (default: true)
  threshold?: number    // Intersection threshold (default: 0.5)
}
```

### 📊 Preset Components

#### StudentCount
```tsx
<StudentCount count={2000} className="text-4xl font-bold" />
// Renders: "2,000+" with optimized styling
```

#### FollowerCount
```tsx
<FollowerCount count={15000} className="text-2xl" />
// Renders: "15,000" with comma separation
```

#### PercentageCount
```tsx
<PercentageCount percentage={98.5} className="text-3xl" />
// Renders: "98.5%" with one decimal place
```

---

## 🚀 Demo Page

Visit `/demo` to see both components in action across different background sections:

- **Light backgrounds** - Navbar adapts to dark text/buttons
- **Dark backgrounds** - Navbar switches to light text/buttons  
- **Gradient backgrounds** - Smart detection and adaptation
- **Various counter formats** - All number formatting options

---

## 📦 Dependencies

```json
{
  "framer-motion": "^10.x.x",
  "react": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "tailwindcss": "^3.x.x"
}
```

---

## 🎯 Key Technical Features

### SmartNavbar
- **Background Detection Algorithm**: Uses `document.elementsFromPoint()` and `getComputedStyle()`
- **Color Analysis**: RGB brightness calculation for dark/light determination
- **Class Detection**: Recognizes common Tailwind background classes
- **Performance**: Optimized event listeners with cleanup

### CountUpNumber
- **Intersection Observer API**: Efficient visibility detection
- **requestAnimationFrame**: Smooth 60fps animations
- **Easing Functions**: Custom cubic-bezier easing for natural motion
- **Memory Management**: Proper cleanup of timers and listeners

---

## 🎨 Styling

Both components use:
- **Tailwind CSS** for responsive design
- **CSS Custom Properties** for dynamic styling
- **Backdrop-filter** for glassmorphic effects
- **CSS Grid/Flexbox** for layouts

---

## 🔧 Customization

### SmartNavbar Styling
```css
/* Custom glassmorphic effect */
.custom-navbar {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### CountUpNumber Styling
```css
/* Tabular numbers for consistent width */
.counter {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum";
}
```

---

## 🌟 Advanced Usage

### Multiple Background Sections
```tsx
<div className="min-h-screen">
  <SmartNavbar />
  
  <section className="bg-white">
    <CountUpNumber end={2000} suffix="+" />
  </section>
  
  <section className="bg-black">
    <CountUpNumber end={15000} />
  </section>
  
  <section className="bg-gradient-to-r from-blue-500 to-purple-600">
    <CountUpNumber end={98.5} suffix="%" decimals={1} />
  </section>
</div>
```

### Custom Hook Usage
```tsx
const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const count = useCountUp(1000, 0, 2, isVisible)
  
  return (
    <div>
      <span>{count.toLocaleString()}</span>
      <button onClick={() => setIsVisible(true)}>
        Start Animation
      </button>
    </div>
  )
}
```

---

## 🚀 Performance Optimizations

- **Intersection Observer** instead of scroll listeners
- **requestAnimationFrame** for smooth animations
- **Event listener cleanup** to prevent memory leaks
- **Conditional rendering** to reduce DOM updates
- **Memoized calculations** for expensive operations

---

## 📱 Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support  
- **Safari**: Full support (iOS 12+)
- **Mobile**: Optimized for touch devices

---

## 🎉 Ready to Use!

These components are production-ready and can be easily integrated into any React project. They're designed to be:

- ✅ **Accessible** - Proper ARIA labels and keyboard navigation
- ✅ **Performant** - Optimized animations and efficient algorithms  
- ✅ **Responsive** - Mobile-first design approach
- ✅ **Customizable** - Extensive props and styling options
- ✅ **Type-safe** - Full TypeScript support

Navigate to `/demo` to see them in action! 