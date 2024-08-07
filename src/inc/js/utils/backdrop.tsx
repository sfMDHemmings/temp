export const removeBackdrop = () => {
	if (typeof document !== `undefined`) {
		const backdrop = document.querySelector('.backdrop');
		backdrop?.remove();
	} else {
		return
	}
};

export const createBackdrop = () => {
	if (typeof document !== `undefined`) {
		const backdrop = document.getElementsByClassName('backdrop');

	if (backdrop.length < 1) {
		const div = document.createElement('div');
		div.classList.add('backdrop');
		document.body.append(div);

		// Close open element if backdrop clicked
		backdrop[0].addEventListener('click', () => {
			if (document.querySelector('.overlay-menu')) document.querySelector('.overlay-menu')?.classList.remove('is-open');
			removeBackdrop();
		});
	}
	} else {
		// Do something different while window and document are not defined on the server
		return 
	}
};