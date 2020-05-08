<script>
	export let title;
</script>
<div class="container">
<header>
			<h1>{title}</h1>
            <img src="build/logo-man.svg" class="logo" alt="Logo GSAP - superhero" height="100%">
		</header>
		<main>
			<h2>What's Greensock and what is GSAP?</h2>
			<p>
				Greensock is a JavaScript platform for animating DOM elements, and gives
				the developer a lot more control over the animations.
				<acronym title="Greensock Animation Platform">GSAP</acronym> is the name
				of the platform, which stands for <strong>G</strong>reen<strong>S</strong>ock <strong>A</strong>nimation <strong>P</strong>latform
			</p>
<section>
<h2>A first simple animation</h2>
<p> Here come a first example:</p></section>
		</main>
<footer>blabla</footer>


</div>
<style>


.container{
    display: grid;
    grid-template-columns: 40px 250px auto 250px 40px;
    grid-template-rows: 25%  auto 100px;
}
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
        background-color: lightslategrey;
        color: whitesmoke;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 2;
        height: auto;
	}

    header{
        margin: 0;
        padding: 20px;
        display: grid;
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 1;
    }
	h1 {
        margin: 0;
	}
    img.logo{
        grid-column-start: 4;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 1;
    }
    footer{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 3;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

    * {
	box-sizing: border-box;
	font-family: 'Jost', Verdana, sans-serif;
    }

    @font-face {
        font-family: Jost;
        src: url("/build/Jost-VariableFont_ital,wght.ttf");
    }

    header, footer {
    color: #8AC640;

        height: 120px;
        background: #333333;
    }

</style>