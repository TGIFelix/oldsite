<main>
	<div class='block'>
		<div class='text'>
			<p>
				Hi! I'm <felix>Felix</felix> and I'm available for hire. Check out my <a href="resume.pdf" target="_blank" title="Download Resume">resume</a> and let me know if you like what you see!
			</p>
			<p>
				You can also have a look at the <a href="https://github.com/TGIFelix" target="_blank">code</a> I've published or learn something new on my <a href="https://dev.to/tgifelix" target="_blank">blog</a>!
			</p>
		</div>
		<div class='buttons'>
			<a href="mailto:tgifelix@icloud.com"><img src="mail.svg" alt="mail"></a>
			<a href="mailto:?subject=Hire this guy!&body=https://www.tgifelix.com"><img src="share.svg" alt="share"></a>
		</div>
	</div>
</main>
<footer>
	<a href="https://github.com/TGIFelix/site"><img src="source.svg" alt="source"></a>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&family=Open+Sans&display=swap');

	:global(html, body) {
		margin: 0;
		padding: 0;
		background-color: #FFEEB0;
		max-height: 99vh;
		font-family: 'JetBrains Mono';
		color: #000000;
	}

	main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
    }

	felix {
		font-style: italic;
	}

	a, a:visited, a:active{
		text-decoration: underline;
		color: #000000;
	}

	a:hover {
		text-decoration: none;
	}

	.block {
		position: absolute;
		width: 60%;
		height: 50vh;
		background: #FFFFFF;
		border: 10px solid #000000;
		box-shadow: 20px 20px 0px #000000;
	}

	.text {
		position: absolute;
		font-size: 28px;
		color: #000000;
		padding: 60px;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		position: absolute;
		bottom: 25px;
		left: 50px;
		/* padding: 0 0 20px 20px; */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 25px;
	}

	@media screen and (max-width: 500px) {
		.block {
		position: absolute;
		width: 80%;
		height: 50vh;
		background: #FFFFFF;
		border: 8px solid #000000;
		box-shadow: 15px 15px 0px #000000;
	}
    p {
      font-size: 16px;
    }
	.text {
		padding: 30px;
	}
  }

  @media screen and (max-width: 800px) {
		.block {
		position: absolute;
		width: 80%;
		height: 70vh;
		background: #FFFFFF;
		border: 8px solid #000000;
		box-shadow: 15px 15px 0px #000000;
	}
    p {
      font-size: 22px;
    }
	.text {
		padding: 30px;
	}
  }

  @media screen and (max-width: 1600px) {
		.block {
		position: absolute;
		width: 80%;
		height: 70vh;
		background: #FFFFFF;
		border: 8px solid #000000;
		box-shadow: 15px 15px 0px #000000;
	}
    p {
      font-size: 22px;
    }
	.text {
		padding: 30px;
	}
  }
  
</style>