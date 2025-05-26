import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API!' })
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
