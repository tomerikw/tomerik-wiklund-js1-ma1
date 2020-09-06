//question 1
const cat = {
  complain: "Meow!",
};

function catSay(theSound) {
  console.log(theSound);
}
catSay(cat["complain"]);

//question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

//question 3
heading.style.fontSize = "2em";

//question 4
heading.className = "subheading";

//question 5
const paragraphs = document.querySelectorAll("p");
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function myList(list) {
  let i;
  for (i = 0; i < cats.length; i++) console.log(cats[i].name);
}
myList(cats);
//loop trough cats [i]....show all name propertys//

//question 8

const container = document.querySelector(".cat-container");

console.log(container);
let listCats = "";
function createCats(cats) {
  for (
    let i = 0;
    i < cats.length;
    i++ //console.log(cats[0]);
  )
    listCats += `
    <div class: "cat-container">
    <h5>${cats[i].name}</h5>
    <p>${cats[i].age}</p>
    </div>`;

  console.log(listCats);
}
createCats(cats);

container.innerHTML = listCats;

//I could not figur out how to make pet without age the statement unknown age
