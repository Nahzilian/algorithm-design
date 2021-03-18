const mock = require('./data/MOCK_DATA.json');

const chunk = (data, num) => {
    const chunked = [];
    for (let elem of data) {
        let last = chunked[chunked.length - 1];
        if (!last || last.length === num) chunked.push([elem]);
        else last.push(elem);
    }
    return chunked;
}

var test = chunk (mock, 15);
console.log(test[2])
