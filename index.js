const express = require('express'),
      app = express(),
      port = 3000, 
      servername = "localhost"

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

/* get | post | put | delete */
app.get('/blog/*.html', (req, res) => {
  res.send('Blog Hello World!')
}) 

app.route('/form') 
  .get((req, res) => {
    res.send('You would see a Form!')
  }) 
  .post((req, res) => {
    res.send('You would post a form!')
  }) 

app.listen(port, () => {
  console.log(`Server Running on http://${servername}:${port}`)
})