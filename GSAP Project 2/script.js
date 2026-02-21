const pepsi = [
  {
    name: "Pepsi Diet",
    amount: "350 cl",
    amount_per: "8.6%",
    fat: "0g",
    fat_per: "0%",
    Sodium: "310mg",
    sodium_per: "1%",
    carbohydrated: "48g",
    carbohydrated_per: "15.3%",
    protien: "0g",
    protien_per: "0%",
    ml: "250ml",
    poster1: "img/1 Pepsi white.png",
    poster2: "img/1 Pepsi blue.png",
    main_poster: "img/pepsi diet.png",
  },
  {
    name: "Pepsi Classic",
    amount: "350 cl",
    amount_per: "7.5%",
    fat: "0g",
    fat_per: "0%",
    sodium: "310mg",
    sodium_per: "1%",
    carbohydrated: "41g",
    carbohydrated_per: "14%",
    protien: "0g",
    protien_per: "0%",
    ml: "330ml",
    poster1: "img/2 Pepsi white.png",
    poster2: "img/2 Pepsi blue.png",
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
    poster1: "img/3 Pepsi white.png",
    poster2: "img/3 Pepsi blue.png",
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
    poster1: "img/4 Pepsi white.png",
    poster2: "img/4 Pepsi blue.png",
    main_poster: "img/pepsi .1ltr.png",
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
    poster1: "img/5 Pepsi white.png",
    poster2: "img/5 Pepsi blue.png",
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
    poster1: "img/6 Pepsi white.png",
    poster2: "img/6 Pepsi blue.png",
    main_poster: "img/pepsi 2ltr.png",
  },
];

Array.from(document.getElementsByClassName("card_pepsi")).forEach((ele, i) => {
  ele.addEventListener(
    "mouseover",
    () =>
      (document.getElementsByClassName("pepsi_hover_img")[i].src =
        pepsi[i].poster1),
  );
  ele.addEventListener("mouseout", () => {
    document.getElementsByClassName("pepsi_hover_img")[i].src =
      pepsi[i].poster2;
  });
});

Array.from(document.getElementsByClassName("card_pepsi")).forEach((ele, i) => {
  ele.addEventListener("click", () => {
    document.getElementById("Main_bottle").src = pepsi;
  });
});
