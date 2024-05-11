import mongoose from 'mongoose';

const SignatureSchema = new mongoose.Schema({

    imageData: {
        type : String, 
        // required : true,
        
    },



    // role: {
    //     type: String,
    //     enum: ['admin', 'manager'], // Hanya nilai 'admin' atau 'manager' yang diperbolehkan
    //     default: 'admin', // Nilai default jika tidak disediakan
    // },
    
}, {timestamps: true});


export default mongoose.model('Signature', SignatureSchema);