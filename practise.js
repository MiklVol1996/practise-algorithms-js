// class Slider {


//     constructor(classSelector){
//         this.classSelector = document.querySelector(`.${classSelector}`) ;
//         this.classSelector.innerHTML = ` <button class="prev">prev</button>
//         <div class="slider"> <img class="img" src='' alt=""></div>
//         <button class="next">next</button>`;
//         this.arr = [];
//         this.src1 ='../project/img/01.png';
//         this.src2 ='../project/img/Logo.png';
//         this.src3 ='../project/img/Icon01.png';
//         this.prevButton = this.classSelector.querySelector('.prev');
//         this.nextButton = this.classSelector.querySelector('.next');
//         this.img = this.classSelector.querySelector('.img');
//         this.counter = 0;

//     }

//     point(){

//         this.arr.push(this.src1);
//         this.arr.push(this.src2);
//         this.arr.push(this.src3);
//         this.img.src =  this.arr[ this.counter];
//         this.nextButton.addEventListener('click', this.fff.bind(this));
//         this.prevButton.addEventListener('click', this.fff.bind(this));
//     }

//      fff(e) {
//         let a = e.currentTarget;
//         let b = a.innerHTML;

//         if(b === 'next'){
//             this.counter++;
//             this.img.src =  this.arr[ this.counter];
//         } else{
//             this.counter--;
//             this.img.src =  this.arr[ this.counter];
//         }
//         this.nextButton.disabled =  (this.counter == 2)? true : false;
//         this.prevButton.disabled =  (this.counter == 0)? true : false;

//     }

// }

// let slider = new Slider ("wrapper_1");
// slider.point();

// let slider2 = new Slider ("wrapper_2");
// slider2.point();

let obj1 = {
    name: 'misha',
    age: 27,
    adress: {
        street: 'vostochnaya',
        location: {
            direction: 'south',
        }
    }
}

let obj2 = {
    name: 'misha',
    age: 27,
    adress: {
        street: 'vostochnaya',
        location: {
            direction: 'south',
        }
    }
}



function fff(arr) {

    let obj = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] === "1") {
                let indicate = 0;
                let index;
                for (let b = 0; b < obj.length; b++) {
                    if (indicate === 0 && (obj[b].includes(`${i}.${j - 1}`) || obj[b].includes(`${i - 1}.${j}`))) {
                        obj[b].push(`${i}.${j}`);
                        indicate = 1;
                        index = b;
                        continue;
                    }
                    if (indicate === 1 && (obj[b].includes(`${i}.${j - 1}`) || obj[b].includes(`${i - 1}.${j}`))) {
                        obj[index] = obj[index].concat(obj[b]);
                        obj.splice(b, 1);

                    }
                }
                if (indicate === 0) {

                    obj[obj.length] = [];
                    obj[obj.length - 1].push(`${i}.${j}`);

                }
            }
        }
    }

    // for (let j = 0; j < obj.length - 1; j++) {
    //      for (let i = 0; i < obj[j].length; i++) {
    //         if (obj[j + 1].includes(obj[j][i])) {
    //                 obj[j] = obj[j].concat(obj[j + 1]);
    //                 obj.splice(j + 1, 1);
    //         }
    //     }
    // }

    return obj.length;
}

// function fff(arr) {

//     let counter = 0;

//     function searchAndChange(r, c) {

//         if (arr[r + 1]?.[c] === 1) {
//             arr[r + 1][c] = 6;
//             searchAndChange(r + 1, c);
//         }
//         if (arr[r - 1]?.[c] === 1) {
//             arr[r - 1][c] = 6;
//             searchAndChange(r - 1, c);
//         }
//         if (arr[r][c + 1] === 1) {
//             arr[r][c + 1] = 6;
//             searchAndChange(r, c + 1);
//         }
//         if (arr[r][c - 1] === 1) {
//             arr[r][c - 1] = 6;
//             searchAndChange(r, c - 1);
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {

//             if (arr[i][j] === 1) {

//                 counter++;
//                 searchAndChange(i, j);
//             }
//         }
//     }
//     return counter;
// }



// console.log(fff([["1","0","1","1","1"],
//                 ["1","0","1","0","1"],
//                 ["1","1","1","0","1"]]));




//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



// let area = [[[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
// [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
// [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
// [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
// [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
// [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
// [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
// [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
// [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]],
// ];

// function ddd(arr) {
//     let needToFill = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === '.') {
//                 needToFill++;
//             }
//         }
//     }

//     while (needToFill > 0) {
//         for (let x = 0; x < area.length; x++) {

//             outer: for (let i = 1; i < 10; i++) {

//                 let possible = 0;
//                 let arr2 = [];

//                 for (let h = 0; h < arr[x].length; h++) {

//                     if (arr[area[x][h][0]][area[x][h][1]] === i) {
//                         continue outer;
//                     }
//                 }
//                 outer_2: for (let j = 0; j < area[x].length; j++) {

//                     if (arr[area[x][j][0]][area[x][j][1]] === '.') {

//                         for (let k = 0; k < 9; k++) {
//                             if (arr[area[x][j][0]][k] === i) {

//                                 continue outer_2;
//                             }
//                         }
//                         for (let k = 0; k < 9; k++) {
//                             if (arr[k][area[x][j][1]] === i) {

//                                 continue outer_2;
//                             }
//                         }
//                         possible++;
//                         arr2.push(area[x][j][0]);
//                         arr2.push(area[x][j][1]);
//                     }
//                 }

//                 if (possible === 1) {
//                     arr[arr2[0]][arr2[1]] = i;
//                     needToFill--;
//                 }
//             }
//         }
//     }
//     return arr;
// }



//////////////////////////////////////////////////////////////////////////


function ddd(arr) {

    let arrSixe = 9;
    let boxSize = 3;

    function searchEmpty(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === '.') {
                    return [i, j]
                }
            }
        }
        return false;
    }

    function isValid(number, position, arr) {

        let [r, c] = position;

        for (let i = 0; i < arrSixe; i++) {

            if (arr[i][c] === number) {
                return false;
            }
        }

        for (let i = 0; i < arrSixe; i++) {

            if (arr[r][i] === number) {
                return false;
            }
        }

        let startRow = Math.floor(r / boxSize) * boxSize;
        let startCol = Math.floor(c / boxSize) * boxSize;

        for (let i = startRow; i < startRow + boxSize; i++) {
            for (let j = startCol; j < startCol + boxSize; j++) {

                if (arr[i][j] === number) {
                    return false;
                }
            }
        }
        return true;
    }

    function solve(arr) {

        let curPos = searchEmpty(arr);
        if (curPos) {

            for (let i = 1; i < arrSixe + 1; i++) {

                if (isValid(i, curPos, arr)) {

                    let [x, y] = curPos;
                    arr[x][y] = i;
                    if (solve(arr)) {
                        return true;
                    } else {
                        arr[x][y] = '.';

                    }
                }

            }
            return false;
        } else {
            return true;
        }

    }

    solve(arr);
    return arr;
}

// console.log(ddd([[5, 3, '.', '.', 7, '.', '.', '.', '.'],
// [6, '.', '.', 1, 9, 5, '.', '.', '.'],
// ['.', 9, 8, '.', '.', '.', '.', 6, '.'],
// [8, '.', '.', '.', 6, '.', '.', '.', 3],
// [4, '.', '.', 8, '.', 3, '.', '.', 1],
// [7, '.', '.', '.', 2, '.', '.', '.', 6],
// ['.', 6, '.', '.', '.', '.', 2, 8, '.'],
// ['.', '.', '.', 4, 1, 9, '.', '.', 5],
// ['.', '.', '.', '.', 8, '.', '.', 7, 9],
// ]));


//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


let limits = { 1000: 0, 500: 0, 100: 2, 50: 3, 30: 5 };

function eee(number, limits) {


    let arr = Object.entries(limits).reverse();
    let obj = {};

    function count(number, i) {
        let counter = 0;
        while (number >= arr[i][0] && arr[i][1] > 0) {
            number -= +arr[i][0];
            arr[i][1]--;
            counter++;
            if (!obj[arr[i][0]]) {
                obj[arr[i][0]] = 1;
            } else {
                obj[arr[i][0]]++;
            }
        }
        if (i === arr.length - 1 && number) {
            if (obj[arr[i][0]]) {
                arr[i][1] += obj[arr[i][0]];
                delete obj[arr[i][0]];
            }
            return false;
        }
        if (i === arr.length - 1 && !number) {
            return true;
        }

        for (let j = counter; j >= 0;) {

            if (!count(number, i + 1)) {
                if (j === 0) {
                    return false;
                }
                j--;
                number += +arr[i][0];
                arr[i][1]++;
                if (obj[arr[i][0]] === 1) {
                    delete obj[arr[i][0]];
                } else {
                    obj[arr[i][0]]--;
                }
            } else {
                return true;
            }
        }

    }
    if (!count(number, 0)) {
        console.log(limits);
        console.log(Object.fromEntries(arr));
        return {};
    }
    console.log(limits);
    console.log(Object.fromEntries(arr));
    return obj;
}

// console.log(eee(110, limits));


// let myPromise = axios.get('https://api.sampleapis.com/coffee/hot');
// myPromise.then (data => console.log(data.data));

let graph = {};
graph.a = [['b', 1], ['c', 1]];
graph.b = [['d', 1], ['e', 3]];
graph.c = [['g', 2]];
graph.d = [['f', 1], ['e', 1]];
graph.e = [['g', 1]];
graph.f = [['e', 1]];

function dyd(start, end) {

    let result = {
        path: '',
        cost: 0
    };

    let totalArr = [];

    search(start, result);
    function search(current, obj) {
        let newObj = {};
        Object.assign(newObj, obj);
        for (let i = 0; i < graph[current].length; i++) {
            if (newObj.path.includes(graph[current][i][0])) {
                continue;
            }
            newObj.path += graph[current][i][0];
            newObj.cost += graph[current][i][1];
            if (graph[current][i][0] === end) {
                let objForPush = {};
                Object.assign(objForPush, newObj);
                totalArr.push(objForPush);
                let arr = newObj.path.split('');
                arr.pop();
                newObj.path = arr.join('');
                newObj.cost -= graph[current][i][1];
            }

            if (!graph[graph[current][i][0]]) {
                return;
            } else {
                search(graph[current][i][0], newObj)
            }
            let arr = newObj.path.split('');
            arr.pop();
            newObj.path = arr.join('');
            newObj.cost -= graph[current][i][1];
        }
        return;
    }
    return totalArr;
}
// console.log(dyd('a', 'g'));





let nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let edges = [
    [0, 1],
    [1, 3],
    [1, 7],
    [2, 11],
    [2, 4],
    [3, 4],
    [4, 11],
    [4, 12],
    [5, 12],
    [5, 11],
    [5, 10],
    [6, 12],
    [6, 3],
    [6, 7],
    [6, 10],
    [7, 8],
    [7, 9],
    [9, 10],
];
let matrix = [];
for (let i = 0; i < nodes.length; i++) {
    let arr = [];
    for (let i = 0; i < nodes.length; i++) {
        arr.push(0);
    }
    matrix.push(arr);
}
for (let [a, b] of edges) {
    matrix[a][b] = 1;
    matrix[b][a] = 1;
}


function searchFriends(indexOfPerson, indexOfCircle) {

    let checked = [];
    let personForSearch = [indexOfPerson];

    return startSearch(checked, personForSearch, indexOfCircle);

    function startSearch(checked, personForSearch, indexOfCircle) {

        let temp = [];

        for (let i = 0; i < personForSearch.length; i++) {
            for (let j = 0; j < matrix[personForSearch[i]].length; j++) {
                if (matrix[personForSearch[i]][j]) {
                    if (checked.includes(j)) {
                        continue;
                    }
                    if (!temp.includes(j) && !temp.includes(personForSearch[i]) && !personForSearch.includes(j)) {
                        temp.push(j);
                    }
                }
            }
        }
        checked = checked.concat(personForSearch.slice());
        personForSearch = temp.slice();
        indexOfCircle--;
        if (indexOfCircle === 0) {
            return temp;
        } else {
            return startSearch(checked, personForSearch, indexOfCircle);
        }
    }
}
// console.log(searchFriends (1, 2)); 


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


let obj9 = {
    a: 11,
    1: 12,
    b: 13,
    2: 14,
    [Symbol.iterator]() {
        let keys = Object.keys(this);
        let arrOfLetters = keys.splice(keys.indexOf('a'));
        let finalArr = [...arrOfLetters, ...keys];
        let counter = -1;
        return {
            next() {
                if (counter < finalArr.length - 1) {
                    counter++;
                    return {
                        value: finalArr[counter],
                        done: false
                    }
                }
                return {
                    value: finalArr[counter],
                    done: true
                }
            }
        }
    }
}


// for (let key of obj9) {
//     console.log(key);
// }


//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(value) {
        if (this.length === 0) {
            this.head = this.tail = {
                value: value,
                next: null
            };
        }
        else if (this.length === 1) {
            let node = {
                value: value,
                next: null
            };
            this.tail = node;
            this.head.next = this.tail;
        }
        else {
            this.tail.next = {
                value: value,
                next: null
            };
            this.tail = this.tail.next;
        }
        this.length++;
    }
    find(str) {
        let current = this.head;
        while (true) {
            if (String(current.value[0]) === str) {
                return current.value[1];
            } else {
                current = current.next;
            }
        }
    }
}

class HashTable {
    constructor(length) {
        this.localeStorage = new Array(length);
    }
    hash(str) {
        let sumOfCharCodes = str.split('').reduce((acc, el) => acc + el.charCodeAt(), 0);
        let indexOfLocaleStorage = sumOfCharCodes % this.localeStorage.length;
        return indexOfLocaleStorage;
    }
    set(key, value) {
        let keyStr = String(key);
        let arrPart = this.localeStorage[this.hash(keyStr)];
        if (!arrPart) {
            this.localeStorage[this.hash(keyStr)] = [key, value];
        } else
            if (arrPart instanceof List) {
                this.localeStorage[this.hash(keyStr)].add([key, value]);
            } else {
                let list = new List();
                list.add(arrPart);
                list.add([key, value]);
                this.localeStorage[this.hash(keyStr)] = list;
            }
    }
    get(key) {
        let keyStr = String(key);
        let arrPart = this.localeStorage[this.hash(keyStr)];
        if (arrPart instanceof List) {
            return arrPart.find(keyStr);
        } else {
            return arrPart[1];
        }
    }
}
let hashTable = new HashTable(5);
hashTable.set(15, 'misha15');
hashTable.set(22, 'misha22');
hashTable.set(3, 'misha3');
hashTable.set(411, 'misha411');
hashTable.set(52, 'misha52');
hashTable.set(88, 'misha88');
// console.log(hashTable.localeStorage);

// console.log(hashTable.get(88));


////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////



function goUp(countOfSteps) {

    let combinations = 0;
    recursion();
    function recursion(number = 0) {
        let count = number;
        for (let i = 1; i <= 3; i++) {
            count += i;
            if (count < countOfSteps) {
                recursion(count);
                count -= i;
                continue;
            }
            if (count == countOfSteps) {
                combinations++;
                return;
            }
            if (count > countOfSteps) {
                return;
            }
        }
    }
    return combinations;
}

// console.log(goUp(4));


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


let graph2 = {
    a: [['b', 1], ['c', 2]],
    b: [['d', 7]],
    c: [['d', 1]],
    d: [['e', 1], ['f', 3], ['k', 2]],
    f: [['e', 4], ['g', 3]],
    k: [['e', 3], ['g', 8]]
}

let processed = [];
let forProcess = ['b', 'c'];
let costs = {
    b: 1,
    c: 2,
    d: 1000000,
    e: 1000000,
    f: 1000000,
    k: 1000000,
    g: 1000000
};
let parents = {
    b: 'a',
    c: 'a'
};

function yty(graph, finish) {

    while (forProcess.length != 0) {
        let currentNode = forProcess.shift();
        if (currentNode === finish || !graph[currentNode]) {
            continue;
        }
        if (processed.includes(currentNode)) {
            continue;
        }
        for (let i = 0; i < graph[currentNode].length; i++) {
            forProcess.push(graph[currentNode][i][0]);
        }
        let neighbors = graph[currentNode];
        for (let i = 0; i < neighbors.length; i++) {
            if (costs[currentNode] + neighbors[i][1] < costs[neighbors[i][0]]) {
                costs[neighbors[i][0]] = costs[currentNode] + neighbors[i][1];
                parents[neighbors[i][0]] = currentNode;
            }
        }
        processed.push(currentNode);
    }
}



yty(graph2, 'g');
console.log(getPath(parents, 'g'));
function getPath(obj, finish) {

    let str = '' + finish;
    let current = finish;
    while (obj[current]) {
        str += obj[current];
        current = obj[current];
    }
    return str.split('').reverse().join('');
}
// console.log(costs, parents);




///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function deikstra(graph, start, end) {

    let result = {};
    inner(start, '', 0);

    function inner(start, str, sum) {
        let current = start;
        if (!graph[current]) {
            return;
        }
        let path = str;
        let cost = sum;
        for (let i = 0; i < graph[current].length; i++) {
            let a = path + graph[current][i][0];
            let b = cost + graph[current][i][1];
            if (path.includes(graph[current][i][0])) {
                continue;
            }
            if (graph[current][i][0] === end) {
                result[a] = b;
                continue;
            }
            inner(graph[current][i][0], a, b);
        }
        return;
    }
    return result;
}
// console.log(deikstra (graph, 'a', 'g'));



//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


function showNumbers(from, to) {


    let intervalId = setInterval(() => {
        if (from <= to) {
            console.log(from++);
        } else {
            clearInterval(intervalId);
        }
    }, 1000)
}
// showNumbers(1,5);



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



class MyPromise {
    static state = {
        pending: 'PENDING',
        resolved: 'RESOLVED',
        rejected: 'REJECTED',
    }
    #state;
    storage;
    value;
    constructor(callback) {
        this.#state = MyPromise.state.pending;
        this.storage = {
            onFulfilled: [],
            onRejected: [],
            promise: null,
        }
        callback(this.resolve.bind(this));
    }

    resolve(value) {
        this.#state = MyPromise.state.resolved;
        this.value = value;
        if (this.storage.promise) {
            this.#handler.bind(this)();
        } else{
            this.storage.onFulfilled[0]?.();
        }

    }

    then(onFulfilled, onRejected) {
        let promise = new MyPromise(() => { });
        if (onFulfilled) {
            this.storage.onFulfilled.push([onFulfilled, promise]);
        }
        if (onRejected) {
            this.storage.onRejected.push([onRejected, promise]);
        }
        this.storage.promise = promise;
        return promise;
    }

    #handler() {
        if (this.#state === MyPromise.state.resolved) {
            if (!this.storage.onFulfilled.length) {
                this.resolve.bind(this.storage.promise)(this.value);
            }

            this.storage.onFulfilled.forEach(([fn, promise]) => {
                let result = fn(this.value);
                if(result instanceof MyPromise){
                    result.storage.onFulfilled.push(() => promise.resolve(result.value));
                } else{
                    this.resolve.bind(promise)(result);
                }
            });
        }
    }
}

// let promise = new MyPromise((resolve) => {
//     setTimeout(() => resolve('success'), 2000);
// })
// promise.then(data => data + '!')
//         .then(data => data + '!')
//         .then(data => {
//             console.log(data);
//             return new MyPromise(resolve => {
//                 setTimeout(() => resolve(data + '!'), 1000);
//             })
//         })
//         .then(data => console.log(data));

//         promise.then(data => data + '?')
//         .then(data => data + '?')
//         .then(data => {
//             console.log(data);
//             return new MyPromise(resolve => {
//                 setTimeout(() => resolve(data + '?'), 2000);
//             })
//         })
//         .then(data => console.log(data));


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => reject('hello'), 2000);
// });

// p.then(() => {console.log('ddd')})
//  .then(() => {console.log('ooo')})
//  .catch((err) => {
//     console.log(err);
//     return 'rrr'
//  })
//  .then((data) => {
//     console.log(data);
//     return data;
// })
//  .finally(() => {
//     console.log('bbb');
//  })
//  .then((data) => {
//     console.log(data);
//  })



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



// function add(number){
//     let sum = number;
//     return function inner (num){
//         inner.toString = function(){
//             return sum;
//         } 
//         sum += num;
        
//         return inner;
//     }
// }


// alert(add(1)(2)(3)(4)(5));







