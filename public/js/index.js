const selectBox = document.querySelector(".search-form__dropdown");
const searchButton = document.querySelector(".search-form__button");
const reason = document.querySelector(".results__reason");
const answers = document.querySelector(".results__answers");
const weatherGif = document.querySelector(".results__gif");

const searchLocation = event => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const url = "/search?location=" + selectBox.value;
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      // do something with response (probably a DOM construction/injection)
      let decision = result.yesno;
      answers.textContent = decision;
      let why = result.reason;
      reason.textContent = why;
      let gif = result.img; 
      weatherGif.src = gif;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

searchButton.addEventListener("click", searchLocation);
