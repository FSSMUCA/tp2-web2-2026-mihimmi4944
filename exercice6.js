let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log("Partie A - ??")
console.log(nom ?? "valeur par défaut")
console.log(age ?? "valeur par défaut")
console.log(ville ?? "valeur par défaut")
console.log(score ?? "valeur par défaut")
console.log(actif ?? "valeur par défaut")

console.log("\nPartie B - ||")
console.log(nom || "valeur par défaut")
console.log(age || "valeur par défaut")
console.log(ville || "valeur par défaut")
console.log(score || "valeur par défaut")
console.log(actif || "valeur par défaut")

console.log("\nPartie C - Comparaison")
let resultatNom = (nom ?? "valeur par défaut") === (nom || "valeur par défaut")
console.log("nom   : ?? et || -> " + (resultatNom ? "même résultat" : "résultat différent"))

let resultatAge = (age ?? "valeur par défaut") === (age || "valeur par défaut")
console.log("age   : ?? et || -> " + (resultatAge ? "même résultat" : "résultat différent"))

let resultatVille = (ville ?? "valeur par défaut") === (ville || "valeur par défaut")
console.log("ville : ?? et || -> " + (resultatVille ? "même résultat" : "résultat différent"))

let resultatScore = (score ?? "valeur par défaut") === (score || "valeur par défaut")
console.log("score : ?? et || -> " + (resultatScore ? "même résultat" : "résultat différent"))

let resultatActif = (actif ?? "valeur par défaut") === (actif || "valeur par défaut")
console.log("actif : ?? et || -> " + (resultatActif ? "même résultat" : "résultat différent"))