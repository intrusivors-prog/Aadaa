import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PostCard from '../components/PostCard'

export default function Feed(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function load(){
      try{
        const res = await axios.get('/api/catfish/posts')
        setPosts(res.data || [])
      }catch(err){
        console.error(err)
      }finally{setLoading(false)}
    }
    load()
  },[])

  return (
    <div style={{padding:20}}>
      <h2>Feed</h2>
      {loading && <p>Carregando...</p>}
      {!loading && posts.length===0 && <p>Nenhum post encontrado (verifique a configuração do CATFISH_API_BASE_URL).</p>}
      {posts.map(p => <PostCard key={p.id || p._id} post={p} />)}
    </div>
  )
}
