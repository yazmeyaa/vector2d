export class Vector2D {
  private x: number;
  private y: number;

  /**
   * Creates a new vector with coordinates (x, y).
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Gets the x-coordinate.
   * @returns {number} The x-coordinate.
   */
  getX(): number {
    return this.x;
  }

  /**
   * Gets the y-coordinate.
   * @returns {number} The y-coordinate.
   */
  getY(): number {
    return this.y;
  }

  /**
   * Sets the x-coordinate.
   * @param {number} x - The new x-coordinate.
   */
  setX(x: number): void {
    this.x = x;
  }

  /**
   * Sets the y-coordinate.
   * @param {number} y - The new y-coordinate.
   */
  setY(y: number): void {
    this.y = y;
  }

  /**
   * Sets both the x and y coordinates.
   * @param {number} x - The new x-coordinate.
   * @param {number} y - The new y-coordinate.
   */
  set(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  /**
   * Adds another vector to this vector.
   * @param {Vector2D} vector - The vector to add.
   * @returns {Vector2D} The resulting vector.
   */
  add(vector: Vector2D): Vector2D {
    return new Vector2D(this.x + vector.getX(), this.y + vector.getY());
  }

  /**
   * Subtracts another vector from this vector.
   * @param {Vector2D} vector - The vector to subtract.
   * @returns {Vector2D} The resulting vector.
   */
  subtract(vector: Vector2D): Vector2D {
    return new Vector2D(this.x - vector.getX(), this.y - vector.getY());
  }

  /**
   * Multiplies this vector by a scalar.
   * @param {number} scalar - The scalar to multiply by.
   * @returns {Vector2D} The resulting vector.
   */
  multiply(scalar: number): Vector2D {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  /**
   * Divides this vector by a scalar.
   * @param {number} scalar - The scalar to divide by.
   * @returns {Vector2D} The resulting vector.
   */
  divide(scalar: number): Vector2D {
    return new Vector2D(this.x / scalar, this.y / scalar);
  }

  /**
   * Calculates the dot product of this vector and another vector.
   * @param {Vector2D} vector - The other vector.
   * @returns {number} The dot product.
   */
  dot(vector: Vector2D): number {
    return this.x * vector.getX() + this.y * vector.getY();
  }

  /**
   * Calculates the cross product of this vector and another vector.
   * @param {Vector2D} vector - The other vector.
   * @returns {number} The cross product.
   */
  cross(vector: Vector2D): number {
    return this.x * vector.getY() - this.y * vector.getX();
  }

  /**
   * Calculates the magnitude (length) of this vector.
   * @returns {number} The magnitude of the vector.
   */
  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Normalizes this vector (makes it have a magnitude of 1).
   * @returns {Vector2D} The normalized vector.
   */
  normalize(): Vector2D {
    const mag = this.magnitude();
    return new Vector2D(this.x / mag, this.y / mag);
  }

  /**
   * Creates a copy of this vector.
   * @returns {Vector2D} The cloned vector.
   */
  clone(): Vector2D {
    return new Vector2D(this.x, this.y);
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param {Vector2D} vector - The other vector.
   * @returns {boolean} True if the vectors are equal, false otherwise.
   */
  equals(vector: Vector2D): boolean {
    return this.x === vector.getX() && this.y === vector.getY();
  }

  /**
   * Returns a string representation of this vector.
   * @returns {string} The string representation of the vector.
   */
  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  /**
   * Calculates the distance to another vector.
   * @param {Vector2D} vector - The other vector.
   * @returns {number} The distance to the other vector.
   */
  distance(vector: Vector2D): number {
    const dx = this.x - vector.getX();
    const dy = this.y - vector.getY();
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Calculates the angle of this vector relative to the positive X-axis.
   * @returns {number} The angle in radians.
   */
  angle(): number {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Rotates this vector by a given angle.
   * @param {number} angle - The angle to rotate by in radians.
   * @returns {Vector2D} The rotated vector.
   */
  rotate(angle: number): Vector2D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vector2D(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos,
    );
  }

  /**
   * Performs linear interpolation between this vector and another vector.
   * @param {Vector2D} vector - The other vector.
   * @param {number} t - The interpolation factor (between 0 and 1).
   * @returns {Vector2D} The interpolated vector.
   */
  lerp(vector: Vector2D, t: number): Vector2D {
    return new Vector2D(
      this.x + t * (vector.getX() - this.x),
      this.y + t * (vector.getY() - this.y),
    );
  }
}
