let quote = document.querySelector(".q");
let newquotebtn = document.querySelector(".newquote");
let author = document.querySelector(".a_name");
let soundbtn = document.querySelector(".sound");
let copybtn = document.querySelector(".copy");
let sharebtn = document.querySelector(".share");

newquotebtn.addEventListener("click", randomquotes)


const url = "https://api.quotable.io/random"

function randomquotes(){
    newquotebtn.classList.add("loading");
    newquotebtn.innerText="Loading Quote..."
    fetch(url).then(res=>res.json()).then(data=>{
        quote.innerText = data.content;
        author.innerText=data.author;
        newquotebtn.innerText="New Quote"
        newquotebtn.classList.remove("loading")

    })
}

soundbtn.addEventListener('click', ()=>{
    let utterence = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterence);
});

copybtn.addEventListener("click", ()=>{
    console.log("click")
    navigator.clipboard.writeText(quote.innerText);
})
