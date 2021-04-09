import { RemoteAuthentication } from '@/data/services/auth/remote-authentication'
import { Authentication } from '@/domain/usecases/auth/authentication'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosAdapter } from '../../http/axios-adapter-factory'

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApiUrl('/login'), makeAxiosAdapter())
