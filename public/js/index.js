const cities = document.querySelector('#location');
const searchButton = document.querySelector('#search-button')

const searchLocation = (event) => {
event.preventDefault();
    const xhr = new XMLHttpRequest();
    const url = "?cities=" + cities.value;
    console.log(url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr)
            // const response = JSON.parse(xhr.responseText);
            // do something with response
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

searchButton.addEventListener('click', searchLocation) 

