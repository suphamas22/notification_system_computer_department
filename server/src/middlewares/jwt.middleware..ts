import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../common/constants/common.constant';
import { JWT_EXPRIES } from '../common/constants/common.constant';

export const createJwtToken = (claims: object): string => {

	const token: string = jwt.sign(
		{
			...claims
		},
		JWT_SECRET as string,
		{
			expiresIn: JWT_EXPRIES as string,
		},
	)
	return token
}