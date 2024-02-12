import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        require: true,
        unique:true,
    },
    password:{
        type:String,
        require: true,
        
    },
    profilePicture:{
        type:String,
        default:'https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
    },
},
{timestamps:true}
);


const User=mongoose.model('User',userSchema);
export default User;

