const selectBox = document.querySelector(".search-form__dropdown");
const searchButton = document.querySelector(".search-form__button");
const reason = document.querySelector(".results__reason");
const city = document.querySelector(".results__city");
const answers = document.querySelector(".results__answers");

const searchLocation = event => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const url = "/search?location=" + selectBox.value;
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
    appendResults(result);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

searchButton.addEventListener("click", searchLocation);

const appendResults = result => {
    let selectedCity = document.querySelector(`#location > option:nth-child(${(selectBox.selectedIndex)+1})`);
    city.textContent = selectedCity.textContent;

    let decision = result.yesno;
    answers.textContent = decision;

    let why = result.reason;
    reason.textContent = why;
}
