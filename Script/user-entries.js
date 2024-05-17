document.getElementById('numUsers').addEventListener('input', function () {
    var numUsers = document.getElementById('numUsers').value;
    var userFormsDiv = document.getElementById('user-entries-box');
    userFormsDiv.innerHTML = ''; // Clear previous inputs

    for (var i = 0; i < numUsers; i++) {
        var input = document.createElement('input');
        // var label=document.createElement('label');
        input.type = 'text';
        input.placeholder = 'Username ' + (i + 1);
        input.id = 'user-' + (i + 1);
        console.log(input.id);
        // input.placeholder = 'User ' + (i + 1) + ' Name';
        userFormsDiv.appendChild(input);
        // userFormsDiv.appendChild(label);
    }

    // document.getElementById('nextLink').style.display = 'inline';
});
const submitUsername = (numUsers) => {
    for (var i = 1; i <= numUsers; i++) {
        var user = document.getElementById('user-' + i).value;
        var newUserName = {
            username: user,
            score: 0
        };
        fetch('http://localhost:3000/userData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserName)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
}

