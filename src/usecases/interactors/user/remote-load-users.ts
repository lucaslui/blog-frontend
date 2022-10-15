import { HttpClient, HttpStatusCode } from '@/usecases/boundaries/output/http/http-client'
import { UserModel } from '@/entities/user'
import { InvalidCredentialsError } from '@/application/errors/invalid-credentials-error'
import { UnexpectedError } from '@/application/errors/unexpected-error'
import { LoadUsers } from '@/usecases/boundaries/input/user/load-users'

export class RemoteLoadUsers implements LoadUsers {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<UserModel[]>
  ) {}

  async loadUsers (page?: number): Promise<UserModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: { page }
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
