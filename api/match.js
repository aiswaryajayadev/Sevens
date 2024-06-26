const fetchData = async () => {
    const result = await fetch("http://localhost:3000/matches");
    let matches = await result.json();
    console.log(matches);
    const productContainer = document.getElementById('match-container-id');
    matches.map((match) => {
        let productCard = document.createElement('div');
        productCard.className = "card product-card";
        productCard.innerHTML = `
            

            <div class="match-box">
                <img src="${match.teams[0].team_logo}" style="height: 70px;" alt="">
                <a href="./user-entries.html?value=${match.match_id}">
                 <h4>${match.teams[0].team_name} vs ${match.teams[1].team_name}</h4></a>
                <img src="${match.teams[1].team_logo}" style="height: 70px;" alt="">
                

            </div>  

            `;
       
        productContainer.appendChild(productCard);
    })

}

fetchData()