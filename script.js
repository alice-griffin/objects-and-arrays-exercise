const characters = [];

characters[0] = {
    name: "Alice",
    health: 20
}

characters[1] = {
    name: "Sam",
    health: 20
}

characters[2] = {
    name: "Corky",
    health: 20
}

const opponent = {
    name: "Charlie",
    health: 25
}


for (let i = 1; i > 0; i++) {

        console.log(characters, opponent)

        const charSelect = parseInt(prompt("Please select a character: 1, 2, or 3... or hit 'cancel' to quit")); 
    
        if (charSelect === 1) {
          (characters[0].health -= 5), (opponent.health -= 5)
        } else if (charSelect === 3) {
            (characters[1].health -= 5) && (opponent.health -= 5)
        } else if (charSelect === 2) {
            (characters[2].health -= 5) && (opponent.health -= 5)
        } else {
            break;
        }
}
    
