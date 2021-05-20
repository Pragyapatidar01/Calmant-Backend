const mongoose=require('mongoose');

const DescriptionSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    phone_no:{
        type:String
    },
    desc:{
        type:String
    },
    regarding:{
        type:Array
    },
    age: {
     type:String,
     require:true
    }
});

module.exports=Description =mongoose.model('desc',DescriptionSchema);