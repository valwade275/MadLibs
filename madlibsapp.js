const peopleDropdown = document.getElementById("people-dropdown");
const verbsDropdown = document.getElementById("verbs-dropdown");
const locationDropdown = document.getElementById("location-dropdown");
const foodDropdown = document.getElementById("food-dropdown");
const madLibTextResult = document.getElementById("madlib-text");
const generateMadLibBtn = document.getElementById("generate-madlib-btn");

let person = "";
let verb = "";
let site = "";
let food = "";

peopleDropdown.addEventListener("change", (e) => (person = e.target.value));
verbsDropdown.addEventListener("change", (e) => (verb = e.target.value));
locationDropdown.addEventListener("change", (e) => (site = e.target.value));
foodDropdown.addEventListener("change", (e) => (food = e.target.value));

const resetValues = () => {
  peopleDropdown.selectedIndex = 0;
  verbsDropdown.selectedIndex = 0;
  locationDropdown.selectedIndex = 0;
  foodDropdown.selectedIndex = 0;
  person = "";
  verb = "";
  site = "";
  food = "";
};

generateMadLibBtn.addEventListener("click", () => {
  const madLibsArr = [
    `${person} was ${verb} in ${site} and had ${food}.`,
    `While ${verb} in ${site}, ${person} had ${food}.`,
    `${person} loves to travel to ${site} and eat ${food} while ${verb}.`,
    `${person} couldn't stop ${verb} in ${site} and decided to enjoy some ${food}.`,
    `In ${site}, ${person} was ${verb} when they found a place that served the best ${food}.`,
    `During a trip to ${site}, ${person} enjoyed ${food} while ${verb}.`,
    `Everyone in ${site} saw ${person} ${verb} with a big plate of ${food}.`,
    `${person} always ${verbs} when visiting ${site} and loves eating ${food} there.`,
    `It was a perfect day in ${site} for ${verb}, and ${person} celebrated with ${food}.`,
    `${person} was surprised to find ${food} while ${verb} in ${site}.`,
    `After ${verb} all day in ${site}, ${person} relaxed with some ${food}.`,
    `${person} says that ${verb} in ${site} is better when you're eating ${food}.`,
    `There's nothing like ${verb} in ${site}, according to ${person}, especially with ${food}.`,
    `${person} had a great time ${verb} in ${site} and enjoying ${food}.`,
    `Even though ${person} was busy ${verb} in ${site}, they made time for ${food}.`
  ];

  const randomIndex = Math.floor(Math.random() * madLibsArr.length);

  if ([person, verb, site, food].some((userSelection) => userSelection === "")) {
    alert("Please choose a selection from each of the dropdowns");
    return;
  }
  madLibTextResult.innerText = madLibsArr[randomIndex];
  resetValues();
});
