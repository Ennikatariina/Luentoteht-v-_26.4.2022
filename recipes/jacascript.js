let recipes=[
    {
        name: "Pulla",
        cookingTime: 3,
        ingredients: ["maito", "jauho", "kanamuna", "hiiva", "kaardemumma"]
    },
    {
        name: "Keksi",
        cookingTime: 2,
        ingredients: ["maito", "voi", "kanamuna", "levinjauho"]
    },
    {
        name: "Mokkapalat",
        cookingTime: 1,
        ingredients: ["maito", "rasva", "suklaa", "sooda"]
    }
]
// Hae tulostuselementti muuttujaan
let element = document.getElementById("printHere");

//Looppaa reseptit läpi ja tulostaa sivulle
let html = "<table><tr><th>Name</th><th>Cookin Time</th><th>Ingredients</th></tr>";
recipes.forEach(recipe => {
    html += "<tr>"
    html += "<td>" + recipe.name + "<td>";
    html += "<td>" + recipe.cookingTime + "<td>";
    html += "<td>" + recipe.ingredients + "<td>";
    html += "</tr>"
});

html += "</table>";
element.innerHTML= html
