import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  // загружает данные с помощью read, парсит их с помощью json() и создаёт объект типа GameSaving
  static load() {
    return read()
      .then((data) => json(data))
      .catch((err) => console.log('Error: ', err));
  }
}
