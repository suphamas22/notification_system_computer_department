import dotenv from 'dotenv';
dotenv.config();

export const PORT: string | undefined = process.env.PORT

export const PREFIX: string = '/api/v1'

export const ALLOWED_ORIGINS: any = process.env.ALLOWED_ORIGINS?.split(',')
