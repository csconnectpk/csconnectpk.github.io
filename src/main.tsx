import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1>CS Connect Pakistan</h1>
          <p>Something went wrong. Please refresh the page.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

// Validate critical assets before rendering
const validateAssets = () => {
  return new Promise((resolve) => {
    let assetsLoaded = 0
    const totalAssets = 2 // logo.png and logo.svg
    
    const checkAsset = (url: string) => {
      const img = new Image()
      img.onload = img.onerror = () => {
        assetsLoaded++
        if (assetsLoaded >= totalAssets) {
          resolve(true)
        }
      }
      img.src = url
    }
    
    // Check if assets exist, but don't block app loading
    checkAsset('/logo.png')
    checkAsset('/logo.svg')
    
    // Don't wait too long for assets
    setTimeout(() => resolve(true), 1000)
  })
}

// Initialize app
const initApp = async () => {
  try {
    await validateAssets()
    
    const rootElement = document.getElementById('root')
    if (!rootElement) {
      throw new Error('Root element not found')
    }

    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Failed to initialize app:', error)
    
    // Fallback rendering
    const rootElement = document.getElementById('root')
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: Inter, sans-serif; background: #000; color: #fff; text-align: center; padding: 20px;">
          <h1>CS Connect Pakistan</h1>
          <p>Loading issue detected. Refreshing...</p>
        </div>
      `
      setTimeout(() => window.location.reload(), 2000)
    }
  }
}

// Start the app
initApp() 