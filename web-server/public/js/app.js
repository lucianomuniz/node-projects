// fetch(url)
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getFetch = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

messageOne.textContent = 'Loading...';
messageOne.textContent = '';

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = search.value;
  const url = `/weather?address=${location}`;
  const data = await getFetch(url);
  if (data.error) {
    messageOne.textContent = data.error;
    messageTwo.textContent = '';
  } else {
    messageOne.textContent = data.location;
    messageTwo.textContent = data.forecast;
    search.value = '';
  }
});
