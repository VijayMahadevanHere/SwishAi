import mongoose, { Document, Schema, models, } from "mongoose";


export interface User extends Document {
    clerkId: string;
    email: string;
    userName: string;
    photo?: string; // Assuming photo is a string representation of URL
    firstName: string;
    lastName: string;
    planId: string;
    creditBalance: string;
}



const UserSchema= new Schema({
    clerkId:{type:String, required:true,unique:true},
    email:{type:String, required:true,unique:true},
    userName:{type:String, required:true,unique:true},
    photo:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    planId:{type:Number, default:1},
    creditBalance:{type:Number, default:10}
  


})


const User = models?.User || mongoose.model('User',UserSchema)


export default User