import { character } from './character.js';

export default function description(pers) {
  // eslint-disable-next-line eqeqeq
  // if (pers === character.type) {
  const { special } = character;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < special.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (special[i].description == undefined) {
      special[i].description = 'Описание недоступно';
    }
  }
  return special;
  // }
}
