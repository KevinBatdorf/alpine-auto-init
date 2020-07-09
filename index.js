function AlpineAutoInit() {
	Array.from(document.querySelectorAll('[x-data]')).forEach(alpineElement => {
		alpineElement.setAttribute('x-init',
			[
				alpineElement.getAttribute('x-init'),
				`typeof init == 'function' && init()`
			].filter(Boolean).join(';')
		)
	})
}

const alpine = window.deferLoadingAlpine || ((alpine) => alpine())
window.deferLoadingAlpine = function(callback) {
	AlpineAutoInit()
	alpine(callback)
}

module.exports = AlpineAutoInit