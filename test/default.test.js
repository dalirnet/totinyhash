const tinyhash = require('../index')

test('null to equal false', () => {
    expect(tinyhash(null)).toBeFalsy()
})

test('"" to equal false', () => {
    expect(tinyhash()).toBeFalsy()
})

test('"tinyhash" to equal "tRXXS"', () => {
    expect(tinyhash('tinyhash')).toBe('tRXXS')
})

test('"long string with space and $,@ chars and 10,50 numbers" to equal "lswsaca15nQXRZW"', () => {
    expect(tinyhash('long string with space and $,@ chars and 10,50 numbers')).toBe('lswsaca15nQXRZW')
})
