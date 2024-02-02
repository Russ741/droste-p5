# Droste P5

A progression of animated riffs on the [Droste effect](https://en.wikipedia.org/wiki/Droste_effect).

Check it out live [here](https://russ741.github.io/droste-p5/).

# Development Notes

## Vanilla/Single Recursion
Initially, I implemented a "vanilla" Droste effect, where the whole static image is recursively reproduced in a section of itself.

Then I added animation to make the effect more visceral by repeatedly "zooming into" the embedded reproduction.

I experimented with a variety of translation and magnification functions to make the perceived motion "smoother", which helps to conceal the "seam" between loops.

It turns out that the formula for the nth term of a [geometric series](https://en.wikipedia.org/wiki/Geometric_series) works well as a translation function in the single-recursion case;
it counterbalances the nonlinear magnification function (which gives the illusion of steady forward motion) to give the illusion of steady lateral motion.

## Mutual Recursion

I then restructured the code to implement [mutual recursion](https://en.wikipedia.org/wiki/Mutual_recursion) between different segments of the overall image. Added complexity:
* The magnification function needs to be paced for the relative size of each corecursive shape, or it will result in a perceived acceleration/deceleration effect.
  * I haven't implemented it yet, but one approach is to split up the overall "loop time" into slices where the closer two recursive shapes are in size, the less time it takes to translate between them.
* The corecursive shapes may not fall neatly on the curve of a geometric series.
  * My current solution is to have lateral translation implemented as a half-sinusoid, so that the translational velocity when of "reaching" a given shape is zero.
    * This approach still leads to some "jerking"; it'd be nice to substitute it with some sort of multipoint smoothed curve, though I'm not sure how to make sure the initial and terminal velocities match.

# Extensions

Modulo the issues noted above, the current approach to mutual recursion does not limit the number, size, configuration or color of the corecursive shapes.

It would be neat to build a demonstration with three corecursive shapes in a triangle, large and small shapes, randomized configurations, colors.

Animated color gradients could be a really viscerally pleasing effect.
