let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req, res) {
    res.send('app.get for test was executed');
    console.log('app.get for test was executed');
});

app.use(express.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
    //response.send(request.body); 
    let q = parseInt.(request.body['qty_textbox']);
    if (typeof q != 'undefined') {
    response.send(`Thank you for purchasing ${q} things!`);
    } else { response.send('Invalid quantity specified.'); }

 });

app.all('*', function (request, response, next){
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
});


app.listen(8080, () => console.log('listening on port 8080'));
//note the use of an anonymous function here to do a callback