module.exports = function(sequelize, DataTypes) {
	var FoodPost = sequelize.define("FoodPost", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		desc: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		pickupdate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		enddate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		pickupwindow: {
			type: DataTypes.STRING,
			allowNull: false
		},
		allowsVolunteers: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	FoodPost.associate = function(models) {
		FoodPost.belongsTo(models.Donor, {
			foreignKey: {
				allowNull: false
			}
		});
		FoodPost.belongsToMany(models.NonProfit, {through: "InterestedRoster"});
  	};
	return FoodPost;
}