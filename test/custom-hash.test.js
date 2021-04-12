const totinyhash = require('../lib/index')

test('"totinyhash" to equal "tWZZT"', () => {
    expect(totinyhash('tinyhash', ['z', 's', 'x', 'w', 'y', 'r', 'v', 't', 'u', 'q'])).toBe('tWZZT')
})
