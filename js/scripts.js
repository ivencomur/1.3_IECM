let pokemonList= [
    {name:"Articuno", height: 1.7, types: ["ice","flying."], imgFile: "img/articuno.svg"}, 
    {name:"Charizard", height: 1.7, types: ["fire"," flying."], imgFile: "img/charizard.svg"}, 
    {name:"Butterfree", height: 1.1, types: ["bug"," flying."], imgFile: "img/butterfree.svg"}, 
    {name:"Pidgeot", height: 1.5, types: ["flying"," normal."], imgFile: "img/pidgeot.svg"}
];
// I included a condition for Pokemon´s height
let maxheight = 1.69
// This is the start of the loop, I assume.
for (let i = 0; i < pokemonList.length; i++) {
    //setting up conditionals
    if (pokemonList[i].height > maxheight) {       
        //valid concatenation
        let concatText = "<p>" + pokemonList [i].name  + " ("+pokemonList [i].height + pokemonList [i].types+") Wow, that Pokémon is tall!." + "</p>"
        let interpolatedText = `<p>${pokemonList[i].name}. Height: ${pokemonList [i].height}m. Types: ${pokemonList[i].types} Wow, that Pokémon is tall!.</p>`
        let pokemonImage = `<img src="${pokemonList[i].imgFile}"/>`        
        document.write (interpolatedText);
        document.write(pokemonImage)
        }   
    else {
        let concatText = "<p>" + pokemonList[i].name + " (" + pokemonList[i].height + pokemonList[i].types + ")."+"</p>"
        let interpolatedText = `<p>${pokemonList[i].name}. Height: ${pokemonList[i].height}m. Types: ${pokemonList[i].types}</p>`
        let pokemonImage = `<img src="${pokemonList[i].imgFile}"  width: '200' height: '200'/>`       
        document.write(interpolatedText);
        document.write(pokemonImage)       
   }
   
}