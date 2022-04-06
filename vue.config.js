module.exports = {
	transpileDependencies: [
		'vuetify'
	],
	publicPath: process.env.NODE_ENV === 'production'
    ? '/all_vue_practice/'
    : '/'
}
