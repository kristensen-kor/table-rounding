// main.js

import { createApp } from "vue";
import { sum, to_matrix } from "./utils.js";
import AlgorithmSelector from "./components/algorithm-selector.js";

const app_config = {
	components: {
		"algorithm-selector": AlgorithmSelector
	},
	data() {
		return {
			input_text: "",
			rounding_function: null,
			sum: null
		};
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
