import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-yellow-400 fa-4x mb-4 text-6xl"></FaExclamationTriangle>
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">
            <Link to="/" className="text-white ng-indigo-700 hover:bg-indigo-900 rounded-lg px-3 py-2 mt-4">
                Go Back
            </Link>
        </p>
    </section>
  )
}

export default NotFoundPage