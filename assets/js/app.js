let resultFood = document.getElementById("resultFood"); 
let searchBtn  = document.getElementById("search-btn");
let urlAPI     = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let userInput  = document.getElementById("userInput").value;

//event listner
//searchBtn.addEventListener ('click' , getMealList);

//get mealList that match with thne name of recepie

//function getMealList(){
    
fetch (urlAPI + "Big Mac")
.then ((response) => response.json())
.then ((data) => {
    console.log(data);
}); 

