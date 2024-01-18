//store current temperature as int
let currTemp = 60;
//create variable to hold boolean if it's raining
let isRaining = false;

function weatherCheck(temp, raining) {
  //if temperature <=  40 print “It’s <temperature> degrees outside! Wear a heavy jacket.”
  if (temp <= 40) {
    console.log(`It's ${temp} degrees outside! Wear a heavy jacket.`);
  }
  //else if temperature <= 60 ; print “It’s <temperature> degrees outside. Wear a jacket.”
  else if (temp <= 60) {
    console.log(`It's ${temp} degrees outside. Wear a jacket.`);
  }
  // else if temperature < 70; print It’s <temperature> degrees outside, wear a light jacket.”
  else if (temp < 70) {
    console.log(`It's ${temp} degrees outside, wear a light jacket.`);
  }
  //else print “It’s hot out today! No jacket needed!”
  else {
    console.log(`It's hot out today! No jacket needed!`);
  }
  //write ternary operator to see if it's raining and print out the corresponding message
  const umbrella = raining
    ? console.log("It's raining, too, so you should bring an umbrella!")
    : console.log("No rain today, you can leave the umbrella at home!");
}

weatherCheck(currTemp, isRaining);
//Temperature converter function here
function tempConverter() {
    //store temp in F
    const tempF = prompt("Enter degrees in Farenheit: ");
    //Store Temp in C
    const tempC = Math.floor((tempF - 32) * (5/9));
    console.log(`${tempF} degrees Farenheit is ${tempC} in Celsius.`);
    //store temp in K
    const tempK = tempC + 273.15;
    console.log(`${tempC} degrees Celsius is ${tempK} in Kelvin.`);
    //store forecast 
    let todaysForecast = `The current temperature outside is ${tempF} degrees Fahrenheit, ${tempC} degrees Celcius, and ${tempK} degrees Kelvin.`;
    //Output forcast to screen
    console.log(todaysForecast);
}

tempConverter();
