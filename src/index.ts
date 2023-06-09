import _ from 'lodash'
import { add } from './test'

let res = _.padStart('Hello TypeScript!', 20, 'a')
let arr: number[] = [1, 2]
let resArr = arr.map(item => item = item+1)

console.log(res) // aaaHello TypeScript!
console.log(arr, resArr) // [ 1, 2 ] [ 2, 3 ]
console.log('add', add(2, 3)) // add 5