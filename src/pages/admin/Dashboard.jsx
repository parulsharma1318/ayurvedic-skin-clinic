import { doc, updateDoc } from "firebase/firestore"
import { deleteDoc } from "firebase/firestore"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase/config"
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-hot-toast'
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiLogOut,
  FiTrash2,
  FiEye,
  FiX,
  FiMenu,
} from 'react-icons/fi'

const Dashboard = () => {
  const [appointments, setAppointments] = useState([])
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  let notificationSound

if (typeof window !== "undefined") {
  notificationSound = new Audio("/notification.mp3")
}

 useEffect(() => {

  if (!user) {
    navigate('/admin')
    return
  }

  const q = query(
    collection(db, "appointments"),
    orderBy("createdAt", "desc")
  )

let firstLoad = true

const unsubscribe = onSnapshot(q, (snapshot) => {

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))

  if (!firstLoad && data.length > appointments.length) {
    toast.success("New Appointment Received!")
    notificationSound.play()
  }

  firstLoad = false

  setAppointments(data)

})

  return () => unsubscribe()

}, [user, navigate])

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/admin')
    } catch {
      toast.error('Logout failed')
    }
  }

const updateStatus = async (id, status) => {

  try {

    await updateDoc(doc(db, "appointments", id), {
      status: status
    })

    toast.success(`Marked as ${status}`)

  } catch (error) {

    toast.error("Failed to update status")

  }

}

const deleteAppointment = async (id) => {

  try {

    await deleteDoc(doc(db, "appointments", id))

    setSelectedAppointment(null)

    toast.success("Appointment deleted")

  } catch (error) {

    toast.error("Failed to delete appointment")

  }

}

  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length,
    completed: appointments.filter(a => a.status === 'completed').length,
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow px-4 py-3 flex justify-between items-center">
        <h2 className="font-bold text-ayurveda-green">🩺 Shree Shyam Ayurveda</h2>
        <button onClick={() => setSidebarOpen(true)}>
          <FiMenu size={22} />
        </button>
      </div>

      {/* Sidebar Desktop */}
      <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 bg-white shadow-lg p-6">
        <div className="w-full">
          <h2 className="text-xl font-bold text-ayurveda-green">🩺 Shree Shyam Ayurveda</h2>
          <p className="text-sm text-gray-500 mb-8">Admin Panel</p>

          <nav className="space-y-3">
            <Link
              to="/admin/dashboard"
              className="block bg-ayurveda-green text-white px-4 py-2 rounded-lg"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg w-full"
            >
              <FiLogOut /> Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-white p-5"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-ayurveda-green">🩺 Shree Shyam Ayurveda</h2>
              <FiX size={22} onClick={() => setSidebarOpen(false)} />
            </div>

            <nav className="space-y-3">
              <Link
                to="/admin/dashboard"
                onClick={() => setSidebarOpen(false)}
                className="block bg-ayurveda-green text-white px-4 py-2 rounded-lg"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg w-full text-left"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Main */}
      <main className="md:ml-64 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600 text-sm">
              Welcome, Dr. {user?.email?.split('@')[0]}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="md:hidden text-red-600 text-sm"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total, icon: <FiCalendar /> },
            { label: 'Pending', value: stats.pending, icon: <FiClock /> },
            { label: 'Completed', value: stats.completed, icon: <FiCheckCircle /> },
          ].map((s, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className="text-2xl font-bold">{s.value}</p>
              </div>
              <div className="text-xl text-ayurveda-green">{s.icon}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs">Name</th>
                <th className="px-4 py-3 text-left text-xs hidden sm:table-cell">Phone</th>
                <th className="px-4 py-3 text-left text-xs">Problem</th>
                <th className="px-4 py-3 text-left text-xs hidden md:table-cell">Status</th>
                <th className="px-4 py-3 text-left text-xs">Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map(apt => (
                <tr key={apt.id} className="border-t">
                  <td className="px-4 py-3 font-medium">{apt.name}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">{apt.phone}</td>
                  <td className="px-4 py-3">{apt.problem}</td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      apt.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <FiEye onClick={() => setSelectedAppointment(apt)} className="cursor-pointer text-blue-600" />
                    {apt.status === 'pending' && (
                      <FiCheckCircle
                        onClick={() => updateStatus(apt.id, 'completed')}
                        className="cursor-pointer text-green-600"
                      />
                    )}
                    <FiTrash2
                      onClick={() => deleteAppointment(apt.id)}
                      className="cursor-pointer text-red-600"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedAppointment && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">

      <button
        className="absolute top-3 right-3 text-gray-500"
        onClick={() => setSelectedAppointment(null)}
      >
        <FiX size={20} />
      </button>

      <h2 className="text-xl font-bold mb-4">Appointment Details</h2>

      <div className="space-y-2 text-sm">
        <p><strong>Name:</strong> {selectedAppointment.name}</p>
        <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
        <p><strong>Email:</strong> {selectedAppointment.email || "N/A"}</p>
        <p><strong>Problem:</strong> {selectedAppointment.problem}</p>
        <p><strong>Status:</strong> {selectedAppointment.status}</p>

        <div>
          <p className="font-semibold">Description:</p>
          <p className="text-gray-600">
            {selectedAppointment.message || "No description provided"}
          </p>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        {selectedAppointment.status === "pending" && (
          <button
            onClick={() => updateStatus(selectedAppointment.id, "completed")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Mark Completed
          </button>
        )}

        <button
          onClick={() => deleteAppointment(selectedAppointment.id)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Delete
        </button>
      </div>

    </div>
  </div>
)}
      </main>
    </div>
  )
}

export default Dashboard;