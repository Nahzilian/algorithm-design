const reverseSort = (arr) => {
    var cost = 0;
    for (let i = 1; i < arr.length; i++) {
        /**
         * 1. Find the min value of sub array
         * 1. Split array into 2 set, 1 is with the minimum, the other is not
         * 2. Reverse the array with the min val
         * 3. Concat
        */
        var preArr = arr.slice(0, i - 1);
        var curArr = arr.slice(i - 1, arr.length);
        var minVal = Math.min.apply(Math, curArr);
        var indexOfMin = arr.indexOf(minVal);
        var minArr = arr.slice(i - 1, indexOfMin + 1);
        minArr.reverse();
        var nonMinArr = arr.slice(indexOfMin + 1, arr.length);
        arr = preArr.concat(minArr.concat(nonMinArr));
        cost = cost + indexOfMin - i + 2;
    }
    return cost;
}

function main() {
    let problem = {
        testCases: 0,
        arrayInput: [],
        lineCount: 0
    }

    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    rl.on('line', function (line) {
        if (problem.testCases === 0) {
            problem.testCases = parseInt(line.trim());
            problem.lineCount++;
        } else {
            if (problem.lineCount % 2 === 0) {
                var temp = line.trim().split(" ").map(elem => parseInt(elem));
                problem.arrayInput.push(temp)
            }
            problem.lineCount++;
        }
    }).on('close', () => {
        for (let i = 0; i < problem.testCases; i++) {
            console.log(`Case #${i + 1}: ${reverseSort(problem.arrayInput[i])}`);
        }
        return;
    })

}

main();