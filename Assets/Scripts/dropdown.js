#pragma strict

 class ExtendedAnimation extends System.Object {
     var walkingAnimation : AnimationClip;
     var sprintingAnimation : AnimationClip;
     var sprintingAnimationSpeed : float = 1.5;
     var jumpAnimation : AnimationClip;
     var airJumpAnimation : AnimationClip;
     var hoverIdleAnimation : AnimationClip;
     var hoverWalkAnimation : AnimationClip;
     var hoverWalkAnimationSpeed : float = 1;
     var hoverSprintAnimation : AnimationClip;
     var hoverSprintAnimationSpeed : float = 1;
     var fallingAnimation : AnimationClip;
     var idleAnimation : AnimationClip;
     var blockAnimation : AnimationClip;
     var airBlockAnimation : AnimationClip;
 }
 var test = ExtendedAnimation ();