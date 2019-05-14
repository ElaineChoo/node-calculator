// const express = require('express')
// const app = express()

// app.get('/', function(req, res) {
//   res.send('hello brian')
// });

// app.get("/greet/:name/:lastname", function(req, res) {
//   res.send("Hello " + req.params.name + " " + req.params.lastname)
// });

// app.get("/multiply/:x/:y", function(req, res) {
//   res.send("The answer is: " + (req.params.x * req.params.y))
// });

// // app.get("/add/:x/:y", function(req, res) {
// //   res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)))
// // }); 

// app.get("/add/*", function(req, res) {
// 	console.log(req.params);
//   let myParams = req.params[0].split("/")
//   console.log(req.params[0]);
//   const result = myParams.reduce(function(total, num) {
//     return total + parseInt(num)
//   }, 0);
//   res.send("The answer is  " + result)
// })
// =========================================================================

const express = require('express')
const exphbs  = require('express-handlebars')

var app = express();

// this line below, sets a layout look to your express project
//app.engine('handlebars', exphbs({defaultLayout: 'main'}))

// this line sets handlebars to be the default view engine
app.set('view engine', 'handlebars')

// context given are these 
var context = {
  name: "<p>Sterling Archer</p>",
  body: "<p>This is a post about &lt;p&gt; tags</p>"
}

app.get('/', function (req, res) {
  // running this will let express to run home.handlebars file in your views folder
  res.render('home', context);
});
app.listen(3000);