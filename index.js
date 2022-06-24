/**
 * This file will be used to demo the functionalities of the
 * sequelize.
 */

const connection = require("./utils/database");
const Student = require("./models/student.model");
const Marksheet = require("./models/marksheet.model");
/**
 * Initialize the table corresponding to the model
 */
connection.sync().then(result => {
    console.log("Successfully synced");

    /**
     * This is the palce where data should be added.
     */
    return Student.create({name: "Uday Teja", email: "admin@udayteja.com"})
}).then(studentObj => {
    console.log(`Student Created`);

    /**
     * Creating the Marksheet table
     */
    return Marksheet.create({marks: 101});
}).then(marksObj => {
    console.log(`Marks Updated`);
}).catch(err => {
    console.log(err);
    return;
})