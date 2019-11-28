let decision = {};

const goOutDecision = (weatherCode, sunrise, sunset) => {
    // if current time is before sunrise, or after sunset, then return decision no
    const date = new Date();
    let timeStamp = Math.floor(date.getTime()/1000);
    if ((timeStamp < sunrise) || (sunset < timeStamp)) {
        decision.yesno = "No";
        decision.reason = "It's dark and scary outside";
    } else {
    // If current time is after sunrise and before sunset, then check weather
        if (weatherCode.startsWith("2")) {
            // thunderstorm weather code
            decision.yesno = "No";
            decision.reason = "You don't want to get struck by lightning";
        } else if (weatherCode.startsWith("3")) {
            // drizzle weather code
            decision.yesno = "Maybe";
            decision.reason = "There's a little drizzle";
        } else if (weatherCode.startsWith("5")) {
            // rain weather code
            decision.yesno = "No";
            decision.reason = "It's raining outside";
        } else if (weatherCode.startsWith("6")) {
            // snow weather code
            decision.yesno = "Maybe";
            decision.reason = "Do you want to build a snowman?";
        } else if (weatherCode.startsWith("7")) {
            // atmosphere weather code
            decision.yesno = "No";
            decision.reason = "It's all bad";
        } else if (weatherCode === "800") {
            // clear sky weather code
            decision.yesno = "Yes";
            decision.reason = "It's nice out there!";
        } else if (weatherCode.startsWith("8")) {
            // cloudy weather code
            decision.yesno = "Yes";
            decision.reason = "Cloudy with a chance of meatballs";
        }
    }
    return decision;
}

module.exports = { goOutDecision }
