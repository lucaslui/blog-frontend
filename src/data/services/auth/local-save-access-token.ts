import { SetStorage } from '@/data/protocols/cache/set-storage'
import { SaveAccessToken } from '@/domain/usecases/auth/save-access-token'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (
    private readonly setStorage: SetStorage
  ) {}

  save (accessToken: string): void {
    this.setStorage.set('accessToken', { accessToken })
  }
}
