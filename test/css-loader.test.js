const tinyhash = require('../index')

test('"my-component" to equal "mcVXYZ"', () => {
    expect(tinyhash('my-component')).toBe('mcVXYZ')
})

test('"my-component__light" to equal "mclTRXZW"', () => {
    expect(tinyhash('my-component__light')).toBe('mclTRXZW')
})

test('"my-component--container" to equal "mccZXWXV"', () => {
    expect(tinyhash('my-component--container')).toBe('mccZXWXV')
})

test('"my-component--container__dark" to equal "mccdZUWTZ"', () => {
    expect(tinyhash('my-component--container__dark')).toBe('mccdZUWTZ')
})
