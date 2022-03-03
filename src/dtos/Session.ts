export type OauthRedirect = {
  redirect: string
}

export type User = {
  username: string
  profilePicture: string
}

export type Token = {
  token: string,
  user: User
}