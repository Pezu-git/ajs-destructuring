/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import description from '../js/app.js';

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
