import { LocalStorageAdapter } from '@/infrastructure/cache/local-storage-adapter'
import { SaveAccessToken } from '@/usecases/boundaries/input/auth/save-access-token'
import { LocalSaveAccessToken } from '@/usecases/interactors/auth/local-save-access-token'

export const makeLocalSaveAccessToken = (): SaveAccessToken => {
  const localStorage = new LocalStorageAdapter()
  return new LocalSaveAccessToken(localStorage)
}
