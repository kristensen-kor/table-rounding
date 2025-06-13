// main.js

import { createApp } from "vue";
import { sum, to_matrix, lr_round, prob_round } from "./utils.js";

const algorithm_map = {
	lr_round: lr_round,
	prob_round: prob_round
};

const app_config = {
	data() {
		return {
			input_text: "",
			algorithm: "lr_round",
			sum: null
		};
	},
	computed: {
		rounding_function() {
			return algorithm_map[this.algorithm];
		}
	},
	methods: {
		read_round_copy() {
			const matrix = this.input_text.replaceAll(",", ".").split("\n").map(row => row.split("\t").map(Number));
			const rounded_matrix = to_matrix(this.rounding_function(matrix.flat()), matrix.length);

			this.sum = sum(rounded_matrix.map(sum));
			this.input_text = rounded_matrix.map(row => row.join("\t")).join("\n");

			navigator.clipboard.writeText(this.input_text);
		}
	}
};

createApp(app_config).mount("#app");
