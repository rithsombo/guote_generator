const btnswitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuhtor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const quoteBtn = document.getElementById('new-quote');
 
 let apiqtote = [];
 //new quote
 function newQuote(){
    const quote = apiqtote[Math.floor(Math.random() * apiqtote.length)];
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    if(!quote.author){
        quoteAuhtor.textContent ='Unknown';
    }
    else{
        quoteAuhtor.textContent =quote.author;
    }
 }

 //event listener
 quoteBtn.addEventListener('click', newQuote);
 //Get quote from API
 async function getQuote(){
    const quoteurl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const respone = await fetch(quoteurl);
        apiqtote = await respone.json();
        newQuote();
    }catch(error){

    }
 }
 getQuote();
 function darkMode(){
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
 }
 function lightMode(){
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
 }
function switchtheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
}
 btnswitch.addEventListener('change',switchtheme);