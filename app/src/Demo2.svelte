<section>
<h2>And a second simple animation</h2>
<p>Again using <code>gsap.to</code>, but now with multiple items</p>
<div class="demo__container" id="simpleDemo2">
<h2 class="demo__title">Demo Multiple items: <code>gsap.to</code></h2>
{#if !example2Started}
<button class="button start" on:click={startAnimation} >
	Start &RightAngleBracket;
</button>
{:else}
<button class="button reset" on:click={resetAnimation} >
	Reset &ldca;
</button>
{/if}
<div class="box red"></div>
<div class="box yellow"></div>
<div class="box blue"></div>

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

    .box{
        width: 35px;
        height: 35px;
        border-radius: 10px;
        border: 2px solid white;
    }
    .box.red{
        background-color: red;
    }
    .box.yellow{
        background-color: yellow;
    }
    .box.blue{
        background-color: blue;
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
     export let example2Started = false;
	function startAnimation(event) {
    gsap.to('.red', { duration: 1, x: 100 });
    gsap.to('.yellow', { duration: 1, delay: 1, x: 700, rotate: 720 });
    gsap.to('.blue', { duration: 1, delay: 2, scale: 2 });
    example2Started = true;
	}
	function resetAnimation(event) {
    gsap.to('.box', { duration: 1, x: 0, scale: 1, rotate: 0 });
    example2Started = false;
	}</script>