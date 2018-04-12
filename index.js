var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/loaderio-1a00e393534e86a609de67c2022a2f0c.txt', function(request, response) {
  response.send('loaderio-1a00e393534e86a609de67c2022a2f0c')
})

app.get('/loaderio-1a00e393534e86a609de67c2022a2f0c/', function(request, response) {
  response.send('loaderio-1a00e393534e86a609de67c2022a2f0c')
})

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
