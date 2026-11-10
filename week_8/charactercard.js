const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    attack: 20, 
    attacked: function() {
        this.health -= this.attack;
        console.log("Health:", this.health);
    },
    levelUp: function() {
        this.level++; 
        console.log("Level:", this.level);
    }
};

const levelText = document.getElementById("charLevel");
const healthText = document.getElementById("charHealth");


document.getElementById("attack_").addEventListener("click", function() {
    character.attacked();
    healthText.textContent = character.health;

  if (character.health <= 0) {
    character.health = 0;
    setTimeout(() => alert("Character died"), 0);
    this.disabled = true;

    }

});

document.getElementById("levelUp_").addEventListener("click", function() {
  character.levelUp();
  levelText.textContent = character.level;
});

