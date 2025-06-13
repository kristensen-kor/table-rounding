// main.js

import { createApp } from "vue";
import { sum, lr_round, to_matrix} from "./utils.js";

const app_config = {
	data() {
		return {
			input_text: "",
			sum: null
		};
	},
	methods: {
		read_round_copy() {
			const matrix = this.input_text.replaceAll.split("\n").map(row => row.split("\t").map(Number));
			const rounded_matrix = to_matrix(lr_round(matrix.flat()), matrix.length);

			this.sum = sum(rounded_matrix.map(sum));
			this.input_text = rounded_matrix.map(row => row.join("\t")).join("\n");

			navigator.clipboard.writeText(this.input_text);
		}
	}
};

createApp(app_config).mount("#app");
