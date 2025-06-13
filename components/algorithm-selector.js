// algorithm-selector.js

import { lr_round, prob_round } from "../algorithms.js";

const algorithm_map = {
	lr_round: lr_round,
	prob_round: prob_round
};

export default {
	template: `
		<div class="options">
			<h3>Rounding alrorithm:</h3>
			<label title="Distributes leftover total to values with the largest decimal parts"><input type="radio" value="lr_round" v-model="algorithm">Largest Remainder Rounding</label>
			<label title="Distributes leftover total randomly, giving higher chances to values with larger decimal parts"><input type="radio" value="prob_round" v-model="algorithm">Probabilistic Rounding</label>
		</div>
	`,
	data() {
		return {
			algorithm: "lr_round"
		};
	},
	watch: {
		algorithm: {
			handler(value) {
				this.$emit("update:rounding_function", algorithm_map[value]);
			},
			immediate: true
		}
	}
};
