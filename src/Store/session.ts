import { writable } from 'svelte/store';
import type { Token, User } from '../dtos/Session'

type sessionState = {
  token: string | null,
  user: User | null
}

const defaultState:sessionState = {
  token: null,
  user: null
}

function createSession() {
	const { subscribe, set, update } = writable(defaultState);

	return {
		subscribe,
    setToken: (token: string) => update( val => {
      const newToken = Object.assign({}, val)
      newToken.token = token
      return newToken
    }),
    setUser: (user: User) => update(val => {
      const newUser = Object.assign({}, val)
      newUser.user = user
      console.log(newUser)
      return newUser
    }),
		reset: () => set(defaultState)
	};
}

export const sessionStore = createSession();