import React from 'react'
import CommentList from './CommentList'

export default function PostCard({post}){
  return (
    <article style={{border:'1px solid #ddd', padding:12, marginBottom:12}}>
      <div style={{fontWeight:600}}>{post.author?.name || post.author || 'Usuário'}</div>
      <div style={{marginTop:8}}>{post.content || post.text || JSON.stringify(post)}</div>
      <div style={{marginTop:8}}>
        <CommentList comments={post.comments || []} />
      </div>
    </article>
  )
}
