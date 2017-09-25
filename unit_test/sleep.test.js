const sleep= require('../src/timesleep');

test('timesleep', async () => { 
   var value = await sleep()
  expect(value).toBe(3)
});
