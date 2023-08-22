import GameSavingLoader from './js/GameSavingLoader';

console.log('started!');

GameSavingLoader.load()
  .then((data) => data)
  .catch((err) => console.log('Error: ', err));

const receivedData = await GameSavingLoader.load();
console.log(JSON.parse(receivedData));
