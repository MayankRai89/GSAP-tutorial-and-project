const pepsi = [
  {
    name: "Pepsi Diet",
    amount: "350 cl",
    amount_per: "8.6%",
    fat: "0g",
    fat_per: "0%",
    sodium: "30mg",
    sodium_per: "1%",
    carbohydrated: "48g",
    carbohydrated_per: "15.3%",
    protien: "0g",
    protien_per: "0%",
    ml: "250ml",
    main_poster: "img/pepsi diet.png",
  },
  {
    name: "Pepsi Classic",
    amount: "350 cl",
    amount_per: "7.5%",
    fat: "0g",
    fat_per: "0%",
    sodium: "30mg",
    sodium_per: "1%",
    carbohydrated: "41g",
    carbohydrated_per: "14%",
    protien: "0g",
    protien_per: "0%",
    ml: "330ml",
    main_poster: "img/can.png",
  },
  {
    name: "Pepsi 500 ML",
    amount: "350 cl",
    amount_per: "12.5%",
    fat: "0g",
    fat_per: "0%",
    sodium: "40mg",
    sodium_per: "2%",
    carbohydrated: "52g",
    carbohydrated_per: "21.7%",
    protien: "0g",
    protien_per: "0%",
    ml: "500ml",
    main_poster: "img/pepsi .5ltr.png",
  },
  {
    name: "Pepsi 1 LTR",
    amount: "510 cl",
    amount_per: "16.3%",
    fat: "0g",
    fat_per: "0%",
    sodium: "40mg",
    sodium_per: "2%",
    carbohydrated: "61g",
    carbohydrated_per: "21.7%",
    protien: "0g",
    protien_per: "0%",
    ml: "1 LTR",
    main_poster: "img/pepsi 1ltr.png",
  },
  {
    name: "Pepsi 1.5 LTR",
    amount: "625 cl",
    amount_per: "19.3%",
    fat: "0g",
    fat_per: "0%",
    sodium: "50mg",
    sodium_per: "3%",
    carbohydrated: "66g",
    carbohydrated_per: "30.7%",
    protien: "0g",
    protien_per: "0%",
    ml: "1.5 LTR",
    main_poster: "img/pepsi 1.5ltr.png",
  },
  {
    name: "Pepsi 2 LTR",
    amount: "729 cl",
    amount_per: "37.3%",
    fat: "0g",
    fat_per: "0%",
    sodium: "60mg",
    sodium_per: "4%",
    carbohydrated: "69g",
    carbohydrated_per: "33.7%",
    protien: "0g",
    protien_per: "0%",
    ml: "2 LTR",
    main_poster: "img/pepsi 2ltr.png",
  },
];

const cards = document.querySelectorAll(".card_pepsi");
const mlTitle = document.querySelector(".ml_bx h3");
const leftBtn = document.getElementById("left_btn");
const rightBtn = document.querySelector(".right_btn_bx");

let index = 1;

function updateUI(i) {
  const data = pepsi[i];

  document.getElementById("Main_bottle").src = data.main_poster;
  document.getElementById("main_title").innerText = data.name;

  document.getElementById("cl").innerText = data.amount;
  document.getElementById("cl1").innerText = data.amount_per;
  document.getElementById("fat").innerText = data.fat;
  document.getElementById("fat1").innerText = data.fat_per;
  document.getElementById("sodium").innerText = data.sodium;
  document.getElementById("sodium1").innerText = data.sodium_per;
  document.getElementById("carbohydrate").innerText = data.carbohydrated;
  document.getElementById("carbohydrate1").innerText = data.carbohydrated_per;
  document.getElementById("Protien").innerText = data.protien;
  document.getElementById("Protien1").innerText = data.protien_per;

  mlTitle.innerText = data.ml;
}

cards.forEach((card, i) => {
  card.addEventListener("mouseover", () => {
    index = i;
    updateUI(index);
  });
});

leftBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = pepsi.length - 1;
  }
  updateUI(index);
});

rightBtn.addEventListener("click", () => {
  index++;
  if (index >= pepsi.length) {
    index = 0;
  }
  updateUI(index);
});
