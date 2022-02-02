
import {MAINWEATHERCARD as mwc,SECWEATHERCARD as swc} from './weathercard.js';
const appendCurrentCard = (res) =>{
    const {
        location : {
            name,
            localtime
            },
            current : {
             temp_c,
             wind_kph,
             wind_dir ,
             humidity ,
            condition : {
                text ,
                icon , 


             }
            }

    } =  res;
    const date = localtime.split(' ')[0];
    new mwc(temp_c,name,wind_kph,wind_dir,humidity,icon,text,date).setUpMainCard();
    if (res.location === 'undefined'){
        return -1;
    }

};

const appendChildCards = (forcastDays) =>{
   
    forcastDays.forEach(day =>{
        const {
            date,
            day : {
                maxtemp_c,
                mintemp_c,
                condition : {
                    text,
                    icon
                }
            },
          
        } = day;
        const dateSplit = date.split(' ')[0];
        new swc(maxtemp_c,mintemp_c,icon,text,dateSplit).setUpSecCard();
    });
   
    

};

const getData = async (requestURL)=>{
    const res = await fetch(requestURL);
    const resJson = await res.json();
    return resJson;                                                      
};

const appendCards = async (location,days,weatherCardsContainer)=> {
    const res = await getData(`http://api.weatherapi.com/v1/forecast.json?key=defcc7e309a04cd5b8913744221201&q=${location}&days=${days}&aqi=no&alerts=no`);
    if(!res.hasOwnProperty('error')){
        weatherCardsContainer.innerHTML = "";
        appendCurrentCard(res);
        let {
            forecast : {
                forecastday : forcastDays
            }
        } = res;
        console.log(forcastDays);
        forcastDays.shift();
        appendChildCards(forcastDays);
       
    }
 
  
};

export {appendCards};



