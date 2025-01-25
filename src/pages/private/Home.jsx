import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/about')
    }, 5000)
  }, [navigate])
  return (
    <div>
      <div>Home</div>
    </div>
  )
}

export default Home