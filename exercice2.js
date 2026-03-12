let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}]

for (let i = 0; i < valeurs.length; i++) {
    let valeur = valeurs[i]
    let valeurStr = String(valeur)
    
    if (valeur === "") {
        valeurStr = "(chaine vide)"
    }
    
    if (valeur) {
        console.log(valeurStr + " -> truthy")
    } else {
        console.log(valeurStr + " -> falsy")
    }
}