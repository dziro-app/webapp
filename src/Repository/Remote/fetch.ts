export class Fetch {
  base: string

  constructor(url: string) {
    this.base = url
  }

  get(url: string) {
    return fetch(`${this.base}${url}`)
      .then(res => res.json())
  }
}