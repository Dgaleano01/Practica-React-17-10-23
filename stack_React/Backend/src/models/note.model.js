import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model('Note', noteSchema);