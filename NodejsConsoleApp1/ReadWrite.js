var mongooseDrv = require('mongoose'); //Get the Mongoose Driver
//connection with theMongoDB


mongooseDrv.connect('mongodb://localhost/EmployeeDB');
var db = mongooseDrv.Connection; //The Connection 

if (db == 'undefined') {
	console.log("The Connecion issues");
}

//The Schema for the Data to be Stored
var EmployeeInfoSchema = mongooseDrv.Schema({
	EmpNo: String,
	EmpName: String,
	Salary: String,
	DeptName: String,
	Designation: String
});

var EmployeeInfoModel = mongooseDrv.model('EmployeeInfo', EmployeeInfoSchema);


//retrieve all records from the database 
exports.get = function (req, resp) {
	EmployeeInfoModel.find().exec(function (error, res) {
		if (error) {
			resp.send(500, { error: error });
		} else {
			resp.send(res);
		}
 
	});
};

//Add a new Record in the Employee Model
exports.add = function (request, response) {
	
	var newEmp = { EmpNo: request.body.EmpNo, EmpName: request.body.EmpName, Salary: request.body.Salary, DeptName: request.body.DeptName, Designation: request.body.Designation };
	EmployeeInfoModel.create(newEmp, function (addError, addedEmp) {
		if (addError) {
			response.send(500, { error: addError });
		}
		else {
			response.send({ success: true, emp: addedEmp });
		}
	});
};