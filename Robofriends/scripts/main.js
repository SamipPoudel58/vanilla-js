const input = document.querySelector("input");
const cardContainer = document.querySelector(".card_container");
const cards = document.getElementsByClassName("card");

getUsers()
  .then((data) => {
    data.forEach((user) => {
      let url = `https://robohash.org/randomimage${user.username}`;
      cardContainer.innerHTML += `
      <div class="card">
            <img src=${url} alt="">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
        </div>
      `;
    });
  })
  .catch((err) => console.log(err));

input.addEventListener("keyup", (e) => {
  //   console.log(input.value);
  //   console.log(cards);
  for (card of cards) {
    let name = card.children[1].innerText;
    if (!name.toLowerCase().includes(input.value.toLowerCase())) {
      card.style.display = "none";
    } else {
      card.style.display = "inline-block";
    }
  }

  //   console.log(cards[0].children[1].innerText);
});
