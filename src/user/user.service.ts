import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  async getUser() {
    const user = {
      email: 'chukssomzzy@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/chukssomzzy/hng-12-stage-nest',
    }
    return user
  }
}
