//==================

// array push 

//==================
const data = [30, 21, 11]
const functionArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        data.push(arr[i])
    }
    console.log(data)
}

functionArr([4, 3, 5, 19, 29])


//==================

// array unshift

//==================


const data2 = [33, 20]

let unshiftToData2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        data2.unshift(arr[i])
    }
    console.log(data2)
}

unshiftToData2([120, 200, 400])


//==================

// reverse array

//==================


const arrBiasa = [50, 20, 30, 90, 100]
const reverse = []
const reverseArr = () => {
    for (let i = arrBiasa.length - 1; i >= 0; i--) {
        reverse.push(arrBiasa[i])
    }
    console.log(reverse)

}
reverseArr()

//==================

// splice an array

//==================


let spliceArr = [12, 34, 11, 5, 23]

let spliceFunc = () => {
    for (let i = 1; i < spliceArr.length; i++) {

        spliceArr.splice(i, 1)

    }
    console.log(spliceArr)
}

spliceFunc()