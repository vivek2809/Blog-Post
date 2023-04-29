import React from 'react'
import { useAuth } from '../Auth/Auth'

const Default= () => {

  const {userName} = useAuth();

  return (
    <div>
      <main className="p-5 w-50 mx-auto my-5 bg-light rounded">
        <h1>Hello {userName ? userName :'User First Login'}!</h1>
        <p className="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <button className="btn btn-danger">
          Learn More
        </button>
      </main>
    </div>
  )
}

export default Default
