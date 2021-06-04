// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
let hashedLine = "-------------------------------------"

// Write code to generate the LC04 report here:
console.log(hashedLine);
console.log("> LC04 - LAUNCH CHECKLIST")
console.log(hashedLine);
console.log("Date: " + date);
console.log("Time: " + time + "\n");
console.log(hashedLine);
console.log("> ASTRONAUT INFO");
console.log(hashedLine);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus + "\n");
console.log(hashedLine);
console.log("> FUEL DATA");
console.log(hashedLine);
console.log("* Fuel Temp Celsius:" + fuelTempCelsius);
console.log("* Fuel Level: " + fuelLevel + "\n");
console.log(hashedLine);
console.log("> MASS DATA");
console.log(hashedLine);
console.log("* Crew Mass: " + crewMassKg);
console.log("* Fuel mass: " + fuelMassKg);
console.log("* Shuttle mass: " + shuttleMassKg);
console.log("* Total mass: " + totalMassKg + "\n");
console.log(hashedLine);
console.log("> Flight Plan");
console.log(hashedLine);
console.log("* weather: " + weatherStatus + "\n");
console.log(hashedLine);
console.log("> OVERALL STATUS");
console.log(hashedLine);
console.log("* Clear for takeoff: YES");





// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.