import { AxiosAdapter } from '@/infrastructure/http/axios-adapter'
import { Authentication } from '@/usecases/boundaries/input/auth/authentication'
import { RemoteAuthentication } from '@/usecases/interactors/auth/remote-authentication'

export const makeRemoteAuthentication = (): Authentication => {
  const apiUrl = process.env.API_URL
  const axiosAdapter = new AxiosAdapter()
  return new RemoteAuthentication(apiUrl, axiosAdapter)
}
