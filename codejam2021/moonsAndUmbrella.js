const changeArt = (value, costCJ, costJC) => {
    let cost = 0;
    let ideaCost = "";
    // let historyChar = "";
    if (costCJ > costJC) ideaCost = "JC";
    else ideaCost = "CJ";

    for (let i = 1; i < value.length - 2; i++) {
        let prevChar = value[i-1];
        let curChar = value[i];
        let nextChar = value [i + 1];


        /**
         * Case 1: there are 2 question mark 
        */

        if( prevChar === '?') {
            if(curChar === '?') {
                
            }
        }
        // if (value[i] === "?") {
        //     if (prevChar === "C" && value[i + 1] === "C") {
        //         value[i] = "C";
        //     }
        //     if (prevChar === "J" && value[i + 1] === "J") {
        //         value[i] = "J";
        //     }
        //     if (prevChar === "C" && value[i + 1] === "J") {
        //         value[i] = "C";
        //         cost += costCJ;
        //     }
        //     if (prevChar === "J" && value[i + 1] === "C") {
        //         value[i] = "J";
        //         cost += costJC;
        //     }
        // }
        if (value[i] === "C" && value[i + 1] === "J") cost += costCJ;
        if (value[i] === "J" && value[i + 1] === "C") cost += costJC;
        prevChar = value[i];
    }
    return cost;
}

console.log(changeArt('CJ?CC?', 2, 3));