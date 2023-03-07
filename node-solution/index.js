function printArray() {
    return Array.from(Array(100).keys()).map((item) => item + 1).toString()
}

console.log(printArray())