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
            },
            url:{
                type: String,
                required: true
            }
        },
        default:{
            url:"https://picsum.photos/500/600"
        }
    },
    content:{
        type: String,
        required: true
    },
    authorId:{
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