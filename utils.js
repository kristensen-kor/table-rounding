// utils.js

export const range = n => Array.from({ length: n }, (_, i) => i);
export const sum = xs => xs.reduce((a, b) => a + b, 0);

export function to_matrix(xs, rows) {
	const cols = xs.length / rows;
	return Array.from({ length: rows }, (_, i) => xs.slice(i * cols, (i + 1) * cols));
}
