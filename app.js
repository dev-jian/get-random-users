get10Users()
  .then(displayUserCard);

function displayUserCard(users) {
  console.log(users);

  const dobRegex = /\d{4}\-\d{2}\-\d{2}/;

  let output = "";
  users.forEach((user) => {
    const dob = dobRegex.exec(user.dob.date)[0];
    output += `
      <div class="card">
        <img src="${user.picture.large}" class="card-img-top img-thumbnail">
        <div class="card-body">
        <h5 class="card-title mb-3">${user.name.first} ${user.name.last}</h5>
        <p class="card-text">Location: ${user.location.city}, ${user.location.country}</p>
        <p class="card-text">Gender: ${user.gender}</p>
        <p class="card-text">Birthday: ${dob}</p>
        <p class="card-text"><small class="text-muted">&#9990; ${user.phone}</small></p>
        </div>
      </div>
    `;
  });

  document.querySelector("#user-cards").innerHTML = output;

  document.querySelector(".loader").style.display = "none";
}

async function get10Users() {
  document.querySelector(".loader").style.display = "block";

  const users = [];

  for (let i = 0; i < 5; i++) {
    const response = await fetch("https://randomuser.me/api")

    const randomUserData = await response.json();

    users.push(randomUserData.results[0]);
  }

  return users;
}



