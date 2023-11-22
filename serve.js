const express = require('express')
const app = express()
const port = 3000


app.post('/user', (req, res) => {
    res.json({message: 'usuario criado com sucesso'})
})

app.listen(port, () => {
    console.log('rodando o servidor')
})