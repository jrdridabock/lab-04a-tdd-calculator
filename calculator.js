
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    return x / y;
}

export function toNumber(niceDay) { 
    return Number(niceDay.value);
}

export function dividezero(x, y) {
    if (x === 0 & y === 0) {
        return 0;
    }
}