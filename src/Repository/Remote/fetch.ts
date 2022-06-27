export class Fetch {
  base: string
  jwtToken: string | null

  constructor(url: string, jwtToken?: string) {
    this.base = url
    if (jwtToken) {
      this.jwtToken = jwtToken
    }
  }

  buildJsonHeader(contentType: string =  'application/json') {
    const headers = {
      'Content-Type': contentType,
    }
    if (this.jwtToken) {
      headers['Authorization'] = `Bearer ${this.jwtToken}`
    }
    return headers
  }

  get(url: string, options: Object={}) {
    return fetch(`${this.base}${url}`, {
      headers: this.buildJsonHeader(),
      ...options
    }).then(res => res.json())
  }

  post(url: string, payload:Object = {}) {
    return fetch(`${this.base}${url}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: this.buildJsonHeader(),
      credentials: "include",
      mode: "cors",
    }).then(res => res.json())
  }

  patch(url: string, payload: Object = {}) {
    return fetch(`${this.base}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: this.buildJsonHeader(),
    }).then(res => res.json())
  }

  remove(url: string) {
    return fetch(`${this.base}${url}`, {
      method: 'DELETE',
      headers: this.buildJsonHeader(),
    }).then(res => res.json())
  }
}