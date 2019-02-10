import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll);

let app = new Vue({
	el: '#app',
	data: {
		activeSection: 1,

		defaultDomen: 'example.ru',

		visible: false
	},

	methods: {
		checkDomen(domenName) {
			this.defaultDomen = this.domenName;
			this.visible = true
		}
	}
});
