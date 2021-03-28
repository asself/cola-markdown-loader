const marked = require('marked');
const walkTokens = require('./walk-tokens')

marked.use({ walkTokens });

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	xhtml: true,
});

marked.use({
	walkTokens
})

module.exports = marked
