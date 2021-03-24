<script>
	export let bgColor;
	let emoji = ['🤙', '🤟', '👨‍💻', '🚀', '🌊', '🐙', '🐟', '🐳'];
	let favicon = emoji[Math.floor(Math.random()*emoji.length)];
</script>

<svelte:head>
	<link rel='icon' href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{favicon}</text></svg>'>
</svelte:head>

<main>
	<div class='block'>
		<div class='bio'>
			<p>
				Hi! I'm <felix>Felix</felix> and I'm available for hire. Check out my <a href='resume.pdf' target='_blank' title='Download Resume'>resume</a> and let me know if you like what you see!
			</p>
			<p>
				You can also have a look at the <a href='https://github.com/TGIFelix' target='_blank' title='Opens GitHub in a new tab'>code</a> I've published or learn something new on my <a href='https://dev.to/tgifelix' target='_blank' title='Opens Devto in a new tab'>blog</a>!
			</p>
		</div>
		<div class='buttons'>
			<a href='mailto:tgifelix@icloud.com'><img src='mail.svg' alt='mail'></a>&nbsp;
			<a href='mailto:?subject=Hire this guy!&body=https://www.tgifelix.com'><img src='share.svg' alt='share'></a>
		</div>
	</div>
	<div class='bg-color'>
		<p>{bgColor}</p>
	</div>
	<div class='source'>
		<a href='https://github.com/TGIFelix/site' title='view source code on github'><img src='github.svg' alt='source'></a>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&family=Open+Sans&display=swap');
	
	:global(html, body) {
		margin: 0;
		padding: 0;
		background-color: var(--bg-color);
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
		height: 55vh;
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
		bottom: 40px;
		left: 40px;
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

	@media screen 
		and (min-device-width: 320px) 
		and (max-device-width: 480px)
		and (-webkit-min-device-pixel-ratio: 2)
		and (orientation: landscape) {
			.block {
				position: fixed;
				width: 70%;
				height: 55vh;
				background: #FFFFFF;
				border: 8px solid #000000;
				box-shadow: 15px 15px 0px #000000;
			}
			.bio {
				padding: 20px;
				font-size: 14px;
			}
			.buttons {
				bottom: 20px;
				left: 20px;
			}
	}

	@media screen and (min-width: 600px) {
		.block {
			width: 50%;
			height: 55vh;
			border: 10px solid #000000;
			box-shadow: 25px 25px 0px #000000;
		}
		.bio {
			font-size: 18px;
		}
	}

	@media screen and (min-width: 1000px) {
		.bio {
			font-size: 24px;
		}
	}
</style>
