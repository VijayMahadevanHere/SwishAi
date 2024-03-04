import mongoose,{Mongoose} from "mongoose";


const MONGODB_URL= process.env.MONGODB_URL



interface MongooseConnection{
    conn: Mongoose | null;
    promise:Promise<Mongoose> | null;
}


//define a varible named cached  whcih comes form monoose.connectionn 
//if there is no cached then define its structure
//define and export a function that whill check if therre is a cached.conn otherwise make a connection to mongodb with the given url

let cached : MongooseConnection = (global as any).mongoose

if(!cached){
    cached = (global as any).mongoose = { conn : null,
        promise : null
    }  
}

export const connectToDatabase= async()=>{

    if(cached.conn) return cached.conn;

    if(!MONGODB_URL){
        throw new Error('Missing MongoDB URL')
    }

    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URL,{dbName: "NEXTJS_SAAS", bufferCommands:false}
    )

    cached.conn = await cached.promise
    return cached.conn
} 