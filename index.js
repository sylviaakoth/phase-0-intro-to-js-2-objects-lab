// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

let copyOf = {...employee}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return copyOf
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee.streetAddress = '12 Broadway'
    return employee
}

let newEmployee = {...employee}

function deleteFromEmployeeByKey(employee, key) {
    delete newEmployee ["name"]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee ["name"]
    return employee
}