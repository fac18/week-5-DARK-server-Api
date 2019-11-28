const goOutDecision = weather => {
    let weatherCode = weather.weather[0].id;
    let sunrise = weather.sys.sunrise;
    let sunset = weather.sys.sunset;
    let decision = {};
    // If current time is before sunrise, or after sunset, then return decision no
    let timeStamp = Math.floor(new Date().getTime()/1000);
    if ((timeStamp < sunrise) || (sunset < timeStamp)) {
        decision.yesno = "No";
        decision.reason = "It's dark and scary outside";
    } else {
    // If current time is after sunrise and before sunset, then check weather
    if (weatherCode.startsWith("2")) {
      // Thunderstorm weather code
      decision.yesno = "No";
      decision.reason = "You don't want to get struck by lightning";
    } else if (weatherCode.startsWith("3")) {
      // Drizzle weather code
      decision.yesno = "Maybe";
      decision.reason = "There's a little drizzle";
    } else if (weatherCode.startsWith("5")) {
      // Rain weather code
      decision.yesno = "No";
      decision.reason = "It's raining outside";
    } else if (weatherCode.startsWith("6")) {
      // Snow weather code
      decision.yesno = "Maybe";
      decision.reason = "Do you want to build a snowman?";
    } else if (weatherCode.startsWith("7")) {
      // Atmosphere weather code
      decision.yesno = "No";
      decision.reason = "It's all bad";
    } else if (weatherCode === "800") {
      // Clear sky weather code
      decision.yesno = "Yes";
      decision.reason = "It's nice out there!";
    } else if (weatherCode.startsWith("8")) {
      // Cloudy weather code
      decision.yesno = "Yes";
      decision.reason = "Cloudy with a chance of meatballs";
    }
  }
  return decision;
};

module.exports = { goOutDecision };
