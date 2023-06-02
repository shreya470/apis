const express = require('express');
const app = express();

app.listen(process.env.PORT || 5005);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
console.log("Hello at the top");

let users = [
    {id: 1, name: "rady", text: "Hello World"},
    {id: 2, name: "dara", text: "Hello World"},
    {id: 3, name: "vida", text: "Hello World"},
]

app.get('/users', (req, res) => {
    console.log("Hello in get")
    res.send(users)
})

app.post('/users', (req, res) => {
    let username = req.body.name;
    let texts = req.body.text;

    if(texts.length==0)
    {
        console.log("400 invalid user information") 
        res.status(400).send("invalid user information")

        return;
    }
  
    let user = {
        id: users.length + 1,
        name: username,
        text: texts
    }
  
    console.log("200 valid user information")
    users.push(user);
    res.status(200).send(users);
    
    // TODO : Modify POST 
    // to return 200 if valid user info passed 
    // to return 400 if invalid user info passed; example missing username and/or user text
})