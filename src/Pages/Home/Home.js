import axios from "axios";
import "./Home.scss";

function Home() {
  axios
    .get("https://api.kanye.rest/")
    .then((response) => {
      const kanyeQuote = response.data.quote;
      quoteElement.textContent = kanyeQuote;
    })
    .catch((error) => {
      console.error(error);
    });
  // Call the function to get the initial quote
  getKanyeQuote();

  // Refresh the quote every 10 seconds
  setInterval(getKanyeQuote, 5000);

  return <>{/* Place Components Here */}</>;
}

export default Home;
