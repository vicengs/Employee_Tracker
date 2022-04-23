/* --------------------------- */
/* Project  : Employee Tracker */
/* File     : index.js         */
/* Author   : Vicente Garcia   */
/* Date     : 04/20/2022       */
/* Modified : 04/21/2022       */
/* --------------------------- */
const inquirer = require("inquirer");
const Queries = require("./../db/Queries");
const Inserts = require("./../db/Inserts");
const Updates = require("./../db/Updates");
const Deletes = require("./../db/Deletes");
function Menu() {
    Menu.prototype.getOption = function(){
        console.log(`
=================================================
                    MAIN MENU
=================================================
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to do:",
                choices: ["Search"
                         ,"Add"
                         ,"Update"
                         ,"Delete"
                         ,"Exit"]
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
            } else {
                console.log(`
=================================================
                    GOOD BYE
=================================================
`);
                process.exit();
            };
        });
    };
    Menu.prototype.getSearch = function(){
        console.log(`
=================================================
################ SEARCH SECTION #################
=================================================
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
                         ,"Budget by Department"
                         ,"Return to Main Menu"]
            },
            {
                type: "input",
                name: "condition",
                message: "What is the Manager's name?",
                when: ({ option }) => {
                    if (option === "Employees by Manager") {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: conditionInput => {
                    if (conditionInput) {
                        return true;
                    } else {
                        console.log("Please enter the Manager’s name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "condition",
                message: "What is the Department's name?",
                when: ({ option }) => {
                    if (option === "Employees by Department"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: conditionInput => {
                    if (conditionInput) {
                        return true;
                    } else {
                        console.log("Please enter the Department’s name!");
                        return false;
                    }
                }
            }
        ])
        .then(({option, condition}) => {
            if (option === "Return to Main Menu"){
                this.getOption();
            } else {
                new Queries().getQuery(option, condition);
                setTimeout(function(){
                    new Menu().menuBack("Search");
                },1000);
            };
        });
    };
    Menu.prototype.getAdd = function(){
        console.log(`
=================================================
++++++++++++++++++ ADD SECTION ++++++++++++++++++
=================================================
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to add:",
                choices: ["Department"
                         ,"Role"
                         ,"Employee"
                         ,"Return to Main Menu"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the Department's name?",
                when: ({ option }) => {
                    if (option === "Department"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Departments’s name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "name",
                message: "What is the Role's name?",
                when: ({ option }) => {
                    if (option === "Role"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Role’s name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "name",
                message: "What is the Employee's first name?",
                when: ({ option }) => {
                    if (option === "Employee"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee’s first name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "salary",
                message: "What is the Role's salary?",
                when: ({ option }) => {
                    if (option === "Role"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: salaryInput => {
                    if (salaryInput) {
                        return true;
                    } else {
                        console.log("Please enter the Role’s salary!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "fkId",
                message: "What is the Role's id department?",
                when: ({ option }) => {
                    if (option === "Role"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: fkInput => {
                    if (fkInput) {
                        return true;
                    } else {
                        console.log("Please enter the Role’s id department!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the Employee's last name?",
                when: ({ option }) => {
                    if (option === "Employee"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: fkInput => {
                    if (fkInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee’s last name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "fkId",
                message: "What is the Employee's id role?",
                when: ({ option }) => {
                    if (option === "Employee"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: fkInput => {
                    if (fkInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee’s id role!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Employee's id manager?",
                when: ({ option }) => {
                    if (option === "Employee"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: fkInput => {
                    if (fkInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee’s id manager!");
                        return false;
                    }
                }
            }
        ])
        .then(({option, name, salary, fkId, lastName, managerId}) => {
            if (option === "Return to Main Menu"){
                this.getOption();
            } else {
                new Inserts().setInsert(option, name, salary, fkId, lastName, managerId);
                setTimeout(function(){
                    new Menu().menuBack("Add");
                },1000);
            };
        });
    };
    Menu.prototype.getUpdate = function(){
        console.log(`
=================================================
**************** UPDATE SECTION *****************
=================================================
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to update:",
                choices: ["Employee's role"
                         ,"Employee's manager"
                         ,"Return to Main Menu"]
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the Employee's id you want to modify?",
                when: ({ option }) => {
                    if (option != "Return to Main Menu"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: employeeInput => {
                    if (employeeInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee’s id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "changeId",
                message: "What is the new Employee's id role?",
                when: ({ option }) => {
                    if (option === "Employee's role"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: changeInput => {
                    if (changeInput) {
                        return true;
                    } else {
                        console.log("Please enter the new Employee’s id role!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "changeId",
                message: "What is the new Employee's id manager?",
                when: ({ option }) => {
                    if (option === "Employee's manager"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: changeInput => {
                    if (changeInput) {
                        return true;
                    } else {
                        console.log("Please enter the new Employee’s id manager!");
                        return false;
                    }
                }
            }
        ])
        .then(({option, employeeId, changeId}) => {
            if (option === "Return to Main Menu"){
                this.getOption();
            } else {
                new Updates().setUpdate(option, employeeId, changeId);
                setTimeout(function(){
                    new Menu().menuBack("Update");
                },1000);
            };
        });
    };
    Menu.prototype.getDelete = function(){
        console.log(`
=================================================
---------------- DELETE SECTION -----------------
=================================================
`);
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would you want to delete:",
                choices: ["Department"
                         ,"Role"
                         ,"Employee"
                         ,"Return to Main Menu"]
            },
            {
                type: "input",
                name: "id",
                message: "What is the Department's id you want to delete?",
                when: ({ option }) => {
                    if (option === "Department"){
                        return true ;
                    } else {
                        return false;
                    }
                },
                validate: departmentInput => {
                    if (departmentInput) {
                        return true;
                    } else {
                        console.log("Please enter the Department’s id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the Role's id you want to delete?",
                when: ({ option }) => {
                    if (option === "Role"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: roleInput => {
                    if (roleInput) {
                        return true;
                    } else {
                        console.log("Please enter the Role’s id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the Employee's id you want to delete?",
                when: ({ option }) => {
                    if (option === "Employee"){
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: employeeInput => {
                    if (employeeInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee’s id!");
                        return false;
                    }
                }
            }
        ])
        .then(({option, id}) => {
            if (option === "Return to Main Menu"){
                this.getOption();
            } else {
                new Deletes().setDelete(option, id);
                setTimeout(function(){
                    new Menu().menuBack("Delete");
                },1000);
            };
        });
    };
    Menu.prototype.menuBack = function(option){
        inquirer.prompt([
            {
                type: "confirm",
                name: "confirmBack",
                message: "Would you like to back to " + option + " Section?",
                default: true
            }
        ])
        .then(({confirmBack}) => {
            if (confirmBack) {
                switch (option) {
                    case "Search":
                        this.getSearch();
                        break;
                    case "Add":
                        this.getAdd();
                        break;
                    case "Update":
                        this.getUpdate();
                        break;
                    case "Delete":
                        this.getDelete();
                        break;
                };
            } else {
                this.getOption();
            };
        });
    };
};
module.exports = Menu;