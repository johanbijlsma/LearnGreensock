<script>
import { slide } from 'svelte/transition';
  export let example4Started = false;
  export let showCode4 = false;
    var tl = gsap.timeline({ defaults: {duration: 0.5, ease: "elastic", opacity: 0.5}, onComplete: resetAnimation}  );
  function startAnimation(event) {
    tl.paused(false)
    tl.to(".class1", {rotation: -270}) //child tweens will inherit the duration and from the parent timeline!
        .to(".class1", { scale: 300, duration: 1.5, ease: "back"})
        .to(".class2", {rotation: -270})
        .to(".class2", { scale: 300, duration: 1.5, ease: "back"})
        .to(".class3", {rotation: -270})
        .to(".class3", { scale: 300, duration: 1.5, ease: "back"});

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
    <div class="box red class1"></div>
    <div class="box yellow class2"></div>
    <div class="box blue class3"></div>
    `;

  export let codeSnippetJS = ` tl.paused(false)
    tl.to(".class1", {rotation: -270})
        .to(".class1", { scale: 300, duration: 1.5, ease: "back"})
        .to(".class2", {rotation: -270})
        .to(".class2", { scale: 300, duration: 1.5, ease: "back"})
        .to(".class3", {rotation: -270})
        .to(".class3", { scale: 300, duration: 1.5, ease: "back"});`;
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
      <code>gsap.to</code>
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
    <div class="box red class1"></div>
    <div class="box yellow class2"></div>
    <div class="box blue class3"></div>
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
.box {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    border: 2px solid white;
  }
  .box.red {
    background-color: red;
    position: relative;
    z-index: 0;
  }
  .box.yellow {
    background-color: yellow;
    position: relative;
    z-index: 0;
  }
  .box.blue {
    background-color: blue;
    position: relative;
    z-index: 0;
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
