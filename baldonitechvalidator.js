/**
 * BaldonitechMath - Basic Math Utilities
 * Author: Baldonitech
 * License: Custom
 */

const BaldonitechMath = {
    /**
     * Calculates the average of an array of numbers.
     * @param {number[]} numbers - Array of numbers.
     * @returns {number} - The average value, or 0 if invalid.
     */
    average(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, val) => acc + val, 0);
        return sum / numbers.length;
    },

    /**
     * Returns the maximum number from an array.
     * @param {number[]} numbers - Array of numbers.
     * @returns {number} - The maximum number, or 0 if invalid.
     */
    max(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) return 0;
        return Math.max(...numbers);
    },

    /**
     * Returns the minimum number from an array.
     * @param {number[]} numbers - Array of numbers.
     * @returns {number} - The minimum number, or 0 if invalid.
     */
    min(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) return 0;
        return Math.min(...numbers);
    }
};

// Example usage:
// console.log(BaldonitechMath.average([10, 20, 30])); // Output: 20
// console.log(BaldonitechMath.max([5, 2, 9, 1]));     // Output: 9
// console.log(BaldonitechMath.min([5, 2, 9, 1]));     // Output: 1

module.exports = BaldonitechMath;
