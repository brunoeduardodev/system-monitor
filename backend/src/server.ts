import Express from 'express'
import Http from 'http'
import Routes from '@routes/index'
import Socket from 'socket.io'

const app = Express()

app.use(Express.json())
app.use(Routes)

const server = Http.createServer(app)

const io = new Socket.Server(server, {})

io.on('connection', socket => {
  console.log('New connection')
})

server.listen(3333)
