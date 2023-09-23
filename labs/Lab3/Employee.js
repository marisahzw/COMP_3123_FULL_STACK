//TODO - Create Employee Module here and export to use in index.js



let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000 }
];

function getAllEmployees() {
    return employees;
}

function getEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

function addEmployee(employee) {
    employees.push(employee);
}

function updateEmployee(id, updatedEmployee) {
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedEmployee };
    }
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};
