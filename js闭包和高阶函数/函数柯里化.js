const currying = function (fn) {
    let args = []
    return function func() {
        if (arguments.length === 0) {
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
            return func
        }
    }

}
const cost = (function () {
    let money = 0
    return function () {
        const  len = arguments.length
        for (let i = 0; i < len; i++) {
            money += arguments[i]
        }
        return money
    }
})()

const total = currying(cost)
total(100)
total(200)
total(300)

console.log(total())