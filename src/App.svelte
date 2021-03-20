<script>
	let bgColor = '#FED7FC';
</script>

<main>
	<div class='block'>
		<div class='bio'>
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
	<div class='bg-color'>
		<p>{bgColor}</p>
	</div>
	<div class='source'>
		<a href="https://github.com/TGIFelix/site"><img src="github.svg" alt="source"></a>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&family=Open+Sans&display=swap');

	:root {
		--color: #FED7FC;
	}
	
	:global(html, body) {
		margin: 0;
		padding: 0;
		background-color: var(--color);
		font-family: 'JetBrains Mono';
		color: #000000;
		overflow-x: hidden;
	}

	main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
		min-height: 100%;
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
		width: 80%;
		height: 50vh;
		background: #FFFFFF;
		border: 8px solid #000000;
		box-shadow: 15px 15px 0px #000000;
	}

	.bio {
		padding: 40px;
		font-size: 16px;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		position: absolute;
		bottom: 15px;
		left: 30px;
	}

	.source {
		position: absolute;
		bottom: 20px;
		right: 25px;
	}

	.bg-color {
		position: absolute;
		bottom: 10px;
		left: 25px;
	}

	@media screen and (min-width: 600px) {
		.block {
		width: 60%;
		height: 60vh;
		background: #FFFFFF;
		border: 10px solid #000000;
		box-shadow: 25px 25px 0px #000000;
	}
    	.bio {
      		font-size: 28px;
	  		padding: 50px;
    }
  }

  /* @media screen and (min-width: 1024px) {
		.block {
		width: 60%;
		height: 60vh;
		background: #FFFFFF;
		border: 10px solid #000000;
		box-shadow: 25px 25px 0px #000000;
	}
    .bio {
      font-size: 28px;
	  padding: 50px;
    }
	footer {
		padding: 25px;
	}
  } */
</style>
