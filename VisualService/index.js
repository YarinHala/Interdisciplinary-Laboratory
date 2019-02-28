var express     = require('express'),
    events      = require('events'),
    url         = require('url'),
    bodyParser  = require('body-parser'),
    DS          = require('./services/DataService'),
    app         = express(),
    port        = process.env.PORT || 3000;
    

dataservice = new DS();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/assets', express.static(`${__dirname}/public`));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/allSongs',(req,res) =>{
    console.log('GET - /allSongs');
    dataservice.getAllSongs()
        .then(
            (data) => {
                if (!data.length) {
                    console.log('no data return');
                    res.status(404).json('no db is abvileble');

                } else {
                    res.set('Content-Type', 'application/json');
                    res.set('header-One' , 'getAllCatagories');
                    res.status(200).json(data);
                }
            }, (error) => {
                console.log(error);
            });
});

app.get('/motionThrowYears/:start/:end',(req,res) =>{
    let start   = req.params.start;
    let end     = req.params.end;

    dataservice.motionThrowYears(start,end)
        .then(
            (data)=>{
                if(!data.length){
                    console.log('no data returnd');
                    res.status(404).jason('no data returnd or no db avileble');

                } else{
                    res.set('Content-Type', 'application/json');
                    res.set('header-One' , 'getAllCatagories');
                    res.status(200).json(data);                
                }
            },(error)=> {
                console.log(error);   
        });
});


app.get('/statsForYear/:year',(req,res) =>{
    let year    = req.params.year;
    dataservice.statsForYear(year)
        .then(
            (data)=>{
                if(!data.length){
                    console.log('no data returnd');
                    res.status(404).jason('no data returnd or no db avileble');

                } else{
                    res.set('Content-Type', 'application/json');
                    res.set('header-One' , 'getAllCatagories');
                    res.status(200).json(data);                
                }
            },(error)=> {
                console.log(error);   
        });
});

app.get('/top3Gneres/:year/:end',(req,res) =>{
    console.log('GET - /top3Gneres/:year');
    let year    = req.params.year;
    let end     = req.params.end;
    dataservice.top3Gneres(year,end)
        .then(
            (data) =>{
                if (!data.length){
                    console.log('no data return');
                    res.status(404).json('no data returnd or no db is avileble');

                } else{
                    res.set('Content-Type', 'application/json');
                    res.set('header-One' , 'getAllCatagories');
                    res.status(200).json(data);
                }
            }, (error) =>{
                console.log(error);
            });
});


app.all('*',(req,res) =>{
    res.send('Got lost? This is a friendly 404 page :) :)');
});


app.listen(port,()=>{console.log(`listen on port ${port}`);});


