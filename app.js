window.document.body.onload = () => {
	const footer = document.querySelector('.footer');
	const date = new Date();
	const height = window.innerHeight + (window.innerHeight*0.03);
	footer.innerHTML = `Copyright &copy; ${date.getFullYear()}`;

	const links = document.querySelectorAll('a');

	[...links].map((link) => {
		link.addEventListener('click', (e) => {
			const target = e.target;

			window.scroll(0, height*(parseInt(target.getAttribute('to'))));
		});
	});
}