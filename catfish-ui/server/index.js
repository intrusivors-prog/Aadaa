const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:' + (process.env.FRONTEND_PORT || 3000) }))

const CATFISH_BASE = process.env.CATFISH_API_BASE_URL || 'https://api.catfish.example'
const TOKEN = process.env.CATFISH_API_TOKEN || ''

// Proxy all requests starting with /api/catfish to the CATFISH_BASE
app.all('/api/catfish/*', async (req, res) => {
  try{
    const path = req.path.replace(/^\/api\/catfish/, '') || '/'
    const url = CATFISH_BASE.replace(/\/$/, '') + path

    const headers = { ...req.headers }
    // Remove host header to avoid issues
    delete headers.host
    // If server has a token configured, add Authorization header
    if(TOKEN){ headers['authorization'] = 'Bearer ' + TOKEN }

    const axiosConfig = {
      url,
      method: req.method,
      headers,
      data: req.body,
      params: req.query,
      responseType: 'stream'
    }

    const response = await axios(axiosConfig)

    res.status(response.status)
    // copy response headers except some
    Object.keys(response.headers || {}).forEach(k => {
      if(k.toLowerCase() === 'transfer-encoding') return
      res.setHeader(k, response.headers[k])
    })
    response.data.pipe(res)

  }catch(err){
    console.error('Proxy error:', err.message)
    if(err.response){
      res.status(err.response.status).send(err.response.data)
    }else{
      res.status(500).json({error: 'Proxy error', message: err.message})
    }
  }
})

const PORT = process.env.SERVER_PORT || 4000
app.listen(PORT, ()=> console.log(`Catfish proxy server running on port ${PORT}`))
