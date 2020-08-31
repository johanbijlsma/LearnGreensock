<script>
import { slide } from 'svelte/transition';
  export let example4Started = false;
  export let showCode4 = false;
    var tl = gsap.timeline({ defaults: {duration: 0.5, opacity: 1, ease: "elastic"}}  );
  function startAnimation(event) {
    tl.paused(false)
        tl.to(".title", { scale: 1, opacity: 1, x: 10, duration: 1.5, ease: "elastic"})
        .to(".star", {y: 0, ease: "power4.in"})
        .to(".text", {y: 0, opacity: 0.3 ,duration: 1.5, ease: "power4.in"})
        .to(".text", {opacity: 1, ease: "ease.in"})
        .to(".star", {rotation: "-18", scale: "1.2",  ease: "power4.in"})
        .to(".window", {background: "#8686e05d", ease: "power4.out"})
        // .to(".step-2", { scale: 300, duration: 1.5, ease: "back"})
        // .to(".step-3", {rotation: -270})
        // .to(".step-3", { scale: 300, duration: 1.5, ease: "back"});

    example4Started = true;
  }
  function resetAnimation(event) {
    // var tl = gsap.timeline({ defaults: {duration: 1, ease: "elastic", repeat: "=+"} } );
    // tl.to(".class1", {rotation: -270}) //child tweens will inherit the duration and from the parent timeline!
    // .to(".class2", {rotation: -360})
    // .to(".class3", {rotation: -180});
    tl.seek(0.0) && tl.paused(true);
    // tl.pause();

    example4Started = false;
  }

  export let codeSnippetHTML = `
    <div class="box step-1"></div>
    <div class="box step-2"></div>
    <div class="box step-3"></div>
    `;

  export let codeSnippetJS = `
    tl.to(".step-1", {rotation: -270})
      .to(".step-1", { scale: 300, duration: 1.5, ease: "back"})
      .to(".step-2", {rotation: -270})
      .to(".step-2", { scale: 300, duration: 1.5, ease: "back"})
      .to(".step-3", {rotation: -270})
      .to(".step-3", { scale: 300, duration: 1.5, ease: "back"});`;
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
  <div class="demo__container" id="simpleDemo4">
    <h2 class="demo__title">
      Demo Multiple items:
      <code>gsap.timeline</code>
    </h2>
    <div class="show-code-container">
      <label for="show-code-4">Show Code</label>
      <input id="show-code-4" type="checkbox" bind:checked={showCode4} />
    </div>
    <div class="demoblock">
      {#if !example4Started}
        <button class="button start" on:click={startAnimation}>
          Start &RightAngleBracket;
        </button>
      {:else}
        <button class="button reset" on:click={resetAnimation}>
          Reset &ldca;
        </button>
      {/if}
      <div class="window">
    <div class="star step-1">NEW</div>
    <div class="title step-2">A Strong Title</div>
    <div class="text step-3">Now available at a store or supermarket near you 👍</div>
    </div>
    </div>
    {#if showCode4}
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
#simpleDemo4{
    overflow: hidden;
}
  .demo__container {
    margin: 10px auto;
    width: 80%;
    border: dashed 2px rgba(0, 0, 30, 0.3);
    padding: 20px;
    background-color: #33333375;
    border-radius: 30px;
    position: relative;
  }
  .codeblock{
      position: relative;
      z-index: 11;
  }

  .demo__title {
    position: relative;
    color: #8ac640;
    margin: 0 0 6px;
    z-index: 10;
  }

.window{
    min-height: 300px;
    background-image: url(./../karl-kohler-lPhqnp4uw5c-unsplash.jpg);
    background-size: cover;
    background-position: 50% 0%;
    padding: 10px;
}

  .star{
    background-color: yellow;
    position: relative;
    z-index: 0;
    color: rgb(204, 63, 8);
    height: 80px;
    width: 80px;
    fill: yellow;
    clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
    text-align: center;
    line-height: 5rem;
    font-weight: bold;

    transform: translate(0 -200px);
    opacity: 0;
  }

  .title{
      text-transform: uppercase;
      font-size: 3rem;
      text-shadow: 2px 2px 13px #8686e05d;
      text-underline-position: below;
      text-underline-offset: 12px;
      text-decoration: underline;
      text-decoration-color: rgba(134, 134, 224, 0.363);
      opacity: 0;
transform: translate(-500px);
      text-align: center;
  }

  .text{
      width: 100%;
      text-align: center;
      opacity: 0;
      transform: translate(0, 200px);
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
    z-index: 10;
    position: relative;
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
    z-index: 11;
  }

  .show-code-container label {
    display: inline-block;
  }
</style>
