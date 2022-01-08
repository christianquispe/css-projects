//  getting elements
const nav = document.querySelector('nav')
const toggleBtn = nav.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', () => {
	nav.classList.toggle('open')
})

//  js code to make draggable nav

function onDrag({ movementY }) {
	const navStyle = window.getComputedStyle(nav) //getting all css style of nav
	const navTop = parseInt(navStyle.top) //getting nav top value & convert to int
	const navHeight = parseInt(navStyle.height) //getting nav height value & convert to int
	const windHeight = window.innerHeight //getting window height

	nav.style.top = navTop > 0 ? `${navTop + movementY}px` : '1px'
	if (navTop > windHeight - navHeight) {
		nav.style.top = `${windHeight - navHeight}px`
	}
}

// this function call when user click mouse's button and move mouse on nav
nav.addEventListener('mousedown', () => {
	nav.addEventListener('mousemove', onDrag)
})

// this function call when user release mouse button and leave mouse from nav
nav.addEventListener('mouseup', () => {
	nav.removeEventListener('mousemove', onDrag)
})

// this function call when user click mouse's button and move mouse on nav
nav.addEventListener('mouseleave', () => {
	nav.removeEventListener('mousemove', onDrag)
})