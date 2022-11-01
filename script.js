

const quoteCard= document.querySelector(".quote-card");

const btnNewQuote =document.querySelector(".btn");

let data;

const newQuote = function (){

    const request = new XMLHttpRequest();
    request.open("GET","https://animechan.vercel.app/api/random");
    
    request.send();
    request.addEventListener("load",function(){
    data=JSON.parse(this.responseText);
    data=`    <p class="anime" aria-label="anime-name">${data.anime}</p>
    <p class="character" aria-label="character-name">${data.character}</p>
    <p class="quote" aria-label="quote"> ${data.quote}</p>`
    quoteCard.style.opacity="1";
    quoteCard.innerHTML="";
    quoteCard.insertAdjacentHTML("afterbegin",data);
}

    );
}

btnNewQuote.addEventListener("click",
 
    newQuote

);
