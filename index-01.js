document.getElementById('info').addEventListener('click', setInfo);


function setInfo() {
    body2.innerHTML = `
    <h1 id="jankey-snake">Jankey Snake</h1>
<p>Just a normal version of Snake that might be a little bit <del>Janky</del> Jankey.</p>
<p>Jankey Snake Github available here --&gt; <a href="https://github.com/PotatoNick26/Jankey-Snake">https://github.com/PotatoNick26/Jankey-Snake</a></p>
<h2 id="game-preview">Game Preview</h2>
<p><img src="images/previewImage.gif" alt="Gif of Jankey Snake Being Played"></p>
<h2 id="objective">Objective</h2>
<p>The objective of Snake is to get as large as you can. You do this by eating apples, spread along the map. Once you have filled up the entire screen, you essentially win.</p>
<h2 id="features">Features</h2>
<p>Jankey Snake as of version 1.0.0 has 6 modes, five of which will be available when you first start the game.
These modes are:</p>
<ul>
<li>Easy Mode</li>
<li>Normal Mode</li>
<li>Hard Mode</li>
<li>Impossible Mode</li>
<li>Same Speed Mode</li>
<li>True Impossible Mode</li>
</ul>
<p>In the top left corner of the game, there will be a score counter. Every time you eat an apple, your score will increase.</p>
<p>Jankey Snake also includes speed changes. A speed change will happen every time your score hits a multiple of 5. A speed change will add or subtract a certain number from your overall speed, in turn making the game run faster or slower.</p>
<h2 id="modes">Modes</h2>
<h3 id="easy-mode-">Easy Mode:</h3>
<p>In easy mode the initial speed will be set to 1 and every time you obtain a speed change &#39;0.5&#39; will be added to the speed.</p>
<h3 id="normal-mode-">Normal Mode:</h3>
<p>This is the default mode for Jankey Snake. The initial speed is 1. When you obtain a speed change &#39;1&#39; will be added to your overall speed.</p>
<h3 id="hard-mode-">Hard Mode:</h3>
<p>Starting speed will be set to 1 and every time you get a speed change &#39;3&#39; will be added to the speed.</p>
<h3 id="impossible-mode-">Impossible Mode:</h3>
<p>When you begin impossible mode the initial speed will be set to 10. For your first speed change &#39;10&#39; will be added to the overall speed. Every speed change will be half of the last speed change (first change = 10, second change = 5, ect...). If you manage to get a score of 20 in this mode, something special might happen!</p>
<h3 id="same-speed-mode-">Same Speed Mode:</h3>
<p>Same Speed Mode is for people that liked how the original version of Jankey Snake worked (version 1.0.0). The starting speed will be set to 10 and no speed changes will occur in this mode.</p>
<h3 id="true-impossible-mode-">True Impossible Mode:</h3>
<p>If you manage to obtain a score of 20 in Impossible Mode, you will be allowed to play this mode. This is the HARDEST mode in all of Jankey Snake and no-one has ever obtained a score of 30 in this mode. Try if you can!</p>
<h2 id="planned-changes-bug-fixes">Planned Changes / Bug Fixes</h2>
<ul>
<li>[x] Add different modes.</li>
<li>[ ] Fix apples spawning inside of player.</li>
<li>[ ] Add a custom mode.</li>
<li>[x] Fix snake being able to turn inside of itself.</li>
<li>[x] Add true impossible mode.</li>
<li>[ ] Add a settings panel.</li>
<li>[ ] Add an option to teleport when snake hits border.</li>
<li>[ ] Add an option to change style and color of snake and apple.</li>
<li>[ ] Add a way to go back to version 1.0.0 of Jankey Snake.</li>
<li>[ ] Add option to change speed and speed change amount.</li>
<li>[ ] Add a way to restart the game without reloading the page or changing modes.</li>
<li>[ ] Make keys more reactive to feel smoother.</li>
<li>[ ] Add visual effects and an option to disable/enable them.</li>
<li>[ ] Add Sound and a volume option.</li>
<li>[ ] Add option to change the number of apples that spawn.</li>
</ul>
`
}


document.onload = function() {
    setInfo();
}