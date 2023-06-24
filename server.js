const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({extendedUrl: true}));

const user = [
    {name:'Shoaib'}
]
app.get('/api', (req, res) => {
    res.json(user);
})
// getting data from reactjs server
app.post('/data', (req, res)=>{
    console.log(req.body);
    console.log('users');
    res.sendStatus(200);
});

app.listen(4000, (req, res) => {
    console.log("listening 4000");
})


