const postFeedback = () => {
    var name = document.getElementById('feedback-username').value;
    var feedbackText = document.getElementById('feedback-text').value;

    console.log(name);
    console.log(feedbackText);

    var newFeedback = {
        username: name,
        feedback: feedbackText
    };

    console.log(newFeedback);

    // Post the new feedback data to db.json
    fetch('http://localhost:3000/feedbacks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}