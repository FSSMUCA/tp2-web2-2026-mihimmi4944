let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
]

let compteur = 0

for (let i = 0; i < paires.length; i++) {
    let val1 = paires[i][0]
    let val2 = paires[i][1]
    let resultatEq = val1 == val2
    let resultatStrict = val1 === val2
    
    console.log(val1 + " == " + val2 + " -> " + resultatEq + "    |    " + val1 + " === " + val2 + " -> " + resultatStrict)
    
    if (resultatEq !== resultatStrict) {
        compteur++
    }
}

console.log("---")
console.log(compteur + " paire(s) où == et === donnent des résultats différents")