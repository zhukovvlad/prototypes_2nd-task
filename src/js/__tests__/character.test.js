import Character from '../character';

test.each([
  ['good case', 'Willie', 'Swordsman', {
    name: 'Willie', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  }],
  ['bad name', 'Willie!!!!!!!!!!', 'Swordsman', {}],
  ['bad type', 'Willie', 'Snowman', {}],
])(
  ('should calculate %s'),
  (userCase, name, type, expected) => {
    const result = new Character(name, type);

    expect(result).toEqual(expected);
  },
);

test.each([
  ['weak kick', 10, 91],
  ['strong kick', 1000, 0]
])(
  ('should calculate damage for %s'),
  (userCase, kick, finalHealth) => {
    const user = new Character('Willie', 'Swordsman');

    user.damage(kick);
    const result = user.health;

    expect(result).toBe(finalHealth);
  },
);
