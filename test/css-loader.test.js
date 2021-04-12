const totinyhash = require('../lib/index')

test('"my-component" to equal "mcVXYZ"', () => {
    expect(totinyhash('my-component')).toBe('mcVXYZ')
})

test('"my-component__light" to equal "mclTRXZW"', () => {
    expect(totinyhash('my-component__light')).toBe('mclTRXZW')
})

test('"my-component--container" to equal "mccZXWXV"', () => {
    expect(totinyhash('my-component--container')).toBe('mccZXWXV')
})

test('"my-component--container__dark" to equal "mccdZUWTZ"', () => {
    expect(totinyhash('my-component--container__dark')).toBe('mccdZUWTZ')
})
