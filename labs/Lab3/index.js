const http = require("http");
const employeeModule = require("./Employee"); 

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8082; 

const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
        return; 
    } else {
        if (req.url === "/") {
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return; 
        }

        if (req.url === "/employee") {
            res.setHeader("Content-Type", "application/json");
            const allEmployees = employeeModule.getAllEmployees();
            res.end(JSON.stringify(allEmployees));
            return; 
        }

        if (req.url === "/employee/names") {
            res.setHeader("Content-Type", "application/json");
            const employeeNames = employeeModule
                .getAllEmployees()
                .map(employee => `${employee.firstName} ${employee.lastName}`);
            employeeNames.sort(); 
            res.end(JSON.stringify(employeeNames));
            return; 
        }

        if (req.url === "/employee/totalsalary") {
            res.setHeader("Content-Type", "application/json");
            const totalSalary = employeeModule
                .getAllEmployees()
                .reduce((acc, employee) => acc + employee.Salary, 0);
            res.end(JSON.stringify({ total_salary: totalSalary }));
            return; 
        }
    }

    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
