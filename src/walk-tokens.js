const walkTokens = (token) => {
	if (token.type === 'text') {
		if (token.text === ':::card') {
			token.text = '<div class="weimob-doc-card">';
		}
		if (token.text === ':::') {
			token.text = '</div>';
		}

	}
};

module.exports = walkTokens
