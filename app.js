const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const tweet = document.getElementById('tweet');

let realData = "";
let quoteData = ""


// function to get the quote and it's author 
const getNewquote = () => {

    let random = Math.floor(Math.random()*1600);
    quoteData = realData[random]
    quotes.innerText = `"${quoteData.text}" `;

    if(quoteData.author == null){
        author.innerText = "Unknown";
    }
    else{
        author.innerText = ` - ${quoteData.author}`;
    }
}


// function for tweet 
const tweetQuote = () => {
    let tweetapi = `https://twitter.com/intent/tweet?text=${quoteData.text} ${quoteData.author}`;
    window.open(tweetapi);
}


// async function to call the api 
const getQuote = async () => {
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json(); //convert to json data

        getNewquote();

    }catch(err){
    }
}


newQ.addEventListener('click', getNewquote);
tweet.addEventListener('click', tweetQuote);
getQuote();