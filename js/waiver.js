const figures = document.getElementsByTagName('figure');
window.addEventListener('load', (e) => {
	for (const figure of figures) {
		figure.classList.add('one-third');
	}
});

const footer = document.getElementsByTagName('footer')[0];
footer.addEventListener('click', (e) => {
	footer.remove();
});

figures[4].addEventListener('dblclick', (e) => {
	figures[4].style.visibility = 'hidden';
});

const caption = figures[0].getElementsByTagName('figcaption')[0];
let fontCached;
caption.addEventListener('mouseover', (e) => {
	fontCached = caption.style.fontFamily;
	caption.style.fontFamily = 'Cursive';
});
caption.addEventListener('mouseout', (e) => {
	caption.style.fontFamily = fontCached;
});

caption.tabIndex = 1;
caption.addEventListener('focus', (e) => {
	caption.style.fontFamily = 'Cursive';
});
caption.addEventListener('focusout', (e) => {
	caption.style.fontFamily = 'Times';
});