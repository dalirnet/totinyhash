const totinyhash = require('../lib/index')

test('null to equal false', () => {
    expect(totinyhash(null)).toBeFalsy()
})

test('"" to equal false', () => {
    expect(totinyhash()).toBeFalsy()
})

test('"tinyhash" to equal "tRXXS"', () => {
    expect(totinyhash('tinyhash')).toBe('tRXXS')
})

test('"long string with space and $,@ chars and 10,50 numbers" to equal "lswsaca15nQXRZW"', () => {
    expect(totinyhash('long string with space and $,@ chars and 10,50 numbers')).toBe('lswsaca15nQXRZW')
})
