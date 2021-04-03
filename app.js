const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const lbl1 = document.getElementById('num1lbl')
const lbl2 = document.getElementById('num2lbl')
lbl1.innerText = num1.value
lbl2.innerText = num2.value

const FizzBuzz = (num1, num2) => {
  let result = []

  for (i = 1; i <= 100; i++) {
    i % num1 == 0 && i % num2 == 0
      ? result.push(
          `<p style="color:red; font-weight:bold"> (${i}) FizzBuzz |</p>`
        )
      : i % num1 == 0
      ? result.push(
          `<p style="color:green;font-weight:bold"> (${i}) Fizz |</p>`
        )
      : i % num2 == 0
      ? result.push(
          `<p style="color:blue;font-weight:bold "> (${i}) Buzz |</p>`
        )
      : result.push(`<p style="color:black"> ${i} |</p>`)
  }

  console.log(num1, num2)
  return result
}
const show = () => {
  let newarray = []
  let txt = document.getElementById('text')
  txt.innerHTML = ''
  newarray = FizzBuzz(num1.value, num2.value)
  console.log(newarray)
  newarray.forEach((element) => {
    let p = document.createElement('p')
    p.innerHTML = element
    txt.appendChild(p)
  })
  console.log(newarray)
}

const btn = document.getElementById('btn')
btn.addEventListener('click', show)

const setVal1 = () => {
  const val = document.getElementById('num1').value
  lbl1.innerText = val
}
num1.addEventListener('mousemove', setVal1)

const setVal2 = () => {
  const val1 = document.getElementById('num2').value
  lbl2.innerText = val1
}

num2.addEventListener('mousemove', setVal2)
