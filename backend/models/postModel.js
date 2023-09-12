const mongoose = require('mongoose')

const postSchema = mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    bannerPic:{
        type: {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    }
},
{
    timestamps: true
})


const postModel = mongoose.model('post', postSchema)
module.exports = postModel