//variable init :
const btn = document.getElementById("btn"); 
const url = "https://api.adviceslip.com/advice"; //api get address
const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
var oldId = -1; //to protect of getting 2 times the same advice
var newId = -1 ;

async function handleClick () {
    adviceText.innerHTML = "Loading...";
    try {
    while (newId == oldId) {
        const data = await fetch(url);
        const response = await data.json();
        newId = response.slip.id;
        var newAdvice = response.slip.advice;
    }
    oldId = newId;
    adviceNumber.innerHTML=`Advice #${newId}`;
    adviceText.innerHTML=`"${newAdvice}"`;
    } catch (e) {
        console.log(e)
        alert("there has an error : " ,e.message);
    }
    
}

btn.addEventListener("click", handleClick);
handleClick();
