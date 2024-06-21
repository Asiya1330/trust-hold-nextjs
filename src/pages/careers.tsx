import React from 'react'

const Career = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">Careers at TrustHold Group</h1>
        <p className="text-gray-700 mb-4">
          As we continue to grow and offer high-quality services, we seek to hire talented people to join us and our professional team.
        </p>
        <p className="text-gray-700 mb-6">
          Kindly send your CV to: <a href="mailto:info@trustholdgroup.com" className="text-blue-500 underline">info@trustholdgroup.com</a>
        </p>
        <div className="text-center">
          <a href="mailto:info@trustholdgroup.com" className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Send Your CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Career