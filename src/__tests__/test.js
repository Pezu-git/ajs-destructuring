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
  expect(description('Bowman')).toEqual(bowman);
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
  expect(description('Bowman')).toEqual(bowman);
});
test('wrongChar test', () => {
  expect(() => {
    description('Bowmann');
  }).toThrow('Ошибка');
});
