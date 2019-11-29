const goOutDecision = weather => {
  let weatherCode = weather.weather[0].id.toString();
  let sunrise = weather.sys.sunrise;
  let sunset = weather.sys.sunset;
  let decision = {};
  // If current time is before sunrise, or after sunset, then return decision no
  let timeStamp = Math.floor(new Date().getTime() / 1000);
  if (timeStamp < sunrise || sunset < timeStamp) {
    decision.yesno = "No";
    decision.reason = "It's dark and scary outside";
    decision.img = "https://media.giphy.com/media/SuJoKxDplnKve/giphy.gif";
  } else {
    // If current time is after sunrise and before sunset, then check weather
    if (weatherCode.startsWith("2")) {
      // Thunderstorm weather code
      decision.yesno = "No";
      decision.reason = "You don't want to get struck by lightning";
      decision.img = "https://media.giphy.com/media/26uf5HjasTtxtNCqQ/giphy.gif";
    } else if (weatherCode.startsWith("3")) {
      // Drizzle weather code
      decision.yesno = "Maybe";
      decision.reason = "There's a little drizzle";
      decision.img = "https://media.giphy.com/media/8OMSzA321pAVmKj6C0/giphy.gif";
    } else if (weatherCode.startsWith("5")) {
      // Rain weather code
      decision.yesno = "No";
      decision.reason = "It's raining outside";
      decision.img = "https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif";
    } else if (weatherCode.startsWith("6")) {
      // Snow weather code
      decision.yesno = "Maybe";
      decision.reason = "Do you want to build a snowman?";
      decision.img = "https://media.giphy.com/media/Ao5UPt5gj9Z1C/giphy.gif";
    } else if (weatherCode.startsWith("7")) {
      // Atmosphere weather code
      decision.yesno = "No";
      decision.reason = "It's all bad";
      decision.img = "https://media.giphy.com/media/HmTLatwLWpTQk/giphy.gif";
    } else if (weatherCode === "800") {
      // Clear sky weather code
      decision.yesno = "Yes";
      decision.reason = "It's nice out there!";
      decision.img="https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif";
    } else if (weatherCode.startsWith("8")) {
      // Cloudy weather code
      decision.yesno = "Yes";
      decision.reason = "Cloudy with a chance of meatballs";
      decision.img = "https://media.giphy.com/media/RO5XhlFWOPs6k/giphy.gif";
    }
  }
  return decision;
};

module.exports = goOutDecision;
