class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  get area() {
    return this.radius**2 * Math.PI
  }

  set diameter(d) {
    this.radius = d /2 
  }

  set circumference(c) {
    this.radius = c / (2 * Math.PI)
  }
}