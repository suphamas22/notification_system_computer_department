
import { Request, Response, Express } from 'express';
import userService from './../services/user.service';

export const handleCreateUser = async (req: Request, res: Response): Promise<void> => {
	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ message: error });
	}
};

export const handleRegister = async (req: Request, res: Response): Promise<void> => {
	try {
		const { username, password, name } = req.body;
	
		// Create a new user
		const newUser = await userService.createUser({ username, password, name });
	
		res.status(201).json(newUser);
	  } catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to register user' });
	  }
};

export const handleLogin = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	try {
		const { token } = await userService.login(username, password);
		res.status(200).json({ message: "login was successfully", token });
	} catch (error) {
		res.status(401).json({ message: error, token: "" });
	}
};


export const handleDeleteUser = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const user: any = req.user
		if (user.id === id) {
			res.status(400).json({ message: `User with id ${id} has been deleted failed` });
		} else {
			await userService.deleteUser(id);
			res.status(200).json({ message: `User with id ${id} has been deleted successfully` });
		}
	} catch (error) {
		res.status(400).json({ message: 'handleDeleteUser was error' });
	}
};

export const handleUpdateUser = async (req: Request, res: Response): Promise<void> => {

	try {
		const { id } = req.params;
		const user = req.body;
		const updatedUser = await userService.updateUser(id, user);
		res.status(200).json({
			message: "update user was successfully",
			payload: updatedUser
		});
	} catch (error) {
		res.status(400).json({ message: 'handleUpdateUser was error' });
	}
};


export const handleGetAllUsers = async (req: Request, res: Response) => {
	// const query = req.query;
	try {
		const users = await userService.getAllUsers();
		res.status(200).json({
			message: 'Successfully retrieved all users',
			payload: users,
		});
	} catch (error) {
		res.status(400).json({ message: 'handleGetAllUsers was error' });
	}
};



export const handleGetOneUsers = async (req: Request, res: Response): Promise<void> => {
	try {
		const id = req.params.id

		const users = await userService.getOneUser(id);
		res.status(200).json({
			message: "get user was successfully",
			payload: users
		});
	} catch (error) {
		res.status(400).json({ message: 'Internal server error' });
	}
};



export default {
	handleLogin,
	handleGetAllUsers,
	handleCreateUser,
	handleDeleteUser,
	handleUpdateUser,
	handleGetOneUsers

}