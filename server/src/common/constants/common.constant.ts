import dotenv from 'dotenv';
dotenv.config();

export const PORT: string | undefined = process.env.PORT

// export const PREFIX: string = '/api/v1'

export const ALLOWED_ORIGINS: any = process.env.ALLOWED_ORIGINS?.split(',')

export const JWT_EXPRIES = process.env.JWT_EXPRIES
export const JWT_SECRET = process.env.JWT_SECRET