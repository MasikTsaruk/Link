const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 2000 || process.env.PORT;


const connectDb = require('./config/db')
const indexRoutes = require('./routes/index');
const linkRoutes = require('./routes/links');



app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(indexRoutes);
app.use('/links', linkRoutes);



connectDb().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is Working on ${PORT} port!`);
});
}).catch((err)=>{
    console.log('Error', JSON.stringify(err));
});

