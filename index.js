const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById("result")
const clearBtn = document.getElementById('clear')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
});

clearBtn.addEventListener('click', () => {
  input.value = ''
  input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)

// Trata os caracteres permitidos
input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key))  {
    input.value += ev.key
    return
  }
  if(ev.key == 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key == 'Enter') {
    calculate()
  }
})

function calculate() {
  const result = eval(input.value)
  resultInput.value = result
}