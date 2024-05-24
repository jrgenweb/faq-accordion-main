const faqItem = document.querySelectorAll(".faq__item");

faqItem.forEach((item) => {
  item.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.preventDefault();
  let img;
  const iconMinus = "../assets/images/icon-minus.svg";
  const iconPlus = "../assets/images/icon-plus.svg";
  let imgPath;
  if (e.target.parentNode.classList.contains("faq__item")) {
    e.target.parentNode.classList.toggle("active");

    imgPath = e.target.parentNode.classList.contains("active")
      ? iconMinus
      : iconPlus;

    img = e.target.parentNode.querySelector("img");
  } else {
    e.target.parentNode.parentNode.classList.toggle("active");
    imgPath = e.target.parentNode.parentNode.classList.contains("active")
      ? iconMinus
      : iconPlus;
    img = e.target.parentNode.parentNode.querySelector("img");
  }

  img.src = imgPath;
  console.log(img, e.target.parentNode);
}
