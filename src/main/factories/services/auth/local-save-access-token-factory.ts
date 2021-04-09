import { LocalSaveAccessToken } from '@/data/services/auth/local-save-access-token'
import { SaveAccessToken } from '@/domain/usecases/auth/save-access-token'
import { makeLocalStorageAdapter } from '../../cache/local-storage-adapter-factory'

export const makeLocalSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
