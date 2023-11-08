const http = require("http")
const app = require("./app")
const port = process.env.PORT || 5000

app.set("port",port)
const serveur=http.createServer(app)
serveur.listen(port, () =>{
    console.log("listening on port " + port)
})