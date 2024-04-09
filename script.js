const API_URL="https://api.quotable.io/random";
const quote=document.getElementById('quote');
const author=document.getElementById('author');

async function Quote(API_URL){
    const response=await fetch(API_URL);
    let data = await response.json();
    console.log(data);
    return data;
}

async function newQuote(){
    const data = await Quote(API_URL);
    quote.innerHTML=`" ${data.content} "`;
    author.innerHTML=`-- ${data.author}`;
}
