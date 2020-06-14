const AlpineAutoInit = require('../index')

test('x-init attribute is appended to all elements that already have the attribute present', () => {
	document.body.innerHTML = `<div x-data="{}" x-init="foo = bar"></div>`
	AlpineAutoInit()
	expect(document.querySelector('div').getAttribute('x-init')).toEqual("foo = bar;typeof init == 'function' && init()")
})

test('x-init attribute is added to all elements with x-data', () => {
	document.body.innerHTML = `<div x-data="{}"></div>`
	AlpineAutoInit()
	expect(document.querySelector('div').getAttribute('x-init')).toEqual("typeof init == 'function' && init()")
})
