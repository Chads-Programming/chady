export enum Roles {
  ADMIN = 0,
  USER_ROLE = 1,
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  isActive: boolean
  roles: Roles[]
}
