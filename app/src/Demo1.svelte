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

<style>
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
}</style>

    <script>
     export let example1Started = false;
	function startAnimation(event) {
    gsap.to('.example', { duration: 1, x: 100 });
    example1Started = true;
	}
	function resetAnimation(event) {
    gsap.to('.example', { duration: 1, x: 0 });
    example1Started = false;
	}</script>