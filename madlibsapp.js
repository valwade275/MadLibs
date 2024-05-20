const peopleDropdown = document.getElementById("people-dropdown");
const verbsDropdown = document.getElementById("verbs-dropdown");
const locationDropdown = document.getElementById("location-dropdown");
const foodDropdown = document.getElementById("food-dropdown");
const madLibTextResult = document.getElementById("madlib-text");
const generateMadLibBtn = document.getElementById("generate-madlib-btn");

let person;
let verb;
let site;
let food;

peopleDropdown.addEventListener("change", (e) => (person = e.target.value));
verbsDropdown.addEventListener("change", (e) => (verb = e.target.value));
locationDropdown.addEventListener("change", (e) => (site = e.target.value));
foodDropdown.addEventListener("change", (e) => (food = e.target.value));

const resetValues = () => {
  peopleDropdown.selectedIndex = 0;
  verbsDropdown.selectedIndex = 0;
  locationDropdown.selectedIndex = 0;
  foodDropdown.selectedIndex = 0;
  person = undefined;
  verb = undefined;
  site = undefined;
  food = undefined;
};

generateMadLibBtn.addEventListener("click", () => {
  const madLibsArr = [
    `${person} was ${verb} in ${site} and had ${food}.`,
    `While ${verb} in ${site}, ${person} had ${food}.`,
    `${person} loves to travel to ${site} and eat ${food} while ${verb}.`
  ];

  const randomIndex = Math.floor(Math.random() * madLibsArr.length);

  if (
    [person, verb, site, food].some(
      (userSelection) => userSelection === undefined
    )
  ) {
    alert("Please choose a selection from each of the dropdowns");
    return;
  }
  madLibTextResult.innerText = madLibsArr[randomIndex];
  resetValues();
});
