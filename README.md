# Vector2D Library for TypeScript

A comprehensive TypeScript library for 2D vector operations, including addition, subtraction, multiplication, division, normalization, and more. Ideal for game development, physics simulations, and graphical applications.

## Features

- Create and manipulate 2D vectors
- Perform vector arithmetic (addition, subtraction, multiplication, division)
- Calculate dot and cross products
- Normalize vectors
- Calculate magnitude and distance between vectors
- Rotate vectors
- Linear interpolation between vectors

## Installation

You can install the library using npm:

```bash
npm install ts-vector2d
```

## Usage

Here's a quick example of how to use the `Vector2D` class:

```typescript
import { Vector2D } from 'vector2d';

const vector1 = new Vector2D(3, 4);
const vector2 = new Vector2D(1, 2);

// Vector addition
const result = vector1.add(vector2);
console.log(`Result of addition: (${result.getX()}, ${result.getY()})`);

// Vector normalization
const normalized = vector1.normalize();
console.log(`Normalized vector: (${normalized.getX()}, ${normalized.getY()})`);
```

## API Reference

### `Vector2D`

#### Constructor

```typescript
constructor(x: number, y: number)
x - The x-coordinate.
y - The y-coordinate.
```

Methods
- `getX(): number` - Gets the x-coordinate.
- `getY(): number` - Gets the y-coordinate.
- `setX(x: number): void` - Sets the x-coordinate.
- `setY(y: number): void` - Sets the y-coordinate.
- `set(x: number, y: number): void` - Sets both the x and y coordinates.
- `add(vector: Vector2D): Vector2D` - Adds another vector to this vector.
- `subtract(vector: Vector2D): Vector2D` - Subtracts another vector from this vector.
- `multiply(scalar: number): Vector2D` - Multiplies this vector by a scalar.
- `divide(scalar: number): Vector2D` - Divides this vector by a scalar.
- `dot(vector: Vector2D): number` - Calculates the dot product of this vector and another vector.
- `cross(vector: Vector2D): number` - Calculates the cross product of this vector and another vector.
- `magnitude(): number` - Calculates the magnitude (length) of this vector.
- `normalize(): Vector2D` - Normalizes this vector (makes it have a magnitude of 1).
- `clone(): Vector2D` - Creates a copy of this vector.
- `equals(vector: Vector2D): boolean` - Checks if this vector is equal to another vector.
- `toString(): string` - Returns a string representation of this vector.
- `distance(vector: Vector2D): number` - Calculates the distance to another vector.
- `angle(): number` - Calculates the angle of this vector relative to the positive X-axis.
- `rotate(angle: number): Vector2D` - Rotates this vector by a given angle.
- `lerp(vector: Vector2D, t: number): Vector2D` - Performs linear interpolation between this vector and another vector.