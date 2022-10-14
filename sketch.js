let target = "dream it believe it build it";
let population;

let popSize = 150;

function setup() {
  createCanvas(600, 400);
  population = new Population(popSize);
}

function draw() {
  background(0);
  population.establishPopulation();
  population.createMatingPool();
  population.crossover();
}