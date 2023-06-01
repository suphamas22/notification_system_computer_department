export interface UserAttributes {
	id?: number;
	username?: string;
	password?: string;
	name?: string;
	status?: boolean;
	role?: UserRole; // Enum for the role field
	department?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export type LoginResponse = {
	token: string;
}

