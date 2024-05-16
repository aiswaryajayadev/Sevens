var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');

const fetchData = async () => {
  const result = await fetch("http://localhost:3000/matches");
  let match = await result.json();
  let id =1;
  console.log(match[0].teams[0].players);
  const productContainer = document.getElementById("playerMatchRating");

  match[id].teams[0].players.map((players) => {
    let productCard = document.createElement("tr");
    productCard.className = "playerRatingTableDataRow";
    productCard.innerHTML = `
        
        <td class="playerName">${players.name}</td>
        <td class="playerRate">${players.rating}</td> 

            `;

    productContainer.appendChild(productCard);
  });


// // Get the players array and sort by rating in descending order
// let sortedPlayers = match[id].teams[0].players.sort((a, b) => b.rating - a.rating);

// sortedPlayers.map((players) => {
//     let productCard = document.createElement("tr");
//     productCard.className = "playerRatingTableDataRow";
//     productCard.innerHTML = `
//         <td class="playerName">${players.name}</td>
//         <td class="playerRate">${players.rating}</td>
//     `;
//     productContainer.appendChild(productCard);
// });

  match[id].teams[1].players.map((players) => {
    let productCard = document.createElement("tr");
    productCard.className = "playerRatingTableDataRow";
    productCard.innerHTML = `
        
        <td class="playerName">${players.name}</td>
        <td class="playerRate">${players.rating}</td> 

            `;

    productContainer.appendChild(productCard);
  });

  
};

fetchData();


const fetchmatchData = async () => {
  const result = await fetch("http://localhost:3000/matches");
  let match = await result.json();
  let id =1;
  console.log(match[0].teams[0].players);
  const productContainer = document.getElementById("playerMatchRating");

  match[id].teams[0].players.map((players) => {
    let productCard = document.createElement("tr");
    productCard.className = "playerRatingTableDataRow";
    productCard.innerHTML = `
        
        <td class="playerName">${players.name}</td>
        <td class="playerRate">${players.rating}</td> 

            `;

    productContainer.appendChild(productCard);
  });
};