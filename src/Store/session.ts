import { writable } from 'svelte/store';
import type { Token, User } from '../Entities/Session'

type sessionState = {
  token: Token | null,
  user: User | null
}

const defaultState:sessionState = {
  user: null,
  token: null
}

function createSession() {
	const { subscribe, set, update } = writable(defaultState);

	return {
		subscribe,
    setToken: (token: Token) => update( val => {
      const newToken = Object.assign({}, val)
      newToken.token = token
      return newToken
    }),
    setUser: (user: User) => update(val => {
      const newUser = Object.assign({}, val)
      newUser.user = user
      return newUser
    }),
		reset: () => set(defaultState)
	};
}

export const sessionStore = createSession();