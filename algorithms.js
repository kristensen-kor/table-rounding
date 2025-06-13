// algorithms.js

import { sum, range } from "./utils.js";

export function lr_round(xs) {
	let base_array = xs.map(Math.floor);
	const difference = Math.round(sum(xs)) - sum(base_array);
	const remainders = xs.map((num, index) => [num - Math.floor(num), index]).toSorted((a, b) => b[0] - a[0]);

	for (let i = 0; i < difference; i++) {
		base_array[remainders[i][1]]++;
	}

	return base_array;
}

export function prob_round(xs) {
	let rounded_array = xs.map(Math.floor);
	const diff = Math.round(sum(xs)) - sum(rounded_array);

	if (diff > 0) {
		const remainders = xs.map((x, i) => x - rounded_array[i]);
		const sampled_indices = weighted_sample(xs.length, remainders, diff);

		for (const idx of sampled_indices) {
			rounded_array[idx]++;
		}
	}

	return rounded_array;
}

function weighted_sample(n, weights, k) {
	const keys = range(n).map((x, i) => ({ x, key: Math.random() ** (1 / weights[i]) }));
	return keys.toSorted((a, b) => b.key - a.key).slice(0, k).map(e => e.x);
}
