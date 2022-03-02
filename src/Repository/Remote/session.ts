import type { OauthRedirect } from "dtos/Session";
import type { Token, User } from "Entities/Session"
import type {Session} from "../Base/session"
import { Fetch } from "./fetch";

export class SessionRepo extends Fetch implements Session {
  constructor(base: string) {
    super(base)
  }

  login = (): Promise<OauthRedirect> => {
    return this.get('/auth/spotify') as Promise<OauthRedirect>
  };

  getToken = (via: string, code: string): Promise<Token> => {
    return this.post(`/auth/${via}/callback`, {code}) as Promise<Token>
  };


}