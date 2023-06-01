import * as dbConstant from "../constants/database.constant";

module.exports = {
	development: {
		username: dbConstant.DB_USERNAME_DEV,
		password: dbConstant.DB_PASSWORD_DEV,
		database: dbConstant.DB_DATABASE_DEV,
		host: dbConstant.DB_HOST_DEV,
		dialect: dbConstant.DB_DIALECT_DEV,
	},
	test: {
		username: dbConstant.DB_USERNAME_TEST,
		password: dbConstant.DB_PASSWORD_TEST,
		database: dbConstant.DB_DATABASE_TEST,
		host: dbConstant.DB_HOST_TEST,
		dialect: dbConstant.DB_DIALECT_TEST,
	},
	production: {
		username: dbConstant.DB_USERNAME_PROD,
		password: dbConstant.DB_PASSWORD_PROD,
		database: dbConstant.DB_DATABASE_PROD,
		host: dbConstant.DB_HOST_PROD,
		dialect: dbConstant.DB_DIALECT_PROD,
	},
};