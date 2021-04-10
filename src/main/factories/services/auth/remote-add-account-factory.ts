import { RemoteAddAccount } from '@/data/services/auth/remote-add-account'
import { AddAccount } from '@/domain/usecases/auth/add-account'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosAdapter } from '../../http/axios-adapter-factory'

export const makeRemoteAddAccount = (): AddAccount =>
  new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosAdapter())
