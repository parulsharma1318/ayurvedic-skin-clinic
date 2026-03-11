import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on app start
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (err) {
      console.error('Failed to parse user')
      localStorage.removeItem('user')
    } finally {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    // TEMP admin credentials (replace with backend later)
    if (email === 'admin@ayurskin.com' && password === 'admin123') {
      const userData = { email, role: 'admin' }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      return userData
    }
    throw new Error('Invalid credentials')
  }

  const logout = async () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}