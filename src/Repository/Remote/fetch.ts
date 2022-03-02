export class Fetch {
  base: string

  constructor(url: string) {
    this.base = url
  }

  get(url: string, options: Object={}) {
    return fetch(`${this.base}${url}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      ...options
    })
      .then(res => res.json())
  }

  post(url: string, payload: Object) {
    return fetch(`${this.base}${url}`, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
  }
}