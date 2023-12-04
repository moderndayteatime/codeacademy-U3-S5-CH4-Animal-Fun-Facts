import { animals } from './animals';
import React from 'react';
import {createRoot} from 'react-dom/client';

const background = <img className = "background" alt = "ocean" src = "/images/ocean.jpg"/>;

function displayFact(e) {
  const animal = e.target.alt;
  const randomIndex = Math.floor(Math.random() * animals[animal].facts.length);
  let funFact = animals[animal].facts[randomIndex];
  console.log(funFact);
  const p = document.getElementById("fact");
  p.innerHTML = funFact;
}

const images = [];
for(const animal in animals) {
  const image = (
    <img
      onClick = {displayFact}
      key = {animal}
      className = 'animal'
      alt = {animal}
      src = {animals[animal].image}
      aria-label = {animal}
      role = 'button'
    />
  );
  images.push(image);
}


const container = document.getElementById('app');
const root = createRoot(container);

const title = "";
const defaultTitle = " Click an animal for a fun fact";

const showBackground = false;

const animalFacts = (
  <div>
    <h1>{title === "" ? defaultTitle : title}</h1>
    {showBackground && background}
    <div className = "animals">{images}</div>
    <p id = "fact"></p>
  </div>
)

root.render(animalFacts);

