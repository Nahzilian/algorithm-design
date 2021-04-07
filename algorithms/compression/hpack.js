class HPack {
    constructor(data){
        this.data = data;
    }

    convertData = (data) => {
        const keys = Object.keys(data);
        const values = Object.values(data);
        return {keys, values};
    }

    dataStructure = () => {
        for (const [key, value] of Object.entries(object1)) {
            console.log(`${key}: ${value}`);
        }
    }
}

const data = {
    test:'test',
    test2:'test2'
}
const hpack = new HPack();

console.log(hpack.convertData());