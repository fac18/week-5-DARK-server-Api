const selectBox = document.querySelector("#location");
const searchButton = document.querySelector("#search-button");
const answers = document.querySelector('.answers');
const reason = document.querySelector('.reason');

const searchLocation = event => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const url = "/search?location=" + selectBox.value;
  console.log(`The city you want data for: ${selectBox.value}`);
  console.log(url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      console.log(
        `I'm the result on of the frontend API call: ${JSON.stringify(result)}`
      );
      // do something with response (probably a DOM construction/injection)
      let decison = result.yesno
      answers.textContent = decison;

      let why = result.reason
      reason.textContent = why;
    
    }
  

};
  xhr.open("GET", url, true);
  xhr.send();
};




searchButton.addEventListener("click", searchLocation);
