import React from "react";
import "./App.css";
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import SmartNavbar from "./components/SmartNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Podcasts from "./pages/Podcasts";
import FAQ from "./pages/FAQ";
import Join from "./pages/Join";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";

// Error Boundary Component
class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean; error?: Error }
> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        error: Error;
    } {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center p-8">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">
                            Something went wrong
                        </h1>
                        <p className="text-gray-600 mb-4">
                            {this.state.error?.message}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

// Loading component
const LoadingPage: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
        </div>
    </div>
);

const App: React.FC = () => {
    React.useEffect(() => {
        console.log("App component mounted successfully");

        const handleError = (event: ErrorEvent) => {
            console.error("Global error:", event.error);
        };

        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            console.error("Unhandled promise rejection:", event.reason);
        };

        window.addEventListener("error", handleError);
        window.addEventListener("unhandledrejection", handleUnhandledRejection);

        return () => {
            window.removeEventListener("error", handleError);
            window.removeEventListener(
                "unhandledrejection",
                handleUnhandledRejection
            );
        };
    }, []);

    return (
        <ErrorBoundary>
            <Router>
                <div className="min-h-screen text-black">
                    <SmartNavbar />
                    <main>
                        <React.Suspense fallback={<LoadingPage />}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="/home" replace />}
                                />
                                <Route path="/home" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route
                                    path="/podcasts"
                                    element={<Podcasts />}
                                />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/join" element={<Join />} />
                                <Route path="/demo" element={<Demo />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </React.Suspense>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ErrorBoundary>
    );
};

export default App;
