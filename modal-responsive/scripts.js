const openBtn = document.querySelector('#open')
const modalOuter = document.querySelector('#modal-outer')
const closeBtns = document.querySelectorAll('#close')

openBtn.addEventListener('click', () => {
	modalOuter.classList.add('open')
})

closeBtns.forEach((cBtn) => {
	cBtn.addEventListener('click', () => {
		modalOuter.classList.remove('open')
	})
})

modalOuter.addEventListener('click', (e) => {
	if (e.target.attributes["0"].nodeValue === 'modal-outer') {
		modalOuter.classList.remove('open')
	}
})