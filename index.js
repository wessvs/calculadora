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
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}

document.getElementById('themeSwitcher').addEventListener('click', function () {
  if(main.dataset.theme == 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark' 
  }
})

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
  const btn = ev.currentTarget
  if(btn.innerText == 'Copy') {
    btn.innerText = 'Copied'
    btn.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
    setTimeout(() => {
      btn.innerText = 'Copy'
      btn.classList.remove('success')
    }, 1000);
  } 
})