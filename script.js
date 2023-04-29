const heroElement = document.querySelector(".hero");
const quoteElement = document.querySelector(".quote__text");

function getKanyeQuote() {
    axios
        .get("https://api.kanye.rest/")
        .then((response) => {
            const kanyeQuote = response.data.quote;
            quoteElement.textContent = kanyeQuote;
        })
        .catch((error) => {
            console.error(error);
        });
}

// Call the function to get the initial quote
getKanyeQuote();

// Refresh the quote every 10 seconds
setInterval(getKanyeQuote, 5000);