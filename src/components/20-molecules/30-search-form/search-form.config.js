module.exports = {
	title: 'Search Form',
	status: 'wip',
	context: {
		standAlone: false,
		name: 's',
		label: 'search',
		submitLabel: 'submit search'
	},
	variants: [
		{
			name: 'Inverse',
			label: 'Inverse',
			context: {
				modifier: 'inverse',
				bodyClass: 'has-blue-700-background-color'
			}
		},
		{
			name: 'Home',
			label: 'Home',
			context: {
				modifier: 'inverse',
				placeholder: 'Search resource name, publisher, or topic…',
				bodyClass: 'has-blue-400-background-color home home__search'
			}
		}
	]
};
