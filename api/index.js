import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';
// import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGOOS).then(()=>{
    console.log("mongo db is connected...");
})
.catch((err)=>{
    console.log(err);
}); 

// const __dirame=path.resolve();
const app=express();
app.use(express.json());
app.use(cookieParser());


app.listen(3000,()=>{
    console.log("server is running in port 3000!!! ");
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);

// api.use(express.static(path.join(__dirname,'/viot/dist')));
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'viot','dist','index.html'));
// });


app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});