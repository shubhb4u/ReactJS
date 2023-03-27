const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/currenttime', function(req, res) {
    res.send('<h1>' + new Date().toISOString() + '</h1>');
}); 

app.get('/', function(req, res){
    res.send('<form action="/store-user" method="POST"><label>Your name</labe><input type = "text" name ="username"></input><button>Submit</button></form>');
})

app.post('/store-user', function(req,res){
    const username = req.body.username;

    //Created the path to store incoming data
    const filePath = path.join(__dirname, 'data', 'users.json');
    //Read the file, it gives normale text
    const fileData = fs.readFileSync(filePath);
    // Conver it to JS arrays/object
    const existingUsers = JSON.parse(fileData);
    // Add the incoming data to the file -
    existingUsers.push(username);
    // COnvert it back to normal text for Write method -
    fs.writeFileSync(filePath,JSON.stringify(existingUsers));
    console.log(username);
    res.send('<h1>Username stored!</h1>');
});

app.get('/users', function(req,res) {

    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    // Conver it to JS arrays/object
    const existingUsers = JSON.parse(fileData);

    let responseData = '<ul>';

    for(const user of existingUsers){
        responseData+= '<li>' + user + '</li>';
    }

    responseData+= '</ul>'
    res.send(responseData)

});

app.listen(3000);