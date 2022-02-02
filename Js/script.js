import {appendCards} from './data.js';


    const hamburgerMenu = document.querySelector('.header__hamburger-menu');
    const locationFind = document.querySelector('.location-input__find input:first-child');
    const findButton = document.querySelector('.find-button');
    const weatherCardsContainer =  document.querySelector('.weather-cards .container');
    const selectGroup = document.querySelector('.select-group');

    appendCards('cairo','3',weatherCardsContainer);
    locationFind.value = "";
    selectGroup.children[0].selected = "true";

    hamburgerMenu.addEventListener('click' , (e)=>{
        const isPressed = e.target.dataset.pressed;
        console.log(e.target);
         if(isPressed === "false"){
        $(e.target.nextElementSibling).addClass('header__active'); 
        e.target.dataset.pressed = true; 
       }else{
        $(e.target.nextElementSibling).removeClass('header__active'); 
        e.target.dataset.pressed = false;
       }
    });


locationFind.addEventListener('keyup' , function (e){
    if(!this.value){
         selectGroup.classList.remove('top-75');
    }else if(/^[A-Za-z]*$/.test(this.value)){
        selectGroup.classList.add('top-75');
    }
});

findButton.addEventListener('click' , (e)=>{
    e.preventDefault();
    if(/^[A-Za-z]*$/.test(locationFind.value)){
       appendCards(locationFind.value,selectGroup.value,weatherCardsContainer);
      
     
    }
    locationFind.value = "";
    selectGroup.children[0].selected = "true";
    selectGroup.classList.remove('top-75');
    
});



