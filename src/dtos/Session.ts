export type OauthRedirect = {
  redirect: string
}

export type User = {
  username: string
  profile: string
}

export type Token = {
  access_token: string,
  user: User
}