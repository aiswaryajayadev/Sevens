document.getElementById("numUsers").addEventListener("input", function () {
  var numUsers = document.getElementById("numUsers").value;
  if (numUsers > 3) {
    alert("Only 3 users can Play !!!");
  } 
  else {
    var userFormsDiv = document.getElementById("user-entries-box");
    userFormsDiv.innerHTML = ""; // Clear previous inputs

    for (var i = 0; i < numUsers; i++) {
      var input = document.createElement("input");
      // var label=document.createElement('label');
      input.type = "text";
      input.placeholder = "Username " + (i + 1);
      input.id = "user-" + (i + 1);
      console.log(input.id);
      // input.placeholder = 'User ' + (i + 1) + ' Name';
      userFormsDiv.appendChild(input);
      // userFormsDiv.appendChild(label);
    }

    var nextLink = document.getElementById("nextLink");
    nextLink.addEventListener("click", function () {
      var usernames = [];
      for (var i = 1; i <= numUsers; i++) {
        var username = document.getElementById("user-" + i).value;
        usernames.push(username);
      }

      localStorage.setItem("usernames", JSON.stringify(usernames));

     
      // var usersObject = createUsersObject(usernames);
      
      nextLink.href = `../Html/playerSelection.html?value=${value1}`;
    });
  }
});


var urlParams = new URLSearchParams(window.location.search);
var value1 = urlParams.get("value");
const btnDiv = document.getElementById("match-value");
let button = document.createElement("div");
button.innerHTML = `
<a id="nextLink" href="#" >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Next
</a>`;

btnDiv.appendChild(button);

const submitUsername = (numUsers) => {
  for (var i = 1; i <= numUsers; i++) {
    var user = document.getElementById("user-" + i).value;
    var newUserName = {
      username: user,
      score: 0,
    };
    fetch("http://localhost:3000/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserName),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }
};
