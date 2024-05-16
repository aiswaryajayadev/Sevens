const fetchData = async () => {
    try {
        let response = await fetch("http://localhost:3000/feedbacks", { method: "GET" });
        let data = await response.json();
        console.log(data);
        let html = ""; 

        for (let feedback of data) {
            html += `<div class="testimonials"style="margin:60px 0px 40px 0px; padding:32px; width:80%;border-radius:10px;text-align:justify; background-color:#EEEEEE;">
            <p><b>Username</b>: ${feedback.username}</p>
            <p><b>Feedback</b>: ${feedback.feedback}</p>
            </div>`;
            document.getElementById("testimonials").innerHTML = html;

        }

        document.getElementById("testimonials").innerHTML = html;
    }
    catch (err) {
        console.log(err);
    }
};

fetchData();