const input = document.querySelector("#fruit");

//This sets the suggestions variable to be the first UL within the class suggestions.
const suggestions = document.querySelector(".suggestions ul");

//Event listener created to listen for keyup, and then run searchHandler.
input.addEventListener("keyup", searchHandler);

//searchHandler takes the value from the key that was pressed that triggered our eventListener.  It takes that key and runs the search function.
function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

//The search uses the key that was passed from searchHandler and filters the fruit array to find any items that contain the letter values. This function will also convert the fruit toLowerCase.
function search(str) {
  let results = fruit.filter((kind) =>
    kind.toLowerCase().includes(str.toLowerCase())
  );
  return results;
}

//results from search are passed down to showSuggestions.  A new UL is created. with each keypress, the innerHTML of suggestions is reset.  This would clear my suggestions list by refining the suggestions to match all of the letters I was searching for.  Once a fruit name was matched, it would append that fruit name to my UL that was creatd and display in suggestions.
function showSuggestions(results, inputVal) {
  let ul = document.createElement("ul");
  suggestions.innerHTML = "";
  for (let result of results) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(result));
    ul.appendChild(li);
  }
  suggestions.appendChild(ul);
}

//This was our given array containing strings of fruit names that would be searched.
const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// an eventListener was created when an li was clicked in our list of suggested fruit words.  Once a fruit name was clicked, it would process the useSuggestion function.
suggestions.addEventListener("click", useSuggestion);

// useSuggestions would take the li that ws clicked from our list of suggestions and place that name as the input value.  This step also clears the suggestions list so that there are no more fruit names being suggested since our user already clicked the option he wanted.
function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.innerHTML = "";
}
