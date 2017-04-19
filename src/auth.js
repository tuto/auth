import express from 'express';
import bodyParser from 'body-parser';  


const app = express();
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true}));  
app.set('port', 3000);
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+app.get('port')+'!');
});
