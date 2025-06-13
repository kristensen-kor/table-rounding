// utils.js

export const sum = xs => xs.reduce((a, b) => a + b, 0);

export function to_matrix(xs, rows) {
	const cols = xs.length / rows;
	return Array.from({ length: rows }, (_, i) => xs.slice(i * cols, (i + 1) * cols));
}

export function lr_round(xs) {
	let base_array = xs.map(Math.floor);

	const difference = Math.round(sum(xs)) - sum(base_array);

	const remainders = xs.map((num, index) => [num - Math.floor(num), index]).toSorted((a, b) => b[0] - a[0]);

	for (let i = 0; i < difference; i++) {
		base_array[remainders[i][1]]++;
	}

	return base_array;
}
