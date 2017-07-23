export default class Pizza {
  type: string
  status: string

  constructor(type: string) {
    this.type = type
    this.status = 'no'
  }

  prepare(): string {
    this.status = 'preparing'
    return 'prepare'
  }

  bake(): string {
    this.status = 'baking'
    return 'bake'
  }

  out(): string {
    this.status = 'outing'
    return 'out'
  }

  cut(): string {
    this.status = 'cuting'
    return 'cut'
  }

  box(): string {
    this.status = 'boxing'
    return 'box'
  }
}