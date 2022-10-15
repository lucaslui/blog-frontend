import { SetStorage } from '@/usecases/boundaries/output/cache/set-storage'
import { SaveAccessToken } from '@/usecases/boundaries/input/auth/save-access-token'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (
    private readonly setStorage: SetStorage
  ) {}

  save (accessToken: string): void {
    this.setStorage.set('accessToken', { accessToken })
  }
}
