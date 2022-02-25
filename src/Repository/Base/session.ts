import type { OauthRedirect } from "dtos/Session"

export interface Session {
  login: () => Promise<OauthRedirect>
}