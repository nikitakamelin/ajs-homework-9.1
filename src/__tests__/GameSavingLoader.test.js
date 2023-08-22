import GameSavingLoader from '../js/GameSavingLoader';

jest.setTimeout(10000);

test('GameSavingLoader test', (done) => {
  const expectedData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  GameSavingLoader.load()
    .then((data) => {
      // console.log(data)
      expect(data).toEqual(expectedData);
      done();
    });
});
