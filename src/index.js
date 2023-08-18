import GameSavingLoader from "./js/GameSavingLoader";

console.log('started!');

GameSavingLoader.load()
	.then(data => {[]
		//
		console.log(JSON.parse(data))
		return JSON.parse(data);
	})
	.catch(err => console.log('Error: ', err))


	const receivedData = await GameSavingLoader.load();