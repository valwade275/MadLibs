# Documentation for Valerie's MadLibs
Valerie's MadLibs is a word game that is great for passing time between Pomodoros.

## HTML Elements

### Dropdowns (`peopleDropdown`, `verbsDropdown`, `locationDropdown`, `foodDropdown`)
These are references to the HTML `<select>` element. Each dropdown allows users to select a person's name, a verb, a location, or a food item.

### Generate Mad Lib Button
This is a reference to the HTML `<button>` element with the ID `generate-madlib-btn`. This button triggers the generation of a new sentence when clicked.

## JavaScript Variables
Each variable is updated whenever the user selects a different option in a dropdown.

- `person`: A variable that stores the selected person's name from the `peopleDropdown`. 
- `verb`: A variable that stores the selected verb from the `verbsDropdown`. 
- `site`: A variable that stores the selected location from the `locationDropdown`. 
- `food`: A variable that stores the selected food item from the `foodDropdown`. 

## Functions

- **Event Listeners for Dropdowns**: These listeners update the corresponding variables (`person`, `verb`, `site`, `food`) whenever the user makes a selection.

- `resetValues`: This function resets all dropdowns to their default state (first option) and clears the values of person, verb, site, and food.

- `generateMadLibBtn.addEventListener("click", ...)`: This event listener is attached to the `generateMadLibBtn`. When the button is clicked:

    - It checks if all dropdowns have a selected value.

    - If not, it alerts the user to make a selection in each dropdown.

    - If all selections are made, it randomly selects a sentence template from the `madLibsArr` array and displays it in the `madLibTextResult` element.

    - It then resets all values by calling the `resetValues` function.