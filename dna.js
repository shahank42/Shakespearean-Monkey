class DNA {
    constructor(genes) {
        if (genes) {
            this.genes = genes;
        } else {
            this.genes = [];
            for (let i = 0; i < target.length; i++) {
                this.genes[i] = new Gene();
            }
        }

        this.fitness;
    }

    assignFitness() {
        this.fitness = 0;
        for (let i = 0; i < this.genes.length; i++) {
            if (this.genes[i].gene == target[i]) {
                this.fitness++;
                //console.log("Here");
            }
        }
        this.fitness /= target.length;
    }

    crossWith(other) {
        let marker = random(other.length);
        let childGenes = [];
        for (let i = 0; i < other.length; i++) {
            if (i <= marker) {
                childGenes.push(this.genes[i]);
            } else if (i >= marker) {
                childGenes.push(other.genes[i]);
            }
        }
        return childGenes;
    }
}