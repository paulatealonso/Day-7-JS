// EXERCISE 10.1

const piraña = {
    name: "Tyler",
    HP: 100,
    damage: 15,
    attack: function() {
		console.log();
	}
}

const veneno = {
    name: "Chuck",
    HP: 80,
    damage: 10,
    attack: function() {
		console.log();
	}
}



// EXERCISE 10.2

piraña.attack = (cruela) => cruela.HP -= piraña.damage

veneno.attack = (cruela) => cruela.HP -= veneno.damage
piraña.attack(veneno)
veneno.attack(piraña)



//EXERCISE 10.3
console.log(piraña, veneno);


//EXERCISE 10.4

function fight(Tyler, Chuck) {
    let numberOfAttacks = 0 
    for (let i = 0; i <= veneno.HP; i++) {
        piraña.attack = (cruela) => {
            cruela.HP -= piraña.damage
            if (cruela.HP <= 0) {
                cruela.HP = 0
            }
        }
        piraña.attack(veneno)
        numberOfAttacks ++
    } 
    console.log(`${piraña.name} ha derrotado a ${veneno.name} en ${numberOfAttacks} rondas`)
}

fight(piraña, veneno)
console.log(piraña, veneno);