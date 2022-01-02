# Whack-A-Mole-game

PART 1: LAYOUT IN HTML + CSS

For this first part, you will lay out the game elements using HTML and CSS. Your Whack-A-Mole game should include the following elements:
• A 3x3 grid of holes that the moles will pop out from with spacing between the holes. The amount of spacing between the holes is up to you and can be large if you prefer. Please use the hole.png image from the CourseWorks assignment description to represent an empty hole.
• A green background with RGB values of (1, 137, 63) and a hexadecimal value of #01893f behind the grid of holes. The background does not need to apply to the entire page.
• A game timer display
• A score display
• A “Reset Game” button that will a new round of the game. The button does not
need to be functional for this part of the homework.
You are free to lay out and style the game however you wish, but below is a sample mock-up to give you an idea. The font pictured below is Futura, but you are free to use any font. It is also perfectly fine for you to use a standard-looking “Reset Game” button — without the special styling shown below — in the game that you implement.


PART 2: JAVASCRIPT, EVENTS, AND FEEDBACK

This part of the homework will be about making your Whack-A-Mole game run and be playable as a game. We will be looking for all of the behavior listed below. You can use this list as a guide for how to build the game out step by step.
1. The “Reset Game” button should set the displayed score to zero, set the timer to some number of seconds that you decide (around 60 seconds should work well), and start counting down the timer.
2. When the timer counts down to zero, the game should freeze, leaving the “Reset Game” button as the only functional element in the game. You should visually indicate that the game is over in some way.
3. During the course of around (meaning, while the timer is counting down), moles should appear pseudo-randomly, and at pseudo-random intervals. This means that an observer should not be able to predict when a mole is going to appear, or which hole the mole will appear in. To make the mole appear at a particular hole, you should replace the hole.png image for that hole with the mole.png image. You do not need to animate the mole’s appearance in any way. For this step, once a mole has appeared, it can stay that way for the rest of the round. It should be possible for more than one mole to be present in the playing field.
4. Once a mole has appeared, it should disappear after a random amount of time. A maximum of just a few seconds should be enough, and the minimum should be at least half a second. To make the mole disappear, you can simply revert the appropriate mole.png image to the hole.png image. As with the mole’s appearance, you do not need to animate the mole’s disappearance in any way. Once the mole has disappeared, another mole should be able to randomly appear from the same hole. The image below shows how the game might look mid-round.
5. The moles should be clickable, and clicking the moles should count as “whacking” them with the mallet. This means that when the player clicks a mole, it will immediately disappear (becoming a hole.png image), and its hole should be “live” again, making it possible for another mole to randomly appear there. Empty holes should never respond to click events, and only the “Reset Game” button should respond to click events after the timer reaches zero.
6. Clicking a mole should also boost the player’s score. You may increase the score by either a fixed amount or, optionally, by a varying amount that is greater when the player clicks the mole more quickly.
7. The “ResetGame” button should reset all moles to empty holes as well.
