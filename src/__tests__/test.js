/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import description from '../js/app.js';
import { character } from '../js/character.js';

test('first test', () => {
  const bowman = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  expect(description(character)).toEqual(bowman);
});
test('second test', () => {
  function pushChar() {
    character.special.push(
      {
        id: 10,
        name: 'Выстрел',
        icon: 'http://...',
        description: 'Наносит обычный урон',
      },
      {
        id: 11,
        name: 'Добивающий удар',
        icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
      },
    );
  }
  pushChar();
  const bowman = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 10,
      name: 'Выстрел',
      icon: 'http://...',
      description: 'Наносит обычный урон',
    },
    {
      id: 11,
      name: 'Добивающий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  expect(description(character)).toEqual(bowman);
});
test('without_character test', () => {
  const daemon = {
    name: 'Демон',
    type: 'Daemon',
    health: 500,
    level: 30,
    attack: 400,
    defence: 100,
    special: [
      {
        id: 80,
        name: 'Адский котёл',
        icon: 'http://...',
        description: 'Все сгорят',
      },
      {
        id: 90,
        name: 'Порча',
        icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const daemonSpecial = [
    {
      id: 80,
      name: 'Адский котёл',
      icon: 'http://...',
      description: 'Все сгорят',
    },
    {
      id: 90,
      name: 'Порча',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  expect(description(daemon)).toEqual(daemonSpecial);
});
