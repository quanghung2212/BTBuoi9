console.log("bai 21")

function sumArr(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

console.log("bai 22")

function getMaxMinMed(arr) {
    var max = Math.max(...arr);
    let min = Math.min(...arr);
    let med = 0;
    let tmp = arr;

    tmp = tmp.sort(function(a,b){return a - b;})
    console.log(tmp)
    let l = tmp.length;
    if(l % 2 === 1 ) med = tmp[(l/2)-0.5];
    else{
        med = (tmp[l/2] + tmp[(l/2)-1])/2;
    }


    const res = [max,min,med];
    return res;
}

console.log('bai 23')

function countMax(a) {
    let count = [0,0,0,0,0,0,0,0,0,0]
    for (let index = 0; index < a.length; index++) {
        count[a[index]]++;
    }
    let max = count[0];
    let res = 0;
    for (let index = 1; index < count.length; index++) {
        if(count[index] > max) {
            max = count[index];
            res = index;
        }
    }
    return res;
}

console.log('bai 24')

function checkPrime(n) {
    if (n < 2){
        return false;
    }
    for (let index = 2; index < n; index++) {
        if(n % index == 0){
            return false;
        }
        
    }
    return true
}

function getPrime(arr) {
    const res = arr.filter(checkPrime);
    return res;
}

console.log('bai 25')

function toSquare(arr) {
    let res = [];
    for (let index = 0; index < arr.length; index++) {
        res.push((arr[index]*arr[index]));
    }
    return res;
}

console.log('bai 26')

function findClosestValue(arr,k) {
    let value =[];
    for (let index = 0; index < arr.length; index++) {
        value.push(Math.abs(arr[index]-k));
    }
    let res = [];
    let min = Math.min(...value)
    for (let index = 0; index < value.length; index++) {
        if(value[index] === min) res.push(arr[index]);
    }
    return res;
}

console.log('bai 27')

function normalizeName(name) {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
      if (i == 0 || name.charAt(i - 1) == " ") {     
        name = name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
      }
    }
    return name;
}
let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nhut"
    }
]

function countName(name) {
    let res = 0;
    let num = name.split(' ');
    res = num.length;
    return res;
}

function bai27(students) {
    for (let index = 0; index < students.length; index++) {
        students[index].firstName = normalizeName(students[index].firstName)
        students[index].lastName = normalizeName(students[index].lastName)
    }
    let res = [];
    let f = false;
    for (let index = 0; index < students.length; index++) {
        f == false;
        if(students[index].firstName.includes('a') || students[index].firstName.includes('A') || students[index].lastName.includes('a') || students[index].lastName.includes('A')){
            res.push(students[index]);
            f = true;
        }
        if((countName(students[index].firstName) + countName(students[index].lastName) >= 3) && f == false) res.push(students[index]);
        
    }



    return res;
}

console.log('bai 28')

function bai28(students) {
    for (let index = 0; index < students.length; index++) {
        students[index].firstName = normalizeName(students[index].firstName)
        students[index].lastName = normalizeName(students[index].lastName)
    }
    let res = [];
    let tmp = [];
    for (let index = 0; index < students.length; index++) {
        tmp = students[index].lastName.split(' ');
        if(tmp[0] == 'Do') res.push(students[index]);
    }
    return res;
}

console.log('bai 29')
// function sortFirstName(students) {
//     const res = students.sort((a,b) => a.localeCompare(b));
//     return res;
// }
// console.log(sortFirstName(students))
console.log('bai 30')

function findSecondMax(arr) {
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if(arr[index] > max) max = arr[index];
    }
    let max_2 = 0;
    for (let index = 1; index < arr.length; index++) {
        if((arr[index] > max_2) && (arr[index] != max)) max_2 = arr[index];
    }
    return max_2
    
}


let arr = [1,2,3,4,5,6,7,8,8]

// console.log(findSecondMax(arr))