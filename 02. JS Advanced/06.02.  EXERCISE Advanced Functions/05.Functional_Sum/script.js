function add(n) {
    let temp = 0

    function inner(x) {
        temp += x

        return inner
    }
    inner.toString = () => temp
    return inner(n)
}