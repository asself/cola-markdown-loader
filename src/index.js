const marked = require('./parser');
const renderer = require('./render-card');

module.exports = function (source) {
	this.cacheable && this.cacheable();

	let html = renderer.html(marked(source));

	html = escape(html);

	const loaderSource = `
		import React from 'react';
		const html = unescape(\`${html}\`);
		const MarkDown = () => (
		<div className='weimob-doc-content'>
      <section>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </div>)
    export default MarkDown
	`
	this.callback(null, loaderSource)
}
