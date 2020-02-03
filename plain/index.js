import { Hadal } from "./hadal";

let mdDoc = (dir, name) => Hadal.Crate({
	route: dir + '/' + name,

	data: {
		name: name,
		input: ''
	},
})

let doc = mdDoc('some', 'd1')

new Vue({
	el: '#editor',

	data: doc.data,

	computed: {
		compiledMarkdown: function () {
			return marked(doc.data.input, { sanitize: true })
		}
	},

	methods: {
		update: Hadal.debounce(function (e) {
			doc.data.input = e.target.value
		}, 150)
	}
})