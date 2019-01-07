var mongoose    = require('mongoose');

song = new mongoose.Schema({

    index:{
        type:Number,
        index:1,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    genre:[
        {
        type:String,
        required:true    
        }
    ],
    song:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    song_lyrics:{
        type:String,
        requierd:true   
    },
    lyrics_emotion:{
        type:String,
        requierd:true
    }
    },{collection : 'song_list'})



/*export scema*/
var Song = mongoose.model('Song' , song);
module.exports = Song;

