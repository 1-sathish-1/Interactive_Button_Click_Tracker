function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

document.getElementById('clickBtn').addEventListener('click', () => {
  const newCount = counter();
  document.getElementById('clickDisplay').textContent = `You clicked ${newCount} times`;
});
