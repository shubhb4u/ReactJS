const express = require('express')
const app = express()

app.use(express.json());

//Parameters - - - - -- - - - - - - -

app.get('/user/:id', (req,res) => {
    console.log(req.params.id);
    res.send("user id received");
})

app.get('/user/username', (req,res) => {
    console.log(req.params.username);
    console.log(req.params);
    res.send("user id received");
})

// Queries --- - - - - -

app.get('/user', (req,res) => {
    console.log(req.query);
})
// let users = {};
// app.get('/user', (req,res) => {
//     res.send(users);
// })

// app.post('/user', (req,res) => {
//     console.log(req.body);
//     users = req.body;
//     res.json({
//         message: 'Data received',
//         user: req.body
//     });

// });


// //Patch - 

// app.patch('/user', (req,res) => {

//     console.log('req.body-->> ', req.body);
//     let dataToBeUpdated = req.body;
//     for(key in dataToBeUpdated){
//         users[key] = dataToBeUpdated[key];
//     }
//     res.json({
//         message: "Data updated successfully"
//     });

// });

// // Delete - 

// app.delete('/user', (req,res) => {

//     users = {};
//     res.json({
//         message:"Data deleted"
//     })
// }) 



// // CLASS ------>>>>>> 1

// app.get('/', function (req, res) {
//   res.sendFile('/Users/shubhammazumdar/Library/Mobile Documents/com~apple~CloudDocs/C Lion/FJP 9/100Days/Pep/views/index.html')
// })

// app.get('/about', function (req, res) {
//     res.sendFile('/views/about.html', {root:__dirname});
// })

// // Redirecting
// app.get('/about-us', function (req, res) {
//     res.redirect('/about');
// })

// //404 page

// app.use((req,res) => {
//     res.status(404).sendFile('./views/404.html', {root:__dirname});
// })

app.listen(3000)