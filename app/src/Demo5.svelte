<script>
import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
  export let example5Started = false;
  export let showCode5 = false;
  let weather = 'sunny';

  function startAnimation(event) {
    gsap.to("svg", {
      duration: 0.75,
      scale: 1,
      ease: "power4",
      rotate: 360
    });
    example5Started = true;
  }
  function resetAnimation(event) {

    gsap.to(".circle", {
        backgroundColor: "#8ac640",
      duration: 1,
      x: 0,
      scale: 1,
      repeat: 0,
      yoyo: false,
      stagger: {
        amount: 0,
      },
    });
    example5Started = false;
  }

  export let codeSnippetHTML = `
   <div class="circles">
        ...
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        ...
    </div>
    `;

  export let codeSnippetJS = ` gsap.to(".circle", {
      duration: 0.45,
      scale: 0.75,
      backgroundColor: "tomato",
      yoyo: true,
      repeat: 3,
      ease: "elastic.in",
      stagger: {
        amount: 1.5,
        grid: "auto",
        from: "random",
      },
    });`;

	onMount(() => {
    startAnimation()
	});


</script>

<section>

  <h2>GSAP SVG animations</h2>
  <!-- <p>
    Using
    <code>gsap.to</code>
    , with multiple items, and the
    <code>stutter</code>
    attribute
  </p> -->
  <div class="demo__container" id="simpleDemo5">
    <h2 class="demo__title">
Weather Cards
    </h2>

    <div class="show-code-container">
      <label for="show-code-check3">Show Code</label>
      <input id="show-code-check3" type="checkbox" bind:checked={showCode5} />
    </div>
    <div class="demoblock">
    <div class="weather-selector">
   <h2> Set Weather:</h2>
<div class="weather-selector-container">

    <div class="weather-option"><input type="radio" id="sunny" name="weatherType" bind:group={weather} value={'sunny'} on:change={startAnimation}>
    <label for="sunny">Sunny</label></div>

    <div class="weather-option"><input type="radio" id="cloudy" name="weatherType" bind:group={weather} value={'cloudy'} on:change={startAnimation}>
    <label for="cloudy">Cloudy</label></div>

    <div class="weather-option"><input type="radio" id="raining" name="weatherType" bind:group={weather} value={'raining'} on:change={startAnimation}>
    <label for="raining">Raining</label></div>

    <div class="weather-option"><input type="radio" id="snowing" name="weatherType" bind:group={weather} value={'snowing'} on:change={startAnimation}>
    <label for="snowing">Snowing</label></div>

    <div class="weather-option"><input type="radio" id="stormy" name="weatherType" bind:group={weather} value={'stormy'} on:change={startAnimation}>
    <label for="stormy">Stormy</label></div>
   </div>
        </div>
      <!-- {#if !example5Started}
        <button class="button start" on:click={startAnimation}>
          Start &RightAngleBracket;
        </button>
      {:else}
        <button class="button reset" on:click={resetAnimation}>
          Reset &ldca;
        </button>
      {/if} -->

<div class="card {weather}">
    <div class="card__title">{weather}
    </div>
    {#if weather === 'sunny' || ''}
        <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="day">
        <g transform="translate(32,32)">
            <g class="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                <g>
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(45)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(90)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(135)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(180)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(225)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(270)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(315)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
            </g>
            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
        </g>
    </g>
</svg>
    {/if}
{#if weather === 'cloudy'}
    <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="cloudy">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-8), scale(0.6)"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>
{/if}
{#if weather === 'raining'}
 <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="rainy-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fifll="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>
{/if}
{#if weather === 'snowing'}
 <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="snowy-5">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>
{/if}
{#if weather === 'stormy'}
 <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="thunder">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-6), scale(0.6)" />
            </g>
            <g>
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" />
            </g>
            <g transform="translate(-9,28), scale(1.2)">
                <polygon class="am-weather-stroke" fill="orange" stroke="white" stroke-width="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
            </g>
        </g>
    </g>
</svg>
{/if}
</div>



</div>
    {#if showCode5}
      <div class="codeblock" transition:slide="{{ y: 200, duration: 2000 }}">
        HTML
        <pre class="language-html">
          <!-- <code class="language-javascript"> -->
          {codeSnippetHTML}
          <!-- </code> -->
        </pre>
        JavaScript
        <pre class="language-js">
          <!-- <code class="language-javascript"> -->
          {codeSnippetJS}
          <!-- </code> -->
        </pre>
      </div>
    {/if}
  </div>
</section>

<style>
  .demo__container {
    margin: 10px auto;
    width: 80%;
    border: dashed 2px rgba(0, 0, 30, 0.3);
    padding: 20px;
    background-color: #33333375;
    border-radius: 30px;
    position: relative;
  }

  .demo__title {
    color: #8ac640;
    margin: 0 0 6px;
  }

  .circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid white;
    background: #8ac640;
    margin: 5px;
  }
  .circles {
    display: flex;
    padding: 30px 23%;
    flex-wrap: wrap;
    justify-content: space-around;

  }


  button.button {
    border-radius: 10px;
    border: 1px solid darkblue;
    padding: 8px 32px;
    box-shadow: inset 0 0 0 transparent;
  }
  .button.start:hover {
    box-shadow: inset 0 -6px 1px #8ac640;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: #8ac640;
  }

  .button.reset {
    box-shadow: inset 0 -40px 1px rgb(204, 63, 8);
    transition: all 200ms ease-in-out;
    color: #fff;
  }

  .button.reset:hover {
    box-shadow: inset 0 -6px 1px #8ac640;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: #8ac640;
  }

  .show-code-container {
    position: absolute;
    top: 21px;
    right: 0;
    display: inline-block;
    min-width: 120px;
  }

  .show-code-container label {
    display: inline-block;
  }

  .weather-selector-container{
      width: clamp(100%, 50vw, 600px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
      background-color: #8ac640;
  }
  .weather-option{
    padding:   0px 20px;
    overflow: hidden;
  }

  .weather-option label{
    height: 100%;
    padding: 20px 5px;

  }
  input[type="radio"]{
      position: absolute;
      appearance: none;
      visibility: hidden;
  }
 input[type="radio"]:checked + label{
    color: tomato;
    background: white;
    height: 100%;
    padding: 20px 5px;
    font-weight: 700;

  }
.card{
      height: 300px;
    width: 200px;
    background: white;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.6), 0px 0px 5px rgba(0,0,0,0.6);
    padding: 50px 0 0 0;
}
.card__title{
    text-align: center;
    text-shadow: 0px 0px 3px rgba(0,0,0,0.4);
    font-size: clamp(13px, 10vw, 30px);
    text-transform: capitalize;
}

/* .card__icon{
    width:50%;
} */
.card svg{
    transform: scale(0);
}

.card.clear{
    background-image: radial-gradient(whitesmoke, lightblue);

    }
.card.sunny{
    background-image: radial-gradient(whitesmoke, rgb(59, 104, 230));
    }
.card.cloudy{
    background-image: radial-gradient(whitesmoke, slategray);
    }
.card.raining{
    background-image: radial-gradient(whitesmoke, darkslategray);
    }
.card.snowing{
    background-image: radial-gradient(whitesmoke, rgb(109, 119, 148));
    }
.card.stormy{
    background-image: radial-gradient(slategray, darkslategray);
    }
</style>
