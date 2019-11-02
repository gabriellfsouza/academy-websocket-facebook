let online = false

function start () {
  const ws = adonis.Ws('ws://localhost:3333').connect()

  ws.on('open', () => {
    online = true
  })

  ws.on('error', () => {
    online = false
  })
}
