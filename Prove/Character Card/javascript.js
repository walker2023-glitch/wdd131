const aCreature = {
    name: 'Snortleblat',
    health: 100,
    level: 5,
    logo: 'images/swampMonster.png', // Update this path to match your image folder
    
    levelUp: function () {
        this.level++;
        this.health += 10;
    },
    damage: function () {
        this.health -= 20;
        // Prevent health from dropping below 0
        if (this.health < 0) {
            this.health = 0;
        }
    }
};

// 1. Initial Setup for Image and static attributes
const imgElement = document.querySelector('#creature-img');
imgElement.setAttribute('src', aCreature.logo);
imgElement.setAttribute('alt', aCreature.name);
imgElement.setAttribute('style', 'width: 250px; height: auto;');

// 2. Function to update the DOM elements with current object stats
function renderCreature() {
    document.querySelector('#creature-name').textContent = aCreature.name;
    document.querySelector('#creature-level').textContent = aCreature.level;
    document.querySelector('#creature-health').textContent = aCreature.health;
}

// Run once on load to show initial 100 Health and Level 5
renderCreature();

// 3. Event Listeners for Interaction

document.querySelector("#attack").addEventListener("click", function () {
    // Apply damage
    aCreature.damage();
    
    // Refresh the numbers on the screen
    renderCreature();
    
    // Check death condition
    if (aCreature.health === 0) {
        // setTimeout ensures the DOM updates the '0' health visually *before* the alert freezes the page
        setTimeout(() => {
            alert('Character Died');
        }, 10);
    }
});

document.querySelector("#level").addEventListener("click", function () {
    // Level up creature
    aCreature.levelUp();
    
    // Refresh the numbers on the screen
    renderCreature();
});