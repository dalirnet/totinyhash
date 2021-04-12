const tinyhash = require('../index')

test('"tinyhash" to equal "tWZZT"', () => {
    expect(tinyhash('tinyhash', ['z', 's', 'x', 'w', 'y', 'r', 'v', 't', 'u', 'q'])).toBe('tWZZT')
})
