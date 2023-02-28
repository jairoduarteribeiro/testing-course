import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a numeric text to a number', () => {
  // Arrange
  const number = '3';

  // Act
  const result = transformToNumber(number);

  // Assert
  expect(result).toBeTypeOf('number');
  expect(result).toBe(3);
});

it('should yield NaN when trying to transform a non-numeric value', () => {
  // Arrange
  const number1 = 'invalid';
  const number2 = {};

  // Act
  const result1 = transformToNumber(number1);
  const result2 = transformToNumber(number2);

  // Assert
  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
});
