export enum Roles {
	ADMIN,
	USER_ROLE
}


export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	isActive: boolean;
	roles: Roles[];
}
