changelog.addEventListener('click', setChangeLog);


function setChangeLog() {
    body2.innerHTML = `<h1 id="jankey-snake-changelog">Jankey Snake Changelog</h1>
    <h3 id="version-1-0-0">Version 1.0.0</h3>
    <ul>
    <li>Initial Game Files</li>
    <li>Version Text</li>
    <li>Slightly Easier Movement</li>
    </ul>
    <h3 id="version-1-2-0">Version 1.2.0</h3>
    <ul>
    <li>Removed Original index.html File</li>
    <li>Added New index.html File</li>
    <li>Added index.css File</li>
    <li>Added index.js File</li>
    <li>Added Initial Html Setup</li>
    <li>Added Game Screen</li>
    <li>Formatted Game Screen to Appear in Center</li>
    </ul>
    <h3 id="version-1-2-1">Version 1.2.1</h3>
    <ul>
    <li>Created Game Loop</li>
    <li>Added Event Listeners(event listeners work different than the event listeners in version 1.0.0)</li>
    <li>Added Game Variables</li>
    </ul>
    <h3 id="version-1-2-2">Version 1.2.2</h3>
    <ul>
    <li>Created Snake</li>
    <li>Created Apple</li>
    <li>Allowed Snake Movement</li>
    </ul>
    <h3 id="version-1-2-3">Version 1.2.3</h3>
    <ul>
    <li>Created Collision With Apple</li>
    <li>Randomized Apple Movement When Collided With</li>
    <li>Added a Score Function</li>
    <li>Created Snake Tail</li>
    </ul>
    <h3 id="version-1-2-4">Version 1.2.4</h3>
    <ul>
    <li>Made Snake Tail Increase After Eating Apple</li>
    <li>Added Score Text to Game Screen</li>
    <li>Game Over Function</li>
    <li>Fixed Snake&#39;s Ability to Change Into the Direct Opposite Direction and Die</li>
    </ul>
    <h3 id="version-1-2-5">Version 1.2.5</h3>
    <ul>
    <li>Added Collision to Walls</li>
    <li>Added Collision to Snakes Tail</li>
    <li>Made Game Over Run When Snake is Colliding with Walls or Tail</li>
    <li>Changed Apple Spawning to be Random</li>
    </ul>
    <h3 id="version-1-2-6">Version 1.2.6</h3>
    <ul>
    <li>Added mode Object</li>
    <li>Added settings Object</li>
    <li>Added Speed Change Feature</li>
    <li>Fixed Bug Where if Two Directions Were Pressed Too Fast, The Snake Would Walk Into Itself and Die</li>
    <li>Fixed Snake Dying Instantly</li>
    </ul>
    <h3 id="version-1-3-0">Version 1.3.0</h3>
    <ul>
    <li>Added gameVariables.js File</li>
    <li>Added settings.js File</li>
    <li>Added settingFunctions.js File</li>
    <li>Added mode Object into settings Object</li>
    <li>Moved settings Object into settings.js</li>
    <li>Added New JavaScript Files into index.html</li>
    <li>Added setting Function</li>
    <li>Added Variable Changes for Each Mode</li>
    <li>Added Apple to settings Object</li>
    </ul>
    <h3 id="version-1-3-1">Version 1.3.1</h3>
    <ul>
    <li>Changed Variables to Their Values in settings(settings Object)</li>
    <li>Added Buttons for Modes</li>
    <li>Changed Font of Title</li>
    <li>Changed css Formatting and Positioned Elements</li>
    </ul>
    <h3 id="version-1-3-2">Version 1.3.2</h3>
    <ul>
    <li>Re-added Version Text</li>
    <li>Made Mode Buttons Work</li>
    <li>Changed Mode Buttons Font</li>
    </ul>
    <h3 id="version-1-3-3">Version 1.3.3</h3>
    <ul>
    <li>Snake Style Set in Settings now Changes Assigned Variable</li>
    <li>Made setting Function Run at Start of Game</li>
    <li>Added Check For Change in Snake Style</li>
    <li>Added a Pixelated Snake Style</li>
    </ul>
    <h3 id="version-1-3-4">Version 1.3.4</h3>
    <ul>
    <li>Moved setTimeout From Beginning of Draw Function to Near the Start</li>
    <li>Added Invisible True Impossible Button</li>
    <li>Added Ability to Unlock True Impossible Mode</li>
    <li>Added True Impossible Mode Event Listeners</li>
    <li>Set True Impossible Mode if Statement in setting Function</li>
    </ul>
    <h3 id="version-1-3-5">Version 1.3.5</h3>
    <ul>
    <li>Changed Invisible Button to Say &#39;Locked??&#39; and No Longer be Invisible on Startup</li>
    <li>Added Variable to Indicate Whether Player Unlocked True Impossible Mode or Not</li>
    <li>Fixed Not Being Able to Use True Impossible Mode</li>
    <li>Fixed True Impossible Mode Button Not Clicking</li>
    <li>Fixed True Impossible Mode Button Formatting</li>
    </ul>
    <h3 id="version-1-3-6">Version 1.3.6</h3>
    <ul>
    <li>Moved True Impossible Mode Inside Mode Buttons Div</li>
    <li>Added &#39;Locked??&#39; Text to Change to &#39;True Impossible&#39; when True Impossible Mode is Unlocked</li>
    <li>Added Speed Display to Top Left of Game Screen</li>
    <li>Added Game Resetting When Mode is Changed</li>
    <li>Fixed Game Over Not Resetting When Mode is Changed</li>
    </ul>
    <h3 id="version-1-3-7">Version 1.3.7</h3>
    <ul>
    <li>Changed Position of Mode Buttons and Title to be More Friendly to Smaller Screens</li>
    <li>Split html Into 3 Different Columns/Sections</li>
    <li>Changed the Way Color is Applied to the Snake&#39;s Body and Head</li>
    <li>Changed the Tiled Style to Have an Outline Around the Snake, Rather Than Snake Parts Being Separated</li>
    <li>Added Shaking to the Locked Button</li>
    <li>Changed Version Text to Display the Correct Version</li>
    <li>Changed Sizing of Elements to Reflect Screen Size</li>
    <li>Changed True Impossible Mode&#39;s Speed Change Amount from 20 to 30</li>
    </ul>
    
`
}

