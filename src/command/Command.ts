import Point from './Point'

export default interface Command {
  execute(point: Point):Point
}

export class MoveUpCommand implements Command {
  execute(point: Point): Point {
    let newPoint: Point = {
      x: point.x,
      y: point.y + 1
    }
    return newPoint
  }
}

export class MoveDownCommand implements Command {
  execute(point: Point): Point {
    let newPoint: Point = {
      x: point.x,
      y: point.y - 1
    }
    return newPoint
  }
}