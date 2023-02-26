import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = 6;
  expect(result).toBe(expectedResult);
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const numbers = ['1', '2', '3'];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = 6;
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
  // Arrange
  const numbers = [1, 'invalid', 3];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBeNaN();
});
