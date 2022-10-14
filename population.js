class Population {
    constructor(_popSize) {
        this.popSize = _popSize;
        this.creatures = [];
        for (let i = 0; i < this.popSize; i++) {
            this.creatures[i] = new DNA();
        }
        this.matingPool;
    }

    establishPopulation() {
        for (let i = 0; i < this.popSize; i++) {
            this.creatures[i].assignFitness();
        }
    }

    createMatingPool() {
        let tot = 0;
        for (let i = 0; i < this.popSize; i++) {
            tot += this.creatures[i].fitness;
        }

        this.matingPool = [];
        
        for (let i = 0; i < this.popSize; i++) {
            let creature = this.creatures[i];
            for (let i = 0; i < creature.fitness*100; i++) {
                this.matingPool.push(creature);
            } 
        }
    }

    crossover() {
        let parentA_genes = random(this.matingPool).genes;
        let parentB_genes = random(this.matingPool).genes;
        let child_genes = parentA_genes.crossWith(parentB_genes);
        let child = new DNA(child_genes);
        console.log(child);
    }
}