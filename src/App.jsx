import ScrollToTop from './components/common/ScrollToTop'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Treatments from './pages/public/Treatments'
import Contact from './pages/public/Contact'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import { AuthProvider } from './context/AuthContext'

/* ---------------- Protected Route ---------------- */
const ProtectedRoute = ({ children }) => {
  const storedUser = localStorage.getItem("user")

  if (!storedUser) {
    return <Navigate to="/doctor" replace />
  }

  return children
}

/* ---------------- Layout Wrapper ---------------- */
const Layout = ({ children }) => {
  const location = useLocation()

  // Hide Navbar & Footer on admin pages
  const isAdminRoute = location.pathname.startsWith('/doctor')

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow pt-20 sm:pt-24">
        {children}
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  )
}

/* ---------------- App ---------------- */
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            className: 'text-sm sm:text-base',
          }}
        />

        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/doctor" element={<AdminLogin />} />
            <Route
              path="/doctor/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;