//Serve
const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./Cors')
const server = express()

//Modulos
const MainRoutes = require('./MainRoutes')
const ExampleRoute = require('./ExampleRoute/ExampleRouteController')

//Serviços
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(MainRoutes)
server.use(ExampleRoute)

server.listen(3000, () => {
	console.log('Server online on 3000, relaxa que vai dar tudo certo :)')
})

module.exports = server