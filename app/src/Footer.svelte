<footer>
<p class="footer__content">2020 - Personal project by Johan Bijlsma
</p>
<div class="footer__socials">
<a href="https://twitter.com/johanbijlsma"><img src="/icon-social-twitter-white.svg" alt="Twitter Logo"/>
<span class="footer__socials--text"> Johan's Twitter </span></a>
<a href="https://github.com/johanbijlsma"><img src="/Github.svg" alt="Github Logo"/>
<span class="footer__socials--text"> Johan's Github </span></a>
<a href="https://codepen.io/johanbijlsma/"><img src="/codepen.svg" alt="codepen Logo"/>
<span class="footer__socials--text"> Johan's Codepen </span></a>
</div>
</footer>

<style>

footer{
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 3;
        grid-row-end: 3;
        color: #8AC640;
        height: 120px;
        background: #333333;
    }
    .footer__content{
          grid-column-start: 2;
          text-align: center;
    }
    .footer__socials{
        display: flex;
        justify-content: space-evenly;
        max-width: 60vw;
        margin: 10px auto;
        }
    .footer__socials a img{
        height: 30px;
        transition: all 800ms 30ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .footer__socials a{
        height: 30px;
        width: fit-content;
        padding: 10px;
        transition: all 800ms 30ms cubic-bezier(0.165, 0.84, 0.44, 1);
        text-decoration: none;
    }

    .footer__socials a:hover, .footer__socials a:focus{
        background: lightslategrey;
        padding: 10px 30px;
        transition: all 800ms 120ms ease;
        font-weight: 700;
        padding-bottom: 10px;
        box-shadow: 0 3px 0 #8AC640;
    }
    .footer__socials a:hover img, .footer__socials a:focus img{
        transform: scale(1.25);
        padding-right: 12px;
        transition: all 800ms 30ms cubic-bezier(0.165, 0.84, 0.44, 1);

    }
    .footer__socials a span.footer__socials--text{
        transform: translate(0px, -10px);
        display: inline-block;
        color: #8AC640;
    }
    </style>