<script>
	import '../app.css';
</script>

<div class="bg h-screen">
	<slot></slot>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	.bg {
		background-color: black;
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
			repeating-radial-gradient(circle at 0 0, transparent 0, black 150px),
			repeating-linear-gradient(var(--purple), var(--red));
	}
</style>
