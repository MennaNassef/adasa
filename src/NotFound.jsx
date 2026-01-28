import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="p-5 text-center notFound">
      <h1>404</h1>
      <h2>NotFound</h2>
      <Link to={"/"} className='btn btn-outline-warning mt-4'>Back to Home</Link>
    </div>
  )
}
