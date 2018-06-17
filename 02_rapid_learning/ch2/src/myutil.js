let message = 'hello webpack'

export const APP_NAME = 'webpack'

export function hello() {
  console.log(message)
}

export class Figure {
  static getTriangle(base, height) {
    return base * height / 2
  }
}
