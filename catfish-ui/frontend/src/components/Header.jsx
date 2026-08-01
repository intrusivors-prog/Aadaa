import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header style={{padding:10, borderBottom:'1px solid #eee'}}>
      <nav style={{display:'flex', gap:10}}>
        <Link to="/">Feed</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}
