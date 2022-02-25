import type { OauthRedirect } from "dtos/Session";
import type {Session} from "../Base/session"
import { Fetch } from "./fetch";

export class SessionRepo extends Fetch implements Session {
  constructor(base: string) {
    super(base)
  }

  login = (): Promise<OauthRedirect> => {
    return this.get('/auth/spotify') as Promise<OauthRedirect>
  };
}