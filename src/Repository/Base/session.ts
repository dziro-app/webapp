import type { Token } from "Entities/Session"
import type { OauthRedirect } from "dtos/Session"
export interface Session {
  login: () => Promise<OauthRedirect>
  getToken: (via: string, code: string) => Promise<Token>
}