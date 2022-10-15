import { RemoteAddAccount } from '@/usecases/interactors/auth/remote-add-account'
import { AddAccount } from '@/usecases/boundaries/input/auth/add-account'
import { AxiosAdapter } from '@/infrastructure/http/axios-adapter'

export const makeRemoteAddAccount = (): AddAccount => {
  const apiUrl = process.env.API_URL
  const axiosAdapter = new AxiosAdapter()
  return new RemoteAddAccount(apiUrl, axiosAdapter)
}
