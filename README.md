# boardgame

Build a turn-based board game in JavaScript - project6 - frontend path by openclassrooms.com

<h3> Technologies used: javascript, jQuery, css3 and html5 </h3> 

<h4> Step1: Generate the map </h4> 
<ul>
  <li>randomly generate the game map</li>
  <li>place up to 4 weapons on the map (different damage inficted) </li>
  <li>place two players on the map</li>
  </ul>
  
 <h4> Step2: Movements </h4> 
  <ul>
  <li>player can move up to three boxes (hotizontally or vertically) before ending their turn. they obviously can not pass through obstacles directly.</li>
  <li>if a player passes over a box containing a weapon, they leave their current weapon on site and replace it with the new one.</li>

</ul>


<h4> Step3: Fight! </h4> 
<ul>
  <li>if players cross over adjacent squares (horizontally or vertically), a battle begins</li>
  <li>each player attacks in turn</li>
  <li>the damage depends on the player's weapon</li>
  <li>the player can choose to attack or defend against the next shot</li>
  <li>if the player chooses to defend themselves, they sustain 50% less damage than normal</li>
  <li>ss soon as the life points of a player (initially 100) falls to 0, they lose. A message appears and the game is over</li>
</ul>




<h3> play the game - https://dorotanowak1.github.io/boardgame </h3> 
