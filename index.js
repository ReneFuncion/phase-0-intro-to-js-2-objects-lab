// Write your solution in this file!
const employee = {
    name: "Rene",
    streetAddress: "Baseline Road",
};
function updateEmployeeWithKeyAndValue(emp, key, value) {
    const newEmp = { ...emp };
    newEmp[key] = value;
    return newEmp;
}
function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;
    return emp;
}
function deleteFromEmployeeByKey(emp, key) {
    const newEmp = { ...emp };
    delete newEmp[key];
    return newEmp;
}
function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp;
}