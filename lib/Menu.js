/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : index.js         */
/* Author   : Vicente Garcia   */
/* Date     : 04/20/2022       */
/* Modified : 04/21/2022       */
/* --------------------------- */
const inquirer = require("inquirer");
function Menu(){
    Menu.prototype.getOption = function(){
        console.log(`
  ======================================
  Welcome to Company's Data Base Manager
  ======================================
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to do:",
                choices: ["Search"
                         ,"Add"
                         ,"Update"
                         ,"Delete"]
            }
        ])
        .then(({option}) => {
            if (option === "Search"){
                this.getSearch();
            } else if (option === "Add"){
                this.getAdd();
            } else if (option === "Update"){
                this.getUpdate();
            } else if (option === "Delete"){
                this.getDelete();
            };
        });
    };
    Menu.prototype.getSearch = function(){
        console.log(`
  ==============
  Search section
  ==============
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to search:",
                choices: ["Departments"
                         ,"Roles"
                         ,"Employees"
                         ,"Employees by Manager"
                         ,"Employees by Department"
                         ,"Budget by Department"]
            }
        ])
        .then(({option}) => {
            if (option === "Departments"){
                console.log("ENTRA A BUSCAR DEPARTAMENTOS");
            } else if (option === "Roles"){
                console.log("ENTRA A BUSCAR ROLES");
            } else if (option === "Employees"){
                console.log("ENTRA A BUSCAR EMPLEADOS");
            } else if (option === "Employees by Manager"){
                console.log("ENTRA A BUSCAR EMPLEADOS POR MANAGER");
            } else if (option === "Employees by Manager"){
                console.log("ENTRA A BUSCAR EMPLEADOS POR DEPARTAMENTO");
            } else if (option === "Employees by Manager"){
                console.log("ENTRA A BUSCAR CARTERA POR DEPARTAMENTO");
            };
        });
    };
    Menu.prototype.getAdd = function(){
        console.log(`
  ===========
  Add section
  ===========
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to add:",
                choices: ["Department"
                         ,"Role"
                         ,"Employee"]
            }
        ])
        .then(({option}) => {
            if (option === "Department"){
                console.log("ENTRA A INSERTAR DEPARTAMENTO");
            } else if (option === "Role"){
                console.log("ENTRA A INSERTAR ROL");
            } else if (option === "Employee"){
                console.log("ENTRA A INSERTAR EMPLEADO");
            };
        });
    };
    Menu.prototype.getUpdate = function(){
        console.log(`
  ==============
  Update section
  ==============
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to update:",
                choices: ["Employee's role"
                         ,"Employee's manager"]
            }
        ])
        .then(({option}) => {
            if (option === "Employee's role"){
                console.log("ENTRA A ACTUALIZAR EL ROL DEL EMPLEADO");
            } else if (option === "Employee's manager"){
                console.log("ENTRA A ACTUALIZAR EL ROL DEL EMPLEADO");
            };
        });
    };
    Menu.prototype.getDelete = function(){
        console.log(`
  ==============
  Delete section
  ==============
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to delete:",
                choices: ["Department"
                         ,"Role"
                         ,"Employee"]
            }
        ])
        .then(({option}) => {
            if (option === "Department"){
                console.log("ENTRA A BORRAR DEPARTAMENTO");
            } else if (option === "Role"){
                console.log("ENTRA A BORRAR ROL");
            } else if (option === "Employee"){
                console.log("ENTRA A BORRAR EMPLEADO");
            };
        });
    };
};
module.exports = Menu;