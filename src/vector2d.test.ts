import { Vector2D } from "./vector2d";

describe("Vector2D", () => {
  test("constructor initializes correctly", () => {
    const vector = new Vector2D(3, 4);
    expect(vector.getX()).toBe(3);
    expect(vector.getY()).toBe(4);
  });

  test("setX and setY update coordinates", () => {
    const vector = new Vector2D(0, 0);
    vector.setX(5);
    vector.setY(-3);
    expect(vector.getX()).toBe(5);
    expect(vector.getY()).toBe(-3);
  });

  test("set updates both coordinates", () => {
    const vector = new Vector2D(0, 0);
    vector.set(2, 3);
    expect(vector.getX()).toBe(2);
    expect(vector.getY()).toBe(3);
  });

  test("add returns correct vector", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(3, 4);
    const result = vector1.add(vector2);
    expect(result.getX()).toBe(4);
    expect(result.getY()).toBe(6);
  });

  test("subtract returns correct vector", () => {
    const vector1 = new Vector2D(5, 7);
    const vector2 = new Vector2D(2, 3);
    const result = vector1.subtract(vector2);
    expect(result.getX()).toBe(3);
    expect(result.getY()).toBe(4);
  });

  test("multiply scales vector correctly", () => {
    const vector = new Vector2D(2, 3);
    const result = vector.multiply(2);
    expect(result.getX()).toBe(4);
    expect(result.getY()).toBe(6);
  });

  test("divide scales vector correctly", () => {
    const vector = new Vector2D(4, 8);
    const result = vector.divide(2);
    expect(result.getX()).toBe(2);
    expect(result.getY()).toBe(4);
  });

  test("dot product is correct", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(3, 4);
    expect(vector1.dot(vector2)).toBe(11);
  });

  test("cross product is correct", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(3, 4);
    expect(vector1.cross(vector2)).toBe(-2);
  });

  test("magnitude is correct", () => {
    const vector = new Vector2D(3, 4);
    expect(vector.magnitude()).toBe(5);
  });

  test("normalize returns unit vector", () => {
    const vector = new Vector2D(3, 4);
    const result = vector.normalize();
    expect(result.magnitude()).toBeCloseTo(1);
    expect(result.getX()).toBeCloseTo(0.6);
    expect(result.getY()).toBeCloseTo(0.8);
  });

  test("clone creates a copy of the vector", () => {
    const vector = new Vector2D(1, 2);
    const clone = vector.clone();
    expect(clone.getX()).toBe(1);
    expect(clone.getY()).toBe(2);
    expect(clone).not.toBe(vector);
  });

  test("equals returns true for identical vectors", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(1, 2);
    expect(vector1.equals(vector2)).toBe(true);
  });

  test("equals returns false for different vectors", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(2, 3);
    expect(vector1.equals(vector2)).toBe(false);
  });

  test("toString returns correct string representation", () => {
    const vector = new Vector2D(1, 2);
    expect(vector.toString()).toBe("(1, 2)");
  });

  test("distance calculates correctly", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(4, 6);
    expect(vector1.distance(vector2)).toBe(5);
  });

  test("angle calculates correctly", () => {
    const vector = new Vector2D(1, 1);
    expect(vector.angle()).toBeCloseTo(Math.PI / 4);
  });

  test("rotate rotates vector correctly", () => {
    const vector = new Vector2D(1, 0);
    const result = vector.rotate(Math.PI / 2);
    expect(result.getX()).toBeCloseTo(0);
    expect(result.getY()).toBeCloseTo(1);
  });

  test('lerp interpolates correctly', () => {
    const vector1 = new Vector2D(0, 0);
    const vector2 = new Vector2D(10, 10);
    const result = vector1.lerp(vector2, 0.5);
    expect(result.getX()).toBe(5);
    expect(result.getY()).toBe(5);
});
});
