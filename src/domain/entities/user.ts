export type UserModel = {
  id: string
  name: string
  email: string
  profile?: ProfileModel
  createdAt: Date
}

export type ProfileModel = {
  nickname?: string
  occupation?: string
  region?: string
  about?: string
  interests?: string
  contact?: string
  website?: string
}
