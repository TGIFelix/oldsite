<script>
	let bgColor = '#FFEEB0';
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
			<a href="mailto:tgifelix@icloud.com"><img src="mail1.svg" alt="mail"></a>&nbsp;
			<a href="mailto:?subject=Hire this guy!&body=https://www.tgifelix.com"><img src="share1.svg" alt="share"></a>
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
		--color: #FFEEB0;
		--little-padding: 40px;
		--big-padding: 80px;
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

	a {
		text-decoration: underline;
		color: #000000;
	}

	a:hover {
		text-decoration: none;
	}

	.block {
		position: fixed;
		width: 80%;
		height: 50vh;
		background: #FFFFFF;
		border: 8px solid #000000;
		box-shadow: 15px 15px 0px #000000;
	}

	.bio {
		padding: var(--little-padding);
		font-size: 16px;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		position: relative;
		bottom: var(--little-padding);
		left: var(--little-padding);
	}

	.source {
		position: fixed;
		bottom: 20px;
		right: 25px;
	}

	.bg-color {
		position: fixed;
		bottom: 10px;
		left: 25px;
	}
</style>
