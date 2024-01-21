const generateBtn = document.querySelector("#generate");
const image = document.querySelector("img");
const paragraphs = document.querySelectorAll("p");
const spinner = document.querySelector(".spinner");

generateBtn.addEventListener("click", generateUser);

function generateUser() {
  spinner.classList.remove("hidden");
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      if (user.gender === "male") {
        document.body.style.backgroundColor = "#525CEB";
      } else {
        document.body.style.backgroundColor = "#6b21a8";
      }

      image.setAttribute("src", user.picture.large);

      paragraphs.item(
        0
      ).innerHTML = `<span class="font-bold">Name: </span>${user.name.first} ${user.name.last}`;
      paragraphs.item(
        1
      ).innerHTML = `<span class="font-bold">Email: </span>${user.email}`;
      paragraphs.item(
        2
      ).innerHTML = `<span class="font-bold">Phone: </span>${user.phone}`;
      paragraphs.item(
        3
      ).innerHTML = `<span class="font-bold">Location: </span>${user.location.city}, ${user.location.state}`;
      paragraphs.item(
        4
      ).innerHTML = `<span class="font-bold">Age: </span>${user.registered.age}`;
    })
    .then(() => spinner.classList.add("hidden"));
}
