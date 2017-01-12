const express = require('express'),
      app = express(),
      mongojs = require('mongojs'),
      AuthView = require('./src/Auth'),
      bodyParser = require('body-parser'), 
      port = 3000, 
      servername = "localhost", 
      routelist = `
  Server Running on http://${servername}:${port}
  Server Running on http://${servername}:${port}/form
  Server Running on http://${servername}:${port}/error
  Server Running on http://${servername}:${port}/register
  `,
      db = mongojs('mongo-sample', ['users']), 
      users_table = db.users.initializeOrderedBulkOp()


users_table.insert({name:'Hen', age:26, email:'he@gmail.com'})
users_table.insert({name:'Ben', age:33, email:'ben@02geek.com'})
users_table.insert({name:'Gloria', age:23, email:'gloria@02geek.com'})
users_table.insert({name:'Tom', age:50, email:'tom@02geek.com', children:['ben', 'sharon','lauri']})
users_table.find({age:{$lt:30}}).remove()
users_table.find({name:'Ben'}).updateOne({$set:{age:34}})

users_table.execute((err,r) => {
  console.log("Loading commands to users to mongo DB using bulk")
  db.close
})


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Hello World!')
}) 

/* get | post | put | delete */
app.get('/blog/*.html', (req, res) => {
  res.send('Blog Hello World!')
}) 

app.route('/register')
  .get((req, res) => {
    let body = Auth.register('this is a message from our server')
    res.render('layout/overlay', {
      title: "Register!",
      body:body
    })
  })
  .post((req, res) => {
    res.send('Register post!')
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