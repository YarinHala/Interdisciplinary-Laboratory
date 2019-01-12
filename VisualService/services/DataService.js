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
    
    
    checkWordIsInAraay(Araay,word){
        for(let i in Araay){
            if(typeof(Araay[i])==='string'){
                if(this.checkString(Araay[i],word)){
                    return true ;
                    break;
                }
            }
        }
        return false;
    }
    
    populateTree(array){
        let top3 = [];
        for(let i = 0 ; i < 3 ; i++){
            top3[i]=array[i];
        }
        return top3;
    }
    
    sortArrey(array){
        array.sort(function(a,b){return a - b; });
        array.reverse();
        return array ;
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
    
    
    async top3Gneres(year,end){
    
            let temp_top3 = [{name : 'rock', val : []},
                            {name : 'pop' , val : []},
                            {name : 'hip pop' ,val: []},
                            {name : 'rap' , val : []},
                            {name : 'dance' , val : []},
                            {name : 'country' , val : []},
                            {name : 'r&b' , val : []},
                            {name : 'soul' , val : []},
                            {name : 'folk' , val : []},
                            {name : 'jazz' , val : []},
                            {name : 'house' , val : []},
                            {name : 'trance' , val : []},
                            ];


            let top3 = [];
            let limit = end-year;
            let current_year = Number(year);
            let end_year = Number(end);
            let s_rock = 0,s_pop = 0,s_hiphop = 0,s_rap = 0,s_dance = 0
            let s_country=0,s_rnb=0,s_soul=0,s_plok=0,s_jazz=0,s_house=0,s_trance = 0;
            let genreArray = [0,0,0,0,0,0,0,0,0,0,0,0]
            let arrayByGenre = []; 

            for(let i =0 ; i <= limit+1 ;i++){
                let data = await song.find({year:`${current_year+i}`});
                if((current_year+i) <= end_year){
                        for(let index in data){ 
                            if(this.checkWordIsInAraay(data[index].genre,'rock'))
                                genreArray[0]+=1;
                            if(this.checkWordIsInAraay(data[index].genre,'pop'))
                                genreArray[1]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'hip pop'))   
                                genreArray[2]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'rap'))
                                genreArray[3]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'dance'))
                                genreArray[4]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'country'))
                                genreArray[5]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'r&b'))
                                genreArray[6]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'soul'))
                                genreArray[7]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'polk'))
                                genreArray[8]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'jazz'))
                                genreArray[9]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'house'))
                                genreArray[10]+=1
                            if(this.checkWordIsInAraay(data[index].genre,'trance'))
                                genreArray[11]+=1


                        }

                    temp_top3[0].val.push(genreArray[0]);
                    temp_top3[1].val.push(genreArray[1]);
                    temp_top3[2].val.push(genreArray[2]);
                    temp_top3[3].val.push(genreArray[3]);
                    temp_top3[4].val.push(genreArray[4]);
                    temp_top3[5].val.push(genreArray[5]);
                    temp_top3[6].val.push(genreArray[6]);
                    temp_top3[7].val.push(genreArray[7]);
                    temp_top3[8].val.push(genreArray[8]);
                    temp_top3[9].val.push(genreArray[9]);
                    temp_top3[10].val.push(genreArray[10]);
                    temp_top3[11].val.push(genreArray[11]);

                    for (let i = 0; i < genreArray.length ;  i++) {
                        genreArray[i] = 0;                           
                    }
                 }
            } 


            var sum = 0;
            for (let i = 0; i < limit+1 ;  i++) {


                for(let j = 0; j < temp_top3.length ; j++){


                    if(temp_top3[j].val[i] != null){


                        sum +=  temp_top3[j].val[i];
                        console.log(temp_top3[j].val[i]);
                        console.log(sum);

                    }
                }
                sum/=100;
                console.log(sum);

                for(let j = 0; j < temp_top3.length ; j++){


                    if(temp_top3[j].val[i] != null){


                        temp_top3[j].val[i] = Math.round(temp_top3[j].val[i]/sum);
                        
                        console.log(temp_top3[j].val[i]);
                    }
                }               
                sum=0;
            }



            var thereIsOne = false;
            //console.log(temp_top3);
            for(let l = 0 ; l < limit+1 ; l++){
                //console.log("----------aary + top3----------");
                arrayByGenre = [temp_top3[0].val[l],
                                temp_top3[1].val[l],
                                temp_top3[2].val[l],
                                temp_top3[3].val[l],
                                temp_top3[4].val[l],
                                temp_top3[5].val[l],
                                temp_top3[6].val[l],
                                temp_top3[7].val[l],
                                temp_top3[8].val[l],
                                temp_top3[9].val[l],
                                temp_top3[10].val[l],
                                temp_top3[11].val[l]];
               
                top3 = this.populateTree(this.sortArrey(arrayByGenre));
                
                for (let i = 0; i < temp_top3.length ;  i++) {

                    for(let j = 0; j < top3.length ; j++){

                        if(temp_top3[i].val[l] == top3[j] )
                        {
                            
                            thereIsOne = true;  
                        }
                    }

                    if(!thereIsOne){
                        //console.log(temp_top3[i].val[l] +'!=' +top3[j]);
                        temp_top3[i].val[l] = null;
                       

                    }
                    thereIsOne = false;
                       
                }
            }
        

        console.log("---------------------------");
        console.log(temp_top3);
        console.log("---------------------------");
        return new Promise((resolve, reject)=>{
        resolve(temp_top3);
        })    
    }



}