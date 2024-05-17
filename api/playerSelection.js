var urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get("value");

var urlParams = new URLSearchParams(window.location.search);
var noOfUsers = urlParams.get("numUsers");


const usernames = localStorage.getItem("usernames");
console.log(usernames);



const fetchData = async () => {
  const result = await fetch("http://localhost:3000/matches");
  let matches = await result.json();
  console.log(matches);
  const playerContainer = document.getElementById("playerSelection-row1");

  matches.forEach((match) => {
    if (match.match_id == value) {
      var found = match;
      console.log(found);

      let teamHeading1 = document.createElement("h2");
      teamHeading1.textContent = `Team 1`;
      playerContainer.appendChild(teamHeading1);
      let teamHeading2 = document.createElement("h2");
      teamHeading2.textContent = `Team 2`;
      playerContainer.appendChild(teamHeading2);

      teamHeading2.style.position = "relative";
teamHeading2.style.bottom = "-300px"; 
teamHeading2.style.left = "-25%";
teamHeading2.style.transform = "translateX(-50%)"

      for (let j = 0; j < 2; j++) {
       

        for (let i = 0; i < 7; i++) {
          let player = found.teams[j].players[i];

          let productCard = document.createElement("div");
          productCard.className = "playerSelection-row";
          productCard.innerHTML = `
                        <label class="playerSelection-image">
                            <div class="checkbox-wrapper">
                                <input type="checkbox" id="${player.player_id}" name="players" value="${player.performance}">
                                <label for="${player.player_id}">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </label><br>
                        <div class="col-md-4">
                            <div class="playerSelection-profile-card-1" style="background-image:url('${player.player_image}')">
                                <div class="ps-container">
                                    <div class="profile-name">${player.name}</div>
                                    <div class="profile-username">${player.position}</div>
                                </div>
                            </div>
                        </div>
                        
                    `;
          

          if (j > 0) {
            
            productCard.style.marginTop = "300px";
            productCard.style.position = "relative";
            productCard.style.left = "-1050px";
          }
          playerContainer.appendChild(productCard);

          
          const checkbox = document.getElementById(player.player_id);
          checkbox.addEventListener("change", function () {
            if (this.checked) {
              console.log(`Player ${player.performance} Selected`);
              scoreCalculate(player.performance, 1,0);
            } else {
              console.log(`Player ${player.performance} Deselected`);
              scoreCalculate(-player.performance, -1,0);
            }
          });
        }
      }

      const btn = document.getElementById("btn1");
      let button = document.createElement("div");
      button.innerHTML = `<button type="submit" id="submit-button" class="playerSelection-select-button" >Submit</button>`;
      btn.appendChild(button);

      button
        .querySelector('#submit-button')
        .addEventListener("click", reloadPageUntilSize3);
    }
  });
};

var totalPerformance = 0;
  var clickCount = 0;
  const scoreCalculate = (performance, count,unchecked) => {
    totalPerformance += performance;
    clickCount += count;

    if(unchecked===1){
        totalPerformance =0;
        clickCount =0;
    }
    if (clickCount > 7) {
      alert("Select 7 players");
    }
   
    console.log(totalPerformance);
    console.log(clickCount);
  };

let jsonObject = {};


jsonObject.key1 = "value1";
jsonObject.key2 = "value2";
jsonObject.key3 = "value3";



let userData={};
let counter =1;
var scores = [];
const reloadPageUntilSize3 = () => {

 
  let name = localStorage.getItem("usernames");
   
  const stringArray = name;

  const array = JSON.parse(stringArray);



  console.log(array.length);

  const length =array.length;

  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
});


   
    
    
      scores[counter-1]=totalPerformance;
      localStorage.setItem("scores", JSON.stringify(scores));
   

    

  scoreCalculate(0, 0,1);
  counter++;


  if(length<counter){
    
    window.location.href = `../Html/scoreCard.html?value=${value}`;

    
  }
  
};




fetchData();
