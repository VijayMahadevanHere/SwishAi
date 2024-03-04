import mongoose, { Document, Schema, models } from "mongoose";
export  interface Iimage extends Document{
    title: string;
    transformation: string;
    publicId: string;
    secureUrl: string; // Assuming secureUrl is a string representation of URL
    width?: number;
    height?: number;
    config?:object;
    transformationUrl?: string; // Assuming transformationUrl is a string representation of URL
    aspectRatio?: string;
    color?: string;
    promt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
        


    }
    createdAt: Date;
    updatedAt: Date;
}





const ImageSchema = new Schema({
    title:{type:String, required : true},
    transformation: {type: String, required : true},
    publicId:{type: String, required : true},
    secureUrl:{type: URL, required : true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type: URL},
    aspectRation:{type:String},
    color:{type:String},
    promt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()},
    })


    const Image = models?.Image || mongoose.model('Image',ImageSchema)


    export default Image