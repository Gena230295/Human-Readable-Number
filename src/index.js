module.exports = function toReadable(number) {
    const arr = [
        { 0: "zero" },
        { 1: "one" },
        { 2: "two" },
        { 3: "three" },
        { 4: "four" },
        { 5: "five" },
        { 6: "six" },
        { 7: "seven" },
        { 8: "eight" },
        { 9: "nine" },
        { 10: "ten" },
        { 11: "eleven" },
        { 12: "twelve" },
        { 13: "thirteen" },
        { 14: "fourteen" },
        { 15: "fifteen" },
        { 16: "sixteen" },
        { 17: "seventeen" },
        { 18: "eighteen" },
        { 19: "nineteen" },
        { 20: "twenty" },
        { 30: "thirty" },
        { 40: "forty" },
        { 50: "fifty" },
        { 60: "sixty" },
        { 70: "seventy" },
        { 80: "eighty" },
        { 90: "ninety" },
    ];

    const str = String(number);
    let letNum = "";

    if (
        str.length === 3 &&
        Number(str[1]) !== 0 &&
        Number(str[1]) !== 1 &&
        Number(str[2]) !== 0
    ) {
        letNum = letNum + `${str[0]} ${Number(str[1]) * 10} ${str[2]}`;
    } else if (
        str.length === 3 &&
        Number(str[1]) !== 0 &&
        Number(str[1]) !== 1
    ) {
        letNum = letNum + `${str[0]} ${Number(str[1]) * 10}`;
    } else if (str.length === 3 && Number(str[1]) !== 0) {
        letNum = letNum + `${str[0]} ${Number(str[1])}${Number(str[2])}`;
    } else if (
        str.length === 3 &&
        Number(str[1]) === 0 &&
        Number(str[2]) === 0
    ) {
        letNum = letNum + `${str[0]}`;
    } else if (str.length === 3) {
        letNum = letNum + `${str[0]} ${str[2]}`;
    } else if (
        str.length === 2 &&
        Number(str[0]) !== 1 &&
        Number(str[1]) !== 0
    ) {
        letNum = letNum + `${Number(str[0]) * 10} ${str[1]}`;
    } else {
        letNum = letNum + str;
    }

    const letArr = letNum.split(" ");
    const finArr = [];
    for (let i = 0; i < letArr.length; i++) {
        for (let s = 0; s < arr.length; s++) {
            if (Object.keys(arr[s])[0] === letArr[i]) {
                finArr.push(Object.values(arr[s])[0]);
            }
        }
    }
    if (str.length === 3) {
        finArr.splice(1, 0, "hundred");
    }
    return finArr.join(" ");
};
