export interface IVector2D {
  getX(): number;
  getY(): number;
  setX(x: number): void;
  setY(y: number): void;
  set(x: number, y: number): void;
  add(vector: IVector2D): IVector2D;
  subtract(vector: IVector2D): IVector2D;
  multiply(scalar: number): IVector2D;
  divide(scalar: number): IVector2D;
  dot(vector: IVector2D): number;
  cross(vector: IVector2D): number;
  magnitude(): number;
  normalize(): IVector2D;
  clone(): IVector2D;
  equals(vector: IVector2D): boolean;
  toString(): string;
  distance(vector: IVector2D): number;
  angle(): number;
  rotate(angle: number): IVector2D;
}
