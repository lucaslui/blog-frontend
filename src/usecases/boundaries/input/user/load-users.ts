import { UserModel } from '@/entities/user'

export interface LoadUsers {
  loadUsers: (page?: number) => Promise<UserModel[]>
}
