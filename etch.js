const container = document.querySelector('#container');
const resetBtn = document.querySelector('button')

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
const divs = document.querySelectorAll('div')

container.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "box" class
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});

resetBtn.addEventListener('click', function () {
  divs.forEach(div => div.classList.remove('active'))
})
