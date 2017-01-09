const on_create_server_script = (req,res) => {
    let isarray = require('isarray'),
        a = [20,10,32],
        s = "I am not an array",
        out = `Hello world from Node.js <hr />
        is 'a' an array ? ${isarray(a)} <br />
        is 's' an array ? ${isarray(s)} <br />`
    
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end(out)
},
server = require('http').createServer(on_create_server_script),
port = 3001,
servername = 'localhost',
on_start_message = () => {
    console.log(`Server on http://${servername}:${port}`)
}

server.listen(port, servername, on_start_message)