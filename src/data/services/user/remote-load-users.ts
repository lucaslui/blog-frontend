import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client'
import { UserModel } from '@/domain/entities/user'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { LoadUsers } from '@/domain/usecases/user/load-users'

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
