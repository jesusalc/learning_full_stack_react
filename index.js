const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'), 
      port = 3000, 
      servername = "localhost", 
      routelist = `
      Server Running on http://${servername}:${port}
      Server Running on http://${servername}:${port}/form
      Server Running on http://${servername}:${port}/error`

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Hello World!')
}) 

/* get | post | put | delete */
app.get('/blog/*.html', (req, res) => {
  res.send('Blog Hello World!')
}) 

app.route('/form') 
  .get((req, res) => {
    res.sendFile(__dirname + '/src/form.html')
  }) 
  .post((req, res) => {
    res.send(req.body.name + ', these are the results.' )
  }) 

/* if route is not found */
app.use((req,res,next) => {
  res.status(404).send(`Sorry I can't find this page. 
  ${routelist}`)
})

app.listen(port, () => {
  console.log(routelist)
})