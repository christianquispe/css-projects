const section = document.querySelector("section")
const hireBtn = section.querySelector("#hireBtn")
const closeBtn = section.querySelectorAll("#close")

hireBtn.addEventListener("click", () => {
	section.classList.add("show")
})

closeBtn.forEach(cBtn => {
	cBtn.addEventListener("click", () => {
		section.classList.remove("show")
	})
});

// closeBtn.addEventListener("click", () => {
// 	section.classList.remove("show")
// })

// cancelBtn.addEventListener("click", () => {
// 	section.classList.remove("show")
// })