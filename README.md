# Droste P5

A progression of animated riffs on the [Droste effect](https://en.wikipedia.org/wiki/Droste_effect).

Check it out live [here](https://russ741.github.io/droste-p5/).

# Development notes

Initially, I implemented a "vanilla" Droste effect, where the whole static image is recursively reproduced in a section of itself.
Then I added animation to make the effect more visceral by repeatedly "zooming into" the embedded reproduction.
I experimented with a variety of translation and magnification functions to make the perceived motion "smoother", which helps to conceal the "seam" between loops.
It turns out that the formula for the nth term of a [geometric series](https://en.wikipedia.org/wiki/Geometric_series) works well as a translation function in the single-recursion case;
it counterbalances the nonlinear magnification function (which gives the illusion of steady forward motion) to give the illusion of steady lateral motion.
