document.addEventListener('DOMContentLoaded', function() {
	const animatedElements = document.querySelectorAll('.animated-element');

	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}

	function handleScroll() {
		animatedElements.forEach(function(element) {
			if (isInViewport(element)) {
				element.classList.add('animated');
			}
		});
	}

	window.addEventListener('scroll', handleScroll);
	handleScroll();
});