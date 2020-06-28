const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
  { name: "Karabas", age: 8 },
];

function makeRed() {
  const p = document.querySelector("p");
  p.style.color = "#FF0000";
  p.style.fontSize = "50px";
}

console.log("hello"); // regular
console.log("Hello I am a %s string!", "💩"); // interpolated
//console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue; color: white;') // styled
console.warn("OH NO!"); // warning!
console.error("Shit happened!"); // error
console.info("Crocodiles eat 3-4 people per year."); // info

// testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wroooong!");

console.clear(); // clearing

// viewing DOM elements

console.log(p);
console.dir(p);

console.clear();

// grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("alihan");
console.count("alihan");
console.count("frontend");
console.count("dog");
console.count("cat");
console.count("alihan");
console.count("alihan");
console.count("frontend");
console.count("dog");
console.count("cat");

// timing

console.time("fetching data");
fetch("https://api.github.com/users/alihany")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
