import GameSavingLoader from '../js/GameSavingLoader';

jest.setTimeout(10000);

test('GameSavingLoader test', async (done) => {
	const dataToTest = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

	const receivedData = await GameSavingLoader.load();

	expect(JSON.parse(receivedData).toEqual(JSON.parse(dataToTest)));
	done();
});
