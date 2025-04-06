const app=require('./app');
const db=require('./config/db')
const cors = require('cors');
const UserModel=require('./model/user_model');

const port=3500;

app.get('/',(req,res)=>{
    res.send("Hello World!!!")
});

app.use(cors());

app.listen(port,()=>{
    console.log('Server listening on port http://localhost:3500');
});