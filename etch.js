const container = document.querySelector('#container');
const boxActive = document.querySelector('.box')

function createDiv() {
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

function multiDiv () {
  for (let i = 0; i < 256; i++) {
    createDiv()
  }
}

multiDiv()

boxActive.addEventListener('mousedown', () => {
  boxActive.classList.add('active')
})