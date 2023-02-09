/*let urlAPI3 = "http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";    
fetch(urlAPI3)
.then((response) => console.log(response.json()))
.then(data => console.log(data));
//.catch((error) => {console.log(error) ;} ) ;  */


let urlAPI           = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let urlAPIRandomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php?';

let searchBtn           = document.getElementById("search_btn");
let userInput           = document.getElementById("searchInput");


let foodImage           = document.querySelector("[data-food-image]");
const foodName          = document.querySelector("[data-food-name]");   


const foodCardTemplate  = document.querySelector("[data-food-template]");
const foodCardContainer = document.querySelector("[data-food-cards-container]");




let valueInput = userInput.addEventListener("keyup", (e) => {
    valueInput = e.target.value;
    console.log(valueInput);
    return valueInput;
})

searchBtn.addEventListener("click", getMeals);


 async function getMeals(){
    let mealSearch  = document.getElementById("searchInput").value;
   
    //l'Url de API + input de l'utilisateur
     let urlAPI      = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+`${mealSearch}`;

     const apiFetch = await fetch(urlAPI)
     const apiResult = await apiFetch.json()
     console.log(apiResult);

    /* console.log("input utilisateur"+ mealSearch);
     let apiAll    = urlAPI + mealSearch;
     console.log('url ' + urlAPI);*/

     /*Boucle pour afficher chaque meal dans une div

    data.meals.forEach ((meal) => {
        const foodCard = foodCardTemplate.content.cloneNode(true).querySelector("div");
        foodCard.querySelector("img").setAttribute("src",meal.strMealThumb);
        foodCard.querySelector("div.card-body > .card-title").innerText = meal.strMeal; 
        foodCardContainer.append(foodCard); 
    }); */

 
    /*test de fetch API général sans l'input de l'utilisateur 
    let urlAPI3 = "https://www.themealdb.com/api/json/v1/1/search.php?s=";    
        fetch(urlAPI3)
        .then((response) => console.log(response.json()))
        .then(data => console.log(data)) 
        .catch((error) => console.log(error) ) ;  

    
  
/*
   const response = await fetch(urlAPI);
   console.log('response ' + response);
   const data     = await response.json();


  

  /* Juste des affichage pour vérifier l'affichage des données 
        console.log(foodCard);
        console.log(foodCard);
        console.log(meal);
        console.log(foodCard); */
}



/*Methode Async de l'API Random food

async function searchRandomMeal(){
    const response = await fetch (urlAPIRandomMeal);
    const data     = await response.json();
   console.log(data);
   
       data.meals.forEach (meal => {
         const foodCard = foodCardTemplate.content.cloneNode(true).querySelector("div");
         foodCard.querySelector("img").setAttribute("src",meal.strMealThumb);
         foodCard.querySelector("div.card-body > .card-title").innerText = meal.strMeal; 
         foodCardContainer.append(foodCard);

})
}*/












