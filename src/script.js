function buy() {
  let name = prompt("What is your name");
  let hairType = prompt("What is your hair type");
  let length = prompt("What is your current hair length 💇‍♀️🤔");
  let hairGoals = prompt("What are your hair goals 😃❣");
  let choice = prompt("would you like us to recommend a product");
  choice = choice.toLowerCase();
  choice = choice.trim();
  choice = choice.replace("brasil", "brazil");
  if (choice === "yes") {
    let h1 = document.querySelector("h1");

    h1.innerHTML =
      "That's amazing!! " + name + ",  let's get your hair game on 😎 ";
  } else {
    alert("Alright 😞" + name + ", we wish you the best! ");
  }
}

let buySheabutter = document.querySelector("button");

buySheabutter.addEventListener("click", buy);
