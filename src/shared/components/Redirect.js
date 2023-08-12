import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Redirect() {

    const navigate = useNavigate()
    return navigate('/')
  
}
