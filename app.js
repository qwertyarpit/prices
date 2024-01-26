// let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
// let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
// let stockPrice = document.querySelector('#price1');
// let price2=document.querySelector('#price2')
// // let stockName=document.querySelector('#name1')
// let lastPrice = null; 


// ws1.onmessage = (event) => {
// // console.log(event.data)
// let stockObject = JSON.parse(event.data);
// let price =parseFloat(stockObject.p).toFixed(3);
// let name=stockObject.s;
// // console.log(name)
// // stockName.innerText=name;
// stockPrice.innerText = price;
// stockPrice.style.color = !lastPrice || lastPrice===price ? 'black' : price > lastPrice ? 'green ' : 'red';

// lastPrice= price;

// };

// ws2.onmessage = (event) => {
//   // console.log(event.data)
//   let stockObject1 = JSON.parse(event.data);
//   let price1 =parseFloat(stockObject1.p).toFixed(3);
//   // let name=stockObject.s;
//   // console.log(name)
//   // stockName.innerText=name;
//   price2.innerText = price1;
//   // stockPrice.style.color = !lastPrice || lastPrice===price ? 'black' : price > lastPrice ? 'green ' : 'red';
  
//   // lastPrice= price;
  
//   };


// const cryptos = [
//   { symbol: 'btcusdt', priceEl: document.querySelector('#price1') },
//   { symbol: 'ethusdt', priceEl: document.querySelector('#price2') },
//   { symbol: 'busdusdt', priceEl: document.querySelector('#price3') },
//   { symbol: 'bnbusdt', priceEl: document.querySelector('#price4') },
//   { symbol: 'usdcusdt', priceEl: document.querySelector('#price5') },
//   { symbol: 'xrpusdt', priceEl: document.querySelector('#price6') },
//   { symbol: 'trxusdt', priceEl: document.querySelector('#price7') },
//   { symbol: 'adausdt', priceEl: document.querySelector('#price8') },
//   { symbol: 'maticusdt', priceEl: document.querySelector('#price9') },
//   { symbol: 'dogeusdt', priceEl: document.querySelector('#price10') },
//   { symbol: 'solusdt', priceEl: document.querySelector('#price11') },
//   { symbol: 'busdusdt', priceEl: document.querySelector('#price12') },
//   { symbol: 'dotusdt', priceEl: document.querySelector('#price13') },

//   // add more cryptocurrencies as needed
// ];

// let lastPrices = {};

// cryptos.forEach(crypto => {
//   const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${crypto.symbol}@trade`);

//   ws.onmessage = event => {
//     const stockObject = JSON.parse(event.data);
//     const price = parseFloat(stockObject.p).toFixed(5);

//     crypto.priceEl.innerText = `$${price}`;
//     crypto.priceEl.style.color = !lastPrices[crypto.symbol] || lastPrices[crypto.symbol] === price ? 'black' : price > lastPrices[crypto.symbol] ? 'green' : 'red';

//     lastPrices[crypto.symbol] = price;
//   };
// });


// const price1 = document.getElementById('price1');
// const change1 = document.getElementById('change1');
// const low1 = document.getElementById('low1');
// const high1 = document.getElementById('high1');
// const volume1 = document.getElementById('volume1');


// let ws= new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
// ws.onmessage = (event) => {
// let priceDetails = JSON.parse(event.data);
// let latestPrice=parseFloat(priceDetails.c).toFixed(4);
// let dayChange =parseFloat(priceDetails.p).toFixed(4);
// let highPrice=parseFloat(priceDetails.h).toFixed(4);
// let lowPrice=parseFloat(priceDetails.l).toFixed(4);
// let volume=parseFloat(priceDetails.v).toFixed(4);
// // console.log(dayChange)
// // console.log(highPrice)
// // console.log(lowPrice)
// // console.log(volume)
// // console.log(latestPrice)

// price1.innerText = latestPrice;
// change1.innerText = dayChange;
// low1.innerText = lowPrice;
// high1.innerText = highPrice;
// volume1.innerText = volume;
// }



const currencies = [
    { symbol: 'BTCUSDT',price: document.getElementById('price1'),change: document.getElementById('change1'),low: document.getElementById('low1'), high: document.getElementById('high1'),volume: document.getElementById('volume1'),},
    { symbol: 'ETHUSDT',price: document.getElementById('price2'),change: document.getElementById('change2'),low: document.getElementById('low2'), high: document.getElementById('high2'),volume: document.getElementById('volume2'),},
    { symbol: 'BUSDUSDT',price: document.getElementById('price3'),change: document.getElementById('change3'),low: document.getElementById('low3'), high: document.getElementById('high3'),volume: document.getElementById('volume3'),},
    { symbol: 'XRPUSDT',price: document.getElementById('price4'),change: document.getElementById('change4'),low: document.getElementById('low4'), high: document.getElementById('high4'),volume: document.getElementById('volume4'),},
    { symbol: 'DOGEUSDT',price: document.getElementById('price5'),change: document.getElementById('change5'),low: document.getElementById('low5'), high: document.getElementById('high5'),volume: document.getElementById('volume5'),},
    { symbol: 'MATICUSDT',price: document.getElementById('price6'),change: document.getElementById('change6'),low: document.getElementById('low6'), high: document.getElementById('high6'),volume: document.getElementById('volume6'),},
    { symbol: 'SOLUSDT',price: document.getElementById('price7'),change: document.getElementById('change7'),low: document.getElementById('low7'), high: document.getElementById('high7'),volume: document.getElementById('volume7'),},
    { symbol: 'SHIBUSDT',price: document.getElementById('price8'),change: document.getElementById('change8'),low: document.getElementById('low8'), high: document.getElementById('high8'),volume: document.getElementById('volume8'),},
    { symbol: 'TRXUSDT',price: document.getElementById('price9'),change: document.getElementById('change9'),low: document.getElementById('low9'), high: document.getElementById('high9'),volume: document.getElementById('volume9'),},
    { symbol: 'BNBUSDT',price: document.getElementById('price10'),change: document.getElementById('change10'),low: document.getElementById('low10'), high: document.getElementById('high10'),volume: document.getElementById('volume10'),},
    // add more currencies here
  ];
  
  let lastPrice={};
  
  currencies.forEach(currency => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${currency.symbol.toLowerCase()}@ticker`);
    // ws.onopen = () => {
    //   // console.log(`WebSocket connection established for ${currency.symbol}`);
    // };
    ws.onmessage = (event) => {
      const priceDetails = JSON.parse(event.data);
      const latestPrice = parseFloat(priceDetails.c).toFixed(4);
      const dayChange = parseFloat(priceDetails.P).toFixed(4);
      const highPrice = parseFloat(priceDetails.h).toFixed(4);
      const lowPrice = parseFloat(priceDetails.l).toFixed(4);
      const volume = parseFloat(priceDetails.v).toFixed(4);
  
      currency.price.innerText = `$${latestPrice}`;

 currency.price.style.color= !lastPrice[currency.symbol] || lastPrice[currency.symbol] ===latestPrice ? 'white' : latestPrice > lastPrice[currency.symbol ] ? '#00ff7b' : 'red';
lastPrice[currency.symbol]=latestPrice;



      currency.change.innerText = `${dayChange}%`;
      currency.change.style.color = dayChange >= 0 ? '#00ff7b' : 'red';




      currency.low.innerText = lowPrice;
      currency.high.innerText = highPrice;
      currency.volume.innerText = volume;
    };
  });





  // this is for getting news

//   const getNews = async () => {
//     const res = await axios.get('https://newsapi.org/v2/everything?q=bitcoin OR dogecoin OR ethereum OR solana OR usdt OR xrp OR shib &excludeDomains=cointelegraph.com,coindesk.com,newsbtc.com&language=en&sortBy=popularity&pageSize=20&apiKey=a1ef41e950d747da954e2cc954d8bfdb');
//     const articles = res.data.articles;
//     for ( let article of articles){
//       const newpara = document.createElement('p');
//       const newlink = document.createElement('a');
//       newlink.innerText = `📢 ${article.title}`;
//       newlink.href = article.url;
//       newpara.appendChild(newlink);
//       newpara.classList.add('articles');
//       news.appendChild(newpara);
//     };
//   };
  
//  getNews();
  

