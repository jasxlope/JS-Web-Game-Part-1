// Calculate the number of repetitions needed for grass and sky tiles to cover the entire screen
const numColumns = Math.ceil(window.innerWidth / 100);
const numRows = Math.ceil(window.innerHeight / 100);

// Create backdrop for the game
for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColumns; col++) {
        // Render grass tiles
        let grassTile = document.createElement('img');
        grassTile.src = 'assets/grass.png';
        grassTile.style.position = 'fixed';
        grassTile.style.left = col * 100 + 'px';
        grassTile.style.top = row * 100 + 'px';
        document.body.append(grassTile);

        // Render sky tiles
        let skyTile = document.createElement('img');
        skyTile.src = 'assets/sky.png';
        skyTile.style.position = 'fixed';
        skyTile.style.left = col * 100 + 'px';
        skyTile.style.top = row * 00 + 'px';
        document.body.append(skyTile);
    }
}


let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img');
pineTree.src = 'assets/pine-tree.png';
pineTree.style.position = 'fixed';
pineTree.style.left = '450px';
pineTree.style.bottom = '200px'; 
document.body.append(pineTree);

function newImage(src, left, bottom) {
    let img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left;
    img.style.bottom = bottom;
    document.body.append(img);
}



// Add new images using the newImage function
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newImage('assets/shield.png', '165px', '185px'); 
newImage('assets/staff.png', '600px', '100px'); 
let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
});

