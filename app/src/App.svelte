<!-- <script>
	export let title;
    gsap.to(".example", { duration: 1, x: 100 });

</script> -->
<div class="container">
<header>
			<h1>{title}</h1>
            <img src="/logo-man.svg" class="logo" alt="Logo GSAP - superhero" height="100%">
		</header>
		<main>
			<h2 id="Whatis">What's Greensock and what is GSAP?</h2>
			<p>
				Greensock is a JavaScript platform for animating DOM elements, and gives
				the developer a lot more control over the animations.
				<acronym title="Greensock Animation Platform">GSAP</acronym> is the name
				of the platform, which stands for <strong>G</strong>reen<strong>S</strong>ock <strong>A</strong>nimation <strong>P</strong>latform
			</p>
<section>
<h2>A first simple animation</h2>
<p> Here come a first example:</p>
<div class="demo__container" id="simpleDemo">
<h2 class="demo__title">A simple demo: <code>gsap.to</code></h2>
{#if !example1Started}
<button class="button start" on:click={startAnimation} >
	Start &RightAngleBracket;
</button>
{:else}
<button class="button reset" on:click={resetAnimation} >
	Reset &ldca;
</button>
{/if}
<div class="example"></div>
</div>
</section>
		</main>
        <aside>
        <ul>
            <li class="link"><a href="#Whatis"> What's Greensock and what is GSAP? </a></li>
            <li class="link"><a href="#simpleDemo">Simple Demo</a></li>
        </ul>
        </aside>
<footer><p class="footer__content">2020 - Personal project by @johanbijlsma</p>
</footer>


</div>
<style>


.container{
    display: grid;
    grid-template-columns: 40px 40px auto 250px 40px;
    grid-template-rows: auto auto 100px;
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
    aside{
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
        background-color: #8AC640;
        columns: #333333;
    }
    footer{
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 3;
        grid-row-end: 3;
    }
    .footer__content{
          grid-column-start: 2;
          text-align: center;
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
        src: url("/Jost-VariableFont_ital,wght.ttf");
    }

    header, footer {
    color: #8AC640;

        height: 120px;
        background: #333333;
    }
    .demo__container{
        margin: 10px auto;
        width: 80%;
        border: dashed 2px rgba(0,0,30,0.3);
        padding: 20px;
        background-color: #33333375;
        border-radius: 30px;
    }

    .demo__title{
            color: #8AC640;

    }

    .example{
        width: 35px;
        height: 35px;
        background-color: red;
        border-radius: 10px;
        border: 2px solid white;
    }

code{
    font-family: monospace;
    color: #8AC640;
}

button.button{
    border-radius: 10px;
    border: 1px solid darkblue;
    padding: 8px 32px;
    box-shadow: inset 0 0 0 transparent;
}
.button.start:hover{
    box-shadow: inset 0 -6px 1px #8AC640;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: #8AC640;
}

.button.reset{
    box-shadow: inset 0 -40px 1px rgb(204, 63, 8);
    transition: all 200ms ease-in-out;
    color: #fff;
    }

    .button.reset:hover{
    box-shadow: inset 0 -6px 1px #8AC640;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: #8AC640;
}
</style>

<script>
	export let title;
    export let example1Started = false;
	function startAnimation(event) {
    gsap.to('.example', { duration: 1, x: 100 });
    example1Started = true;
	}
	function resetAnimation(event) {
    gsap.to('.example', { duration: 1, x: 0 });
    example1Started = false;
	}

    // console.log(container);

</script>
