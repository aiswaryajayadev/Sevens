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
        <td class="playerRate">${players.performance}</td> 

            `;

    productContainer.appendChild(productCard);
  });


  match[id].teams[1].players.map((players) => {
    let productCard = document.createElement("tr");
    productCard.className = "playerRatingTableDataRow";
    productCard.innerHTML = `
        
        <td class="playerName">${players.name}</td>
        <td class="playerRate">${players.performance}</td> 

            `;

    productContainer.appendChild(productCard);
  });

}

fetchData();

const matchScoreCard = async () => {
  const result = await fetch("http://localhost:3000/matches");
  const matches = await result.json();

  // Assuming you want to display the first match details
  const match = matches[1];
  const matchContainer = document.getElementById("matchCard");

  // Update team logos and names
  const teamElements = matchContainer.querySelectorAll(".team");
  teamElements[0].querySelector("img").src = match.teams[0].team_logo;
  teamElements[0].querySelector("p").innerText = match.teams[0].team_name;
  teamElements[1].querySelector("img").src = match.teams[1].team_logo;
  teamElements[1].querySelector("p").innerText = match.teams[1].team_name;

  // Update match score
  matchContainer.querySelector(".score h2").innerText = match.match_score_details.score_card;

  // Update goals
  const goalsContainer = matchContainer.querySelector(".goals");
  const goalsDetails = match.match_score_details.goals;
  goalsContainer.innerHTML = "<h3>Goals</h3>"; // Reset goals content

  goalsDetails.forEach(goal => {
    const goalElement = document.createElement("div");
    goalElement.classList.add("goal");
    goalElement.innerHTML = `<div>${goal.scored}  ${goal.Time}</div>
                             <div>Assisted by: ${goal.Assist}</div>`;
    goalsContainer.appendChild(goalElement);
  });
};


matchScoreCard();


const ScordBoardData = async () => {
  const jsonData = await fetch("http://localhost:3000/users");  
    let result = await jsonData.json();
    result.sort((a, b) => b.match_score - a.match_score);
    console.log(result);

   
    const scoreBoardContainer = document.getElementById("t-body");

    result.map((players) => {
      let scoreBoardCard = document.createElement("tr");
      scoreBoardCard.className = "scoreCardHeadRow  rowStyle";
      scoreBoardCard.innerHTML = `
         
      <th class="scoreCardTableData scoreCardDataname">${players.username}</th>
      <th class="scoreCardTableData scoreCardDatascore">${players.match_score}</th>
   
              `;
   
              scoreBoardContainer.appendChild(scoreBoardCard);
    });
 
  }

  ScordBoardData();