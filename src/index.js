// default hash map
const defaultHashMap = ['x', 't', 'z', 'r', 'y', 'w', 'v', 's', 'q', 'u']

// match input string
const match = (input) => {
    return String(input || '').match(/([a-z0-9]).*?([^a-z0-9]|$)/gi) || []
}

// chunk matched array
const chunk = (matched) => {
    return (matched || []).map((item) => item.replace(/[^a-z0-9]/gi, '').toLowerCase())
}

// hash chunked array
const hash = (chunked) => {
    return String(
        chunked
            .join('')
            .split('')
            .map((item) => item.charCodeAt())
            .reduce((total, current, key) => total + current * key, 0)
    )
}

// transform
const transform = (chunked, hashMap = []) => {
    const validHashMap = hashMap.length != 10 ? defaultHashMap : hashMap
    return {
        one: chunked.map((item) => item.charAt()).join(''),
        two: hash(chunked)
            .split('')
            .map((item) => validHashMap[item])
            .join('')
            .toUpperCase(),
    }
}

// export
export default (input = null, hashMap = []) => {
    const { one, two } = transform(chunk(match(input)), hashMap)
    return one && one ? one + two : false
}
