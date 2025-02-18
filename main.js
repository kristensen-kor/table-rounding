import { createApp } from "./vue.esm-browser.js";

const sum = xs => xs.reduce((a, b) => a + b, 0);

function lr_round(xs) {
	let base_array = xs.map(Math.floor);

	const difference = Math.round(sum(xs)) - sum(base_array);

	const remainders = xs.map((num, index) => [num - Math.floor(num), index]).toSorted((a, b) => b[0] - a[0]);

	for (let i = 0; i < difference; i++) {
		base_array[remainders[i][1]]++;
	}

	return base_array;
}

function to_matrix(xs, rows) {
	const cols = xs.length / rows;
	return Array.from({ length: rows }, (_, i) => xs.slice(i * cols, (i + 1) * cols));
}

const app_config = {
	data() {
		return {
			input_text: "",
			sum: null
		};
	},
	methods: {
		read_round_copy() {
			this.input_text = this.input_text.replaceAll(",", ".");

			const matrix = this.input_text.split("\n").map(row => row.split("\t").map(Number));
			const rounded_matrix = to_matrix(lr_round(matrix.flat()), matrix.length);

			this.sum = sum(rounded_matrix.map(sum));
			this.input_text = rounded_matrix.map(row => row.join("\t")).join("\n");

			navigator.clipboard.writeText(this.input_text);
		}
	}
};

createApp(app_config).mount("#app");
