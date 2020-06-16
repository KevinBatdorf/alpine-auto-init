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

const buffered = window.deferLoadingAlpine || false
window.deferLoadingAlpine = function(alpine) {
	AlpineAutoInit()
	typeof buffered == "function" && buffered()
	alpine()
}

module.exports = AlpineAutoInit