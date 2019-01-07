var song = require('../schemas/song'),
    consts   = require('../consts'),
    Promise = require('promise'),
    mongoose = require('mongoose'), //Import the mongoose module
    mongoDB = consts.MLAB_KEY;//Set up default mongoose connection



console.log('connect to db');
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

/*Get connection*/
var db = mongoose.connection;

/*Bind connection with error event*/
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports =  class Data{
    
    populateTree(array){
        let top3 = [];
        for(let i = 0 ; i < 3 ; i++){
            top3[i]=array[i];
        }
        return top3;
    }
    
    sortArrey(array){
        let top3 =[];
        array.sort(function(a,b){
            return a.val - b.val; 
        });
        array.reverse();
        return this.populateTree(array);
    }
    
    checkString(string,substring){
        if( string.indexOf(substring) > -1)
            {
            return true;
                }
        return false;
    }
    
     getAllSongs(){
        return new Promise((resolve , reject)=>{
            song.find({} , (err , data)=>{
                if(err){
                    reject(`error : ${err}`);
                }else{
                    console.log('getAllSongs:\n' + data);
                    resolve(data);
                }
            });
        });

    }
    
    
    top3Gneres(year,end){
        return new Promise((resolve , reject)=>{
            let top3 = [];
           let temp_top3 = [{name : 'rock', val : 0},
                            {name : 'pop' , val : 0},
                            {name : 'hip pop' ,val: 0},
                            {name : 'rap' , val : 0},
                            {name : 'dance' , val : 0},
                            {name : 'country' , val : 0},
                            {name : 'r&b' , val : 0},
                            {name : 'soul' , val : 0},
                            {name : 'folk' , val : 0},
                            {name : 'jazz' , val : 0},
                            {name : 'house' , val : 0},
                            {name : 'trance' , val : 0},
                            ];
            song.find({year:{ $gt:`${year}`, $lt: `${end}` }} , (err , data)=>{
                if(err){
                    reject(`error : ${err}`);
                }else{
                    for(let index in data){
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'rock')){
                                        temp_top3[0].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'pop')){
                                        temp_top3[1].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'hip pop')){
                                        temp_top3[2].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'rap')){
                                         temp_top3[3].val +=1 ;
                                        break;
                                    }
                                }
                            }
                           
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'dance')){
                                        temp_top3[4].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'country')){
                                         temp_top3[5].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'r&b')){
                                          temp_top3[6].val +=1 ;
                                        break;
                                    }
                                }
                            }
                           
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'soul')){
                                        temp_top3[7].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'folk')){
                                        temp_top3[8].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'jazz')){
                                        temp_top3[9].val +=1 ;
                                        break;
                                    }
                                }
                            }
                       for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'house')){
                                        temp_top3[10].val +=1 ;
                                        break;
                                    }
                                }
                            }
                        for(let i in data[index].genre){
                                if(typeof(data[index].genre[i])==='string'){
                                    if(this.checkString(data[index].genre[i],'trance')){
                                        temp_top3[11].val +=1 ;
                                        break;
                                    }
                                }
                            }
                    }
                    /*let top3 = topTree(temp_top3);*/ 
                    resolve(this.sortArrey( temp_top3));
                }
            });
        });
    }
}