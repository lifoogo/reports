const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const app = express();
const authRouter = require('./authRouter');

app.use(express.json());
app.use("/auth", authRouter);
const start = () =>{
    try{
        mongoose.connect(`mongodb+srv://lifoogo:1769help@cluster0.s9qxogz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`);
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }catch(e){
        console.log(e);
    }
}
start();