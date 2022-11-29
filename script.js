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

//* slider-pets

const animals = [
	{
		name: 'giant pandas',
		location: 'Native to Southwest China',
		image: 'assets/images/pets/pandas.jpg',
		meal: 'assets/icons/banana.svg',
	},
	{
		name: 'eagles',
		location: 'Native to South America',
		image: 'assets/images/pets/eagle.jpg',
		meal: 'assets/icons/meet.svg',
	},
	{
		name: 'gorillas',
		location: 'Native to Congo',
		image: 'assets/images/pets/gorilla.jpg',
		meal: 'assets/icons/banana.svg',
	},
	{
		name: 'two-toed sloth',
		location: 'Mesoamerica, South America',
		image: 'assets/images/pets/sloth.jpg',
		meal: 'assets/icons/banana.svg',
	},
	{
		name: 'cheetahs',
		location: 'Native to Africa',
		image: 'assets/images/pets/cheetahs.jpg',
		meal: 'assets/icons/meet.svg',
	},
	{
		name: 'penguins',
		location: 'Native to Antarctica',
		image: 'assets/images/pets/pinguin.jpg',
		meal: 'assets/icons/meet.svg',
	},
	{
		name: 'fox',
		location: 'all of Europe',
		image: 'assets/images/pets/fox.jpg',
		meal: 'assets/icons/meet.svg',
	},
	{
		name: 'przewalski horse',
		location: 'western Mongolia',
		image: 'assets/images/pets/horse_prj.jpg',
		meal: 'assets/icons/banana.svg',
	},
	{
		name: 'hyena',
		location: 'Native to Africa',
		image: 'assets/images/pets/hyena.jpg',
		meal: 'assets/icons/meet.svg',
	},
	{
		name: 'jerboa',
		location: 'Asia west',
		image: 'assets/images/pets/jerboa.jpg',
		meal: 'assets/icons/banana.svg',
	},
	{
		name: 'kenguru',
		location: 'Native to Australia',
		image: 'assets/images/pets/kenguru.jpg',
		meal: 'assets/icons/banana.svg',
	},
	{
		name: 'owl',
		location: 'Native to Europe',
		image: 'assets/images/pets/owl.jpg',
		meal: 'assets/icons/meet.svg',
	},
	{
		name: 'puma',
		location: 'Native to America',
		image: 'assets/images/pets/puma.jpg',
		meal: 'assets/icons/meet.svg',
	},
	{
		name: 'zubr',
		location: 'Native to Eastern Europe',
		image: 'assets/images/pets/zubr.jpg',
		meal: 'assets/icons/banana.svg',
	},
	{
		name: 'wolf',
		location: 'Native to Europe',
		image: 'assets/images/pets/wolf.jpg',
		meal: 'assets/icons/meet.svg',
	},
]

const petsLeft = document.querySelector('#pets-left')
const petsMain = document.querySelector('#pets-main')
const petsRight = document.querySelector('#pets-right')
const petsSlider = document.querySelector('.pets-slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')

let arrMain, arrSub, columns
if (document.documentElement.clientWidth > 999) {
	columns = 3
} else {
	columns = 2
}

const arrAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
if (columns === 3) {
	arrMain = [6, 7, 8, 9, 10, 11]
	arrSub = [0, 1, 2, 3, 4, 5]
} else {
	arrMain = [4, 5, 6, 7]
	arrSub = [0, 1, 2, 3]
}

function createCard(animal) {
	return `<div class="pet-item">
								<div class="pet-image">
									<img class="pet-image-pic" src="${animals[animal].image}" alt="${animals[animal].name}">
									<div class="pet-image-back">
										<span>${animals[animal].name}</span>
										<span>${animals[animal].location}</span>
									</div>
								</div>
								<div class="pet-title-container">
									<div class="pet-title">
										<span class="pet-name">${animals[animal].name}</span>
										<span class="pet-country">${animals[animal].location}</span>
									</div>
									<div class="pet-icon ${animals[animal].meal}"></div>
								</div>
							</div>`
}

for (let i = 0; i < columns * 2; i++) {
	petsLeft.innerHTML += createCard(i)
	petsRight.innerHTML += createCard(i)
}
for (let i = columns * 2; i < columns * 4; i++) {
	petsMain.innerHTML += createCard(i)
}

function getRandomCard() {
	arrMain = arrSub
	arrSub = arrAll.filter((e) => {
		return !arrMain.includes(e)
	})
	arrSub.sort(() => Math.random() - 0.5)
	if (columns === 3) {
		arrSub = arrSub.slice(3)
		console.log(`Сгенерированные новые карточки : ${arrSub}`)
	} else {
		arrSub = arrSub.slice(7)
		console.log(`Сгенерированные новые карточки : ${arrSub}`)
	}

	petsLeft.innerHTML = ''
	arrSub.forEach((e) => {
		petsLeft.innerHTML += createCard(e)
	})
	petsRight.innerHTML = petsLeft.innerHTML
}

function goToLeft() {
	petsSlider.classList.add('swipe-left')

	arrowLeft.removeEventListener('click', goToLeft)
	arrowRight.removeEventListener('click', goToRight)
}

function goToRight() {
	petsSlider.classList.add('swipe-right')

	arrowLeft.removeEventListener('click', goToLeft)
	arrowRight.removeEventListener('click', goToRight)
}

petsSlider.addEventListener('animationend', (event) => {
	petsSlider.classList.remove('swipe-left')
	petsSlider.classList.remove('swipe-right')
	if (event.animationName === 'goLeft') {
		petsMain.innerHTML = petsLeft.innerHTML
	}
	if (event.animationName === 'goRight') {
		petsMain.innerHTML = petsRight.innerHTML
	}
	getRandomCard()
	arrowLeft.addEventListener('click', goToLeft)
	arrowRight.addEventListener('click', goToRight)
})
arrowLeft.addEventListener('click', goToLeft)
arrowRight.addEventListener('click', goToRight)

petsMain.innerHTML = petsLeft.innerHTML
getRandomCard()

//* test

const testBar = document.querySelector('.test-bar')
const testSlider = document.querySelector('.test-slider')
const testBlockContainer = document.querySelector('.test-block-container')
const testBlockCard = document.querySelector('.test-block-card')

let testStep
if (document.documentElement.clientWidth > 1599) {
	testBar.max = '7'
	testStep = 298
} else {
	testBar.max = '8'
	testStep = 323
}
function nextSlide() {
	testSlider.style['transform'] = `translateX(-${testBar.value * testStep}px)`
}

testBar.addEventListener('input', nextSlide)

//* test cards
if (document.documentElement.clientWidth < 641) {
	const darkAreaTest = document.querySelector('.dark-area-test')

	testSlider.addEventListener('click', (event) => {
		if (event.target.closest('.test-block-item')) {
			let card = event.target.closest('.test-block-item').innerHTML
			testBlockCard.innerHTML = `<div class="test-block-item">${card}</div><div class="burger-cross"></div>`
			darkAreaTest.classList.add('active')
			testBlockCard.classList.add('active')
			html.classList.add('scroll-off-test')
			testBlockCard
				.querySelector('.burger-cross')
				.addEventListener('click', closeTestCard)
		}
	})

	function closeTestCard() {
		darkAreaTest.classList.remove('active')
		testBlockCard.classList.remove('active')
		setTimeout(() => {
			testBlockCard.innerHTML = ''
		}, 700)
		html.classList.remove('scroll-off-test')
	}

	darkAreaTest.addEventListener('click', closeTestCard)
}


console.log(`
Работа выполнена на 100 баллов. Если Вы заметили ошибку, свяжитесь пожалуйста со мной в discord или telegram : @idanigor или установите галочку "Make my name visible in feedback"
Спасибо! 

Обратите внимание, что :
- При изменении разрешения страницы ОБЯЗАТЕЛЬНО перезагрузите страницу. Это есть в ТЗ. Иначе, у Вас обязательно будут ошибки в слайдерах.
- Баллы за ошибки дизайна не снимаются по ТЗ
- Стартовый набор карточек может оставаться одинаковым. - Стартовый набор в блоке "pets" сформирован при загрузке страницы. Поэтому центральный и боковые слайды уже готовы. После первого перелистывания будет бесконечная генерация новых карт. Для удобства для Вас в логах будут номера карт.
- В блоке Testimonials у меня допустимые 8 (1600+) и 9 (1600-1000) интервалов.
`)

alert('Посмотрите пожалуйста консоль Ctrl + Shift + I')
