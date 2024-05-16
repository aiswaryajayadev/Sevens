
  const fetchData = async () => {
    const jsonData = await fetch("http://localhost:3000/users");   
      let result = await jsonData.json();
      result.sort((a, b) => b.leader_score - a.leader_score);
      console.log(result);

      
      const productContainer = document.getElementById("table-body");

      result.map((players) => {
        let productCard = document.createElement("tr");
        productCard.className = "leaderBoardRow  rowStyle";
        productCard.innerHTML = `
           
        <th class="leaderBoardData leaderboardusername">${players.username}</th>
        <th class="leaderBoardData leaderboardscore">${players.match_score}</th>
     
                `;
     
        productContainer.appendChild(productCard);
      });
   
    }


    fetchData()