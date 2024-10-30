document.addEventListener("DOMContentLoaded", () => {
  // Elements to update with prices
  const prices = {
    bitcoin: document.getElementById("bitcoin-price"),
    ethereum: document.getElementById("ethereum-price"),
    litecoin: document.getElementById("litecoin-price"),
    ripple: document.getElementById("ripple-price"),
    dogecoin: document.getElementById("dogecoin-price"),
  };

  // API URL
  const apiUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,dogecoin&vs_currencies=usd";

  // Load prices from localStorage
  function loadPricesFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem("cryptoPrices"));
    if (storedData) {
      prices.bitcoin.textContent = storedData.bitcoin;
      prices.ethereum.textContent = storedData.ethereum;
      prices.litecoin.textContent = storedData.litecoin;
      prices.ripple.textContent = storedData.ripple;
      prices.dogecoin.textContent = storedData.dogecoin;
    }
  }

  // Save prices to localStorage
  function savePricesToLocalStorage(data) {
    const priceData = {
      bitcoin: data.bitcoin.usd.toFixed(2),
      ethereum: data.ethereum.usd.toFixed(2),
      litecoin: data.litecoin.usd.toFixed(2),
      ripple: data.ripple.usd.toFixed(2),
      dogecoin: data.dogecoin.usd.toFixed(2),
    };
    localStorage.setItem("cryptoPrices", JSON.stringify(priceData));
  }

  // Fetch data and update HTML
  function fetchCryptoPrices() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update prices for each crypto
        prices.bitcoin.textContent = data.bitcoin.usd.toFixed(2);
        prices.ethereum.textContent = data.ethereum.usd.toFixed(2);
        prices.litecoin.textContent = data.litecoin.usd.toFixed(2);
        prices.ripple.textContent = data.ripple.usd.toFixed(2);
        prices.dogecoin.textContent = data.dogecoin.usd.toFixed(2);

        // Save new prices to localStorage
        savePricesToLocalStorage(data);
      })
      .catch((error) => {
        console.error("Error fetching crypto data:", error);
        loadPricesFromLocalStorage();
      });
  }

  // Load any saved prices initially
  loadPricesFromLocalStorage();

  // Fetch initially and update every 30 seconds
  fetchCryptoPrices();
  setInterval(fetchCryptoPrices, 60000);
});
