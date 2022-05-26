setTimeout(() => {
  console.log('Two seconds are up');
}, 2000);

const names = ['aaaaa', 'baa', 'caaa'];
const shortNames = names.filter((name) => name.length <= 4);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2000);
};

geocode('Philadelphia', (data) => {
  console.log(data);
});
