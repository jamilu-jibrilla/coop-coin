console.log('checking the typescript compiler')

let age: number = 20;
let check: string = "word"

console.log(age, check)


const checkFunction = (word_check: string) => {
    console.log(word_check, 'a word check function')
} 

const arr_num: number[] = [1,3,4,5]

let arr_mutiple:[number, string] = [1, 'string here']

// ENUM

enum Size {Small, Medium, Large}

console.log(Size)


function calculate_tax (income: number): string {
    return ""
}

function test_more(empty: any): any {
    return 
}

type Employee_type_alias = {
    readonly id: number,
    name: string,
    find_out: () => void
}


let example_employee: Employee_type_alias = {
    id: 2,
    name: "jamil",
    find_out: () => 'okay' 
}

console.log(example_employee)
