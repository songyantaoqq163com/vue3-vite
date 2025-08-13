// 排序
function compare(arr, property) {
    let data = []
    if (property) {
        data = arr.sort((a, b) => {
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        })
    } else {
        data = arr.sort((a, b) => {
            return a - b
        })
    }
    return data
}
//随机数字
function generateUniqueNumbers(count = 60, min = 0, max = 100) {
    if (max - min + 1 < count) {
        throw new Error("范围太小，无法生成指定数量的不重复数字");
    }
    const nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return [...nums];
}
//数组分段
function spArray(N, Q) {
    var R = [], F;
    for (F = 0; F < Q.length;) {
        R.push(Q.slice(F, F += N))
    }
    return R
}

export { spArray, generateUniqueNumbers, compare }