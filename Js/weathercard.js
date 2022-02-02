
class WEATHERCARD {
    constructor(tempImgSrc,date,condition){
        this.tempImgSrc = tempImgSrc;
        this.date = new Date(date).toLocaleDateString('default',{weekday: 'long', month: 'long', day: 'numeric' }).split(" ");
        this.condition = condition;
        this.cardsContainer = document.querySelector('.weather-cards .container');
        this.card = document.createElement('div');
        this.card.classList.add('weather-cards__card');
    }
   
 
    
}

class MAINWEATHERCARD extends WEATHERCARD {
    constructor(currentTemp,city,windSpeed,windDir,humidity,tempImgSrc,condition,date){
        super(tempImgSrc,date,condition);
        this.currentTemp = currentTemp;
        this.city = city;
        this.windSpeed = windSpeed;
        this.windDir = windDir;
        this.humidity = humidity;
     }
   
     
    
     setUpMainCard(){
        this.card.innerHTML = `
      
        <div class="card__date card__date--current">
            <p class=date__day>${this.date[0]}</p>
            <p class=date__date>${this.date[2]} ${this.date[1]}</p>
        </div>
        <div class="card__weather-details card__weather-details--primary">
            <h4 class="weather-details__location">${this.city}</h4>
            <div class="weather-details__temp">
                <p class="weather-details__temp-degree-max">${this.currentTemp}&#8451</p>
                <figure class="weather-details__temp-img">
                    <img src="${this.tempImgSrc}" alt="">
                </figure>
            </div>
            <p class="weather-details__condition">${this.condition}</p>
            <ul class="weather-details__further-info">
                <li>
                    <figure>
                        <img src="./images/icon-umberella.png" alt="">
                    </figure>
                    <p class="further-info__rain-percentage">${this.humidity}</p>
                </li>
                <li>
                    <figure><img src="./images/icon-wind.png" alt=""></figure>
                    <p class="further-info__wind-speed">${this.windSpeed}km/h</p>
                </li>
                <li>
                    <figure><img src="./images/icon-compass.png" alt=""></figure>
                    <p class="further-info__wind-dir">${this.windDir}</p>
                </li>
            </ul>
        </div>
   
        `;
        this.cardsContainer.appendChild(this.card);
     }
}
class SECWEATHERCARD extends WEATHERCARD {
    constructor(maxTemp,minTemp,tempImgSrc,condition,date){
        super(tempImgSrc,date,condition);
             this.maxTemp = maxTemp;
             this.minTemp = minTemp;
         
        }

 

    setUpSecCard(){
        this.card.innerHTML = `
   
        <div class="card__date">
            <p class=date__day>${this.date[0]}</p>
        </div>
        <div class="card__weather-details card__weather-details--secondary">
            <figure class="weather-details__temp-img">
                <img src="${this.tempImgSrc}" alt="">
            </figure>
            <div class="weather-details__temp">
                <p class="weather-details__temp-degree-max">${this.maxTemp}&#8451</p>
                <p class="weather-details__temp-degree-min">${this.minTemp}&#8451</p>
            </div>
            <p class="weather-details__condition">${this.condition}</p>
        </div>
  
        `;
        this.cardsContainer.appendChild(this.card);
     }
     

}

export {
    MAINWEATHERCARD,
    SECWEATHERCARD
};