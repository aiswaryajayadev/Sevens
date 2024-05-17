var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');

const fetchData = async () => {
  const result = await fetch("http://localhost:3000/matches");
  let matches = await result.json();
  let found;
  
  matches.forEach((match) => {
    if (match.match_id == value) {
      found = match;
      console.log(found);
    }
  });

  if (found) {
    const productContainer = document.getElementById("playerMatchRating");
    productContainer.innerHTML = `
      <tr class="playerRatingTableHead">
        <th>Player</th>
        <th>Rating</th>
      </tr>`; 

    found.teams.forEach(team => {
      team.players.forEach(player => {
        let productCard = document.createElement("tr");
        productCard.className = "playerRatingTableDataRow";
        productCard.innerHTML = `
          <td class="playerName">${player.name}</td>
          <td class="playerRate">${player.performance}</td>
        `;
        productContainer.appendChild(productCard);
      });
    });

    
    const matchContainer = document.getElementById("matchCard");

    
    const teamElements = matchContainer.querySelectorAll(".team");
    teamElements[0].querySelector("img").src = found.teams[0].team_logo;
    teamElements[0].querySelector("p").innerText = found.teams[0].team_name;
    teamElements[1].querySelector("img").src = found.teams[1].team_logo;
    teamElements[1].querySelector("p").innerText = found.teams[1].team_name;

    
    matchContainer.querySelector(".score h2").innerText = found.match_score_details.score_card;

    
    const goalsContainer = matchContainer.querySelector(".goals");
    const goalsDetails = found.match_score_details.goals;
    goalsContainer.innerHTML = "<h3>Goals</h3>"; 

    goalsDetails.forEach(goal => {
      const goalElement = document.createElement("div");
      goalElement.classList.add("goal");
      goalElement.innerHTML = `<div>${goal.scored} ${goal.Time}</div>
                               <div>Assisted by: ${goal.Assist}</div>`;
      goalsContainer.appendChild(goalElement);
    });
  }
};

fetchData();

const ScordBoardData = async () => {

 
let name = JSON.parse(localStorage.getItem("usernames"));
let scores = JSON.parse(localStorage.getItem("scores"));
let obj;

if (Array.isArray(name) && Array.isArray(scores)) {
    
    obj = Object.fromEntries(name.map((key, index) => [key, scores[index]]));
} else {
    console.error("The retrieved values are not valid arrays.");
}


  console.log(name);
  console.log(scores);
  console.log(obj); 

 
  const dataArray = Object.entries(obj);


dataArray.sort((a, b) => b[1] - a[1]);


const sortedData = Object.fromEntries(dataArray);


  console.log(sortedData);

  const scoreBoardContainer = document.getElementById("t-body");

  const mappedData = Object.keys(sortedData).map(key => ({
    username: key,
    score: sortedData[key]
}));
console.log(mappedData);

mappedData.forEach(user => {
    let scoreBoardCard = document.createElement("tr");
    scoreBoardCard.className = "scoreCardHeadRow rowStyle";
    scoreBoardCard.innerHTML = `
      <th class="scoreCardTableData scoreCardDataname">${user.username}</th>
      <th class="scoreCardTableData scoreCardDatascore">${user.score}</th>
    `;
    scoreBoardContainer.appendChild(scoreBoardCard);
  });
};

ScordBoardData();

