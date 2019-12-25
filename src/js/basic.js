export default function Character(name, type) {
  try {
    if (name.length < 2 || name.length > 10) throw new Error('Incorrect name length');

    const allTypes = [
      { heroType: 'Bowman', attack: 25, defense: 25 },
      { heroType: 'Swordsman', attack: 40, defense: 10 },
      { heroType: 'Magician', attack: 10, defense: 40 },
      { heroType: 'Undead', attack: 25, defense: 25 },
      { heroType: 'Zombie', attack: 40, defense: 10 },
      { heroType: 'Daemon', attack: 10, defense: 40 },
    ];

    const checkingType = allTypes.find((item) => item.heroType === type);

    if (checkingType === undefined) throw new Error('Incorrect type of character');

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = checkingType.attack;
    this.defense = checkingType.defense;
  } catch (error) {
    console.log('We\'ve got Error');
  }
}


Character.prototype = {
  damage: function(x) {
    console.log(Object.keys(this));
    this.health = this.health - x * (1 - this.defense / 100);
    if (this.health < 0) this.health = 0;
    console.log(`Нанесли урон с силой ${x}. Здоровье уменьшилось на ${x * (1 - this.defense / 100)}.`);
  },
};
