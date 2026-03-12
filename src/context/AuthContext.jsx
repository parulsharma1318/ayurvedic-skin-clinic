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
    console.error("Failed to parse user")
    localStorage.removeItem("user")
  } finally {
    setLoading(false)
  }
}, [])

const login = async (email, password) => {

  const adminEmail = import.meta.env.VITE_DOCTOR_EMAIL
  const adminPassword = import.meta.env.VITE_DOCTOR_PASSWORD

  if (email === adminEmail && password === adminPassword) {

    const userData = { email, role: 'doctor' }

    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)

    return true
  }

  throw new Error('Invalid credentials')
}

  const logout = () => {
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