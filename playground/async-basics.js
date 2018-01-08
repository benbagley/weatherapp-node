console.log('Starting app');

setTimeout(() => {
  console.log('This fires');
}, 2000);

setTimeout(() => {
  console.log('Second callback fires');
}, 0);

console.log('Finishing up');
