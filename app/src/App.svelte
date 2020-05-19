<script>
  import Footer from "./Footer.svelte";
  import Demo1 from "./Demo1.svelte";
  import Demo2 from "./Demo2.svelte";
  import Demo3 from "./Demo3.svelte";
  export let title;

  // console.log(container);
</script>

<div class="container">
  <header>
    <h1>{title}</h1>
    <img
      src="/logo-man.svg"
      class="logo"
      alt="Logo GSAP - superhero"
      height="100%"
    />
  </header>
  <main>
    <h2 id="Whatis">What's Greensock and what is GSAP?</h2>
    <p>
      Greensock is a JavaScript platform for animating DOM elements, and gives
      the developer a lot more control over the animations.
      <acronym title="Greensock Animation Platform">GSAP</acronym>
      is the name of the platform, which stands for <strong>G</strong>reen <strong>S</strong>ock <strong>A</strong>nimation <strong>P</strong>latform
    </p>

    <Demo1 />
    <Demo2 />
    <Demo3 />
  </main>
  <aside>
    <ul class="content">
      <li class="link">
        <a href="#Whatis">What's Greensock and what is GSAP?</a>
      </li>
      <li class="link">
        <a href="#simpleDemo">Simple Demo</a>
      </li>
      <li class="link">
        <a href="#simpleDemo2">Demo with multiple items</a>
      </li>
    </ul>
  </aside>
  <Footer />

</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 40px 40px 1fr 250px 40px;
    grid-template-rows: auto 1fr 100px;
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

  header {
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
  img.logo {
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  aside {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: #8ac640;
    columns: #333333;
  }

  aside .content {
    position: sticky;
    top: 100px;
    list-style: none outside;
    padding-inline-start: 10px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  * {
    box-sizing: border-box;
    font-family: "Jost", Verdana, sans-serif;
  }

  @font-face {
    font-family: Jost;
    src: url("/Jost-VariableFont_ital,wght.ttf");
  }

  header {
    color: #8ac640;

    height: 120px;
    background: #333333;
  }
</style>
