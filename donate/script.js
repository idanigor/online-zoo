const burgerMenu = document.querySelector('.burger-menu')
const burgerСross = document.querySelector('.burger-cross')
const darkArea = document.querySelector('.dark-area')
const burgerBtn = document.querySelector('.burger-btn-wrapper')
const html = document.querySelector('html')

//* burger

function burgerOn() {
	burgerMenu.classList.toggle('active')
	darkArea.classList.toggle('active')
	html.classList.toggle('scroll-off')
}

burgerBtn.addEventListener('click', burgerOn)
darkArea.addEventListener('click', burgerOn)
burgerСross.addEventListener('click', burgerOn)

//* donate

const barPoint = document.querySelector('.bar-point')
const payNumber = document.querySelector('.pay-number')
const another = document.querySelector('.another')

another.focus()

function clearActive() {
	if (document.querySelector('.box-active')) {
		document.querySelector('.box-active').classList.remove('box-active')
		document.querySelector('.box-active').classList.remove('box-active')
	}
}

function activeDonate(event) {
	let focus
	if (
		event.target.classList.contains('bar-point') ||
		event.target.classList.contains('pay-number')
	)
		focus = event.target.parentElement
	if (event.target.classList.contains('bar-box')) focus = event.target
	if (focus) {
		clearActive()
		focus.children[1].classList.add('box-active')
		focus.children[2].classList.add('box-active')
		another.value = focus.children[2].innerText.slice(2)
		another.focus()
	}
}

function lim(e) {
	if (e.value.length > 4) {
		e.value = e.value.substr(0, 4)
	}
}

function getAnother() {
	if (document.querySelector(`#box-${another.value}`)) {
		let focus = document.querySelector(`#box-${another.value}`)
		clearActive()
		focus.children[1].classList.add('box-active')
		focus.children[2].classList.add('box-active')
	} else {
		clearActive()
	}
}

document.addEventListener('input', getAnother)
document.addEventListener('click', activeDonate)
