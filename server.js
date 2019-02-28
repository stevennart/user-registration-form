const express = require('express');
const app = express();
const path = require('path');

const http_port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));


app.get("/", (req,res) => {

    res.redirect("/info");

});

app.get("/info", (req,res) => {

        res.sendFile(path.join(`${__dirname}/views/info.html`));
    
});

app.get("/honesty", (req,res) => {

    res.sendFile(path.join(`${__dirname}/views/honesty.html`));

});

app.use((req, res) => { // if route doesn't match anything above, do this.

    res.status(404).send(`
    
    <div style='display: flex; justify-content: center; align-items: center; height: 100%;'>
    
    <img src='https://cdn-images-1.medium.com/max/640/1*PayLNtfwPr4hIicJtwvVLA.png' alt='404img'>
    
    </div>
     
    
    `);

});

app.listen(http_port, function () {
    //console.log(data);
    console.log(`Express http server listening on port ${http_port}....`);
});

