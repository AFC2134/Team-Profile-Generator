const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, Email, OfficeNum) {
        super(name, id, Email);
        this.OfficeNum = OfficeNum;
    }
}; 

module.exports = Manager