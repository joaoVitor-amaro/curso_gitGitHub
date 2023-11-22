const express = require('express')
const app = express()
const port = 3000

function cadastrarUser() {
    return {user: 'jv', id: 1}
}

app.post('/user', (req, res) => {
    const usuario = cadastrarUser(req.body)
    res.json(usuario)
})

app.listen(port, () => {
    console.log('rodando o servidor')
})