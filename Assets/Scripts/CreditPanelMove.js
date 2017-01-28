#pragma strict

var self : UI.Scrollbar;
var text : RectTransform;

function Update () {
	text.localPosition.y = (323 - (375 * self.value));
}