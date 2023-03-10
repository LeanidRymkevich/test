function buttonClick(button, target) {
  let counter = 0;
  button.addEventListener('click', () => {
    counter++;
    target.textContent = counter;
  });
}

export {buttonClick};

