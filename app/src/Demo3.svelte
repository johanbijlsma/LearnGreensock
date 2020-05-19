<script>
import { slide } from 'svelte/transition';
  export let example3Started = false;
  export let showCode3 = false;
  function startAnimation(event) {
    gsap.to(".circle", {
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
    });
    example3Started = true;
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
    example3Started = false;
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
</script>

<section>
  <h2>But what about animations with an unknown amount of items</h2>
  <p>
    Using
    <code>gsap.to</code>
    , with multiple items, and the
    <code>stutter</code>
    attribute
  </p>
  <div class="demo__container" id="simpleDemo3">
    <h2 class="demo__title">
      Demo Multiple items:
      <code>gsap.to</code>
    </h2>
    <div class="show-code-container">
      <label for="show-code-check3">Show Code</label>
      <input id="show-code-check3" type="checkbox" bind:checked={showCode3} />
    </div>
    <div class="demoblock">
      {#if !example3Started}
        <button class="button start" on:click={startAnimation}>
          Start &RightAngleBracket;
        </button>
      {:else}
        <button class="button reset" on:click={resetAnimation}>
          Reset &ldca;
        </button>
      {/if}
      <div class="circles">
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
      </div>
    </div>
    {#if showCode3}
      <div class="codeblock" transition:slide="{{ y: 200, duration: 2000 }}">
        HTML
        <pre class="language-html">
          <!-- <code class="language-javascript"> -->
          {codeSnippetHTML}
          <!-- </code> -->
        </pre>
        javaScript
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

  code {
    font-family: monospace;
    color: #8ac640;
  }
  pre ~ code {
    color: white;
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
</style>
