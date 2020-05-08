<script>
	export let title;
</script>

<header>
			<h1>{title}</h1>
		</header>
		<main>
			<h2>What's Greensock and what is GSAP?</h2>
			<p>
				Greensock is a JavaScript platform for animating DOM elements, and gives
				the developer a lot more control over the animations.
				<acronym title="Greensock Animation Platform">GSAP</acronym> is the name
				of the platform, which stands for <strong>G</strong>reen<strong>S</strong>ock <strong>A</strong>nimation <strong>P</strong>latform
			</p>
		</main>



<style>



	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
        background-color: lightslategrey;
        color: whitesmoke;
	}

    header{
        margin: 0;
        padding: 20px;
    }
	h1 {
    color: limegreen;
        margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

    * {
	box-sizing: border-box;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    header {
        position: sticky;
        height: 120px;
        background: #333333;
    }

</style>