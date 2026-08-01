import React from 'react'

export default function CommentList({comments}){
  if(!comments || comments.length===0) return <div style={{color:'#666'}}>Sem comentários</div>
  return (
    <ul style={{marginTop:8}}>
      {comments.map((c,i)=>(
        <li key={i} style={{borderTop:'1px solid #f0f0f0', paddingTop:6, marginTop:6}}>
          <div style={{fontSize:12, fontWeight:600}}>{c.author || 'Anon'}</div>
          <div style={{fontSize:13}}>{c.text || c.content}</div>
        </li>
      ))}
    </ul>
  )
}
