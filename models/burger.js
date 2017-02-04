//http://docs.sequelizejs.com/en/latest/docs/models-definition/
module.exports = function(sequelize, DataTypes) {
	//create a Burger model that matches up with db
	//Use the define method to define mappings between a model and a table.
	//Sequelize will then automatically add the attributes createdAt and updatedAt to it.
	//So you will be able to know when the database entry went into the db and when it was updated the last time.
	var Burger = sequelize.define('Burger', {//this is like a 'burger' table
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	return Burger;
};