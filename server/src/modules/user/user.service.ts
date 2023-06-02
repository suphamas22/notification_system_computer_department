
import { hashPassword, verifyPassword } from '../../common/utils/password-hasher';
import db from "../../models"
import { LoginResponse, UserAttributes } from './user.types';
import sequelize, { Op } from 'sequelize';
import { createJwtToken } from '../../middlewares/jwt.middleware.';
import { isAllValuesUndefined } from '../../common/utils';


const User = db.User


export const login = async (username: string, password: string): Promise<LoginResponse> => {
	try {
		const user = await User.findOne({
			where: {
				username
			}, raw: true
		});
		if (!user) {
			throw new Error('Invalid username or password');
		}

		const passwordMatch = await verifyPassword(password, user.password);

		if (!passwordMatch) {
			throw new Error('Invalid username or password');
		}
		
		// const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, "test", { expiresIn: '1h' });
		const token: string = createJwtToken({ id: user.id, role: user.role, name: user.name })
		return { token };
	} catch (error) {
		throw new Error('Unable to log in');
	}
};

export const createUser = async (user: UserAttributes): Promise<any> => {
	try {
		const { username, password } = user;

		// Check if a user with the given email or username already exists
		const existingUser = await User.findOne({
			where: {
				username
			},
		});

		if (existingUser) {
			throw new Error('Username already exists');
		}

		const hashedPassword = await hashPassword(password!);
		// console.log(hashPassword)
		const newUser = {
			...user, 
			password: hashedPassword 
		}
		const response = await User.create(newUser);
		delete response['dataValues'].password;
		return response;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to create user');
	}
};


export const updateUser = async (id: string, user: UserAttributes): Promise<UserAttributes> => {
	try {
		const existingUser = await User.findOne({ where: { id } });
		if (!existingUser) {
			throw new Error(`User with id ${id} not found`);
		}

		const [updatedRowsCount] = await User.update(user, { where: { id } });

		if (updatedRowsCount !== 1) {
			throw new Error(`Failed to update user with id ${id}`);
		}

		const updatedUser = await User.findByPk(id, {
			attribute: {
				exclude: ['password']
			}
		});
		delete updatedUser['dataValues']['password']
		return updatedUser
	} catch (error) {
		throw error;
	}
};


export const deleteUser = async (id: string): Promise<void> => {
	try {
		const user = await User.findOne({ where: { id } });

		if (!user) {
			throw new Error(`User with id ${id} not found`);
		}
		await User.destroy({ where: { id } });
	} catch (error) {
		throw new Error();
	}
};

export const getAllUsers = async (): Promise<UserAttributes[]> => {
	try {
		// let whereClause = {};
		// const searchableFields = [
		// 	"email",
		// 	"username",
		// 	"name",
		// 	"surname",
		// 	"phone",
		// 	"role",
		// 	"faculty",
		// ];

		// if (!isAllValuesUndefined(query)) {
		// 	whereClause = {
		// 		[Op.or]: searchableFields.map((field) => ({
		// 			[field]: {
		// 				[Op.like]: `%${query[field]}%`,
		// 			},
		// 		})),

		// 	};
		// };
		// if (query.keyword) {
		// 	whereClause = {
		// 		...whereClause,
		// 		[Op.or]: [
		// 			...searchableFields.map((field) => sequelize.where(sequelize.fn("LOWER", sequelize.col(field)), "LIKE", `%${query.keyword}%`)),
		// 		],
		// 	};
		// }

		const response = await User.findAll({
			// where: whereClause,
			attributes: {
				exclude: ['password']
			}
		});

		return response;
	} catch (error) {
		throw new Error("Unable to fetch users");
	}
}


export const getOneUser = async (id: string): Promise<UserAttributes> => {
	try {
		const response = await User.findByPk(id, {
			attribues: {
				exclude: ['password']
			}
		})
		delete response['dataValues']['password']
		return response
	} catch (error) {
		throw new Error('Unable to get user')
	}
}

export default {
	login,
	createUser,
	deleteUser,
	updateUser,
	getAllUsers,
	getOneUser
}