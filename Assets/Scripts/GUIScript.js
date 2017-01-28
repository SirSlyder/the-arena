#pragma strict

var negateColour : Color;
var positiveColour : Color;
var textExample : RectTransform;
var Transition : Transform;
var clumpTime : float;
var clumping : boolean = false;
var pointsgained : int = 0;
var clonedtext : UI.Text;

function Update () {
	if(clumping)
	{
		clumpTime += Time.deltaTime;
		clonedtext.color.a -= Time.deltaTime;
		if(clonedtext.color.a <= 0){
			pointsgained = 0;
			clumping = false;
			clumpTime = 0;
			Destroy(clonedtext.gameObject);
		}
	}
}

function BoughtItem (price : int) {
	if(clumping == false)
	{
		var clone = Instantiate(textExample, textExample.anchoredPosition, textExample.rotation);
		pointsgained -= price;
		clone.gameObject.active = true;
		if(pointsgained < 0)
		{
			clone.GetComponent(UI.Text).color = negateColour;
		}
		clone.GetComponent(UI.Text).text = "" + price;
		clone.transform.parent = transform;
		clone.GetComponent.<RectTransform>().offsetMin = new Vector2(0, 0);
		clone.GetComponent.<RectTransform>().localPosition.z = 0;
		clone.GetComponent.<RectTransform>().offsetMax = new Vector2(0, 0);
		clonedtext = clone.GetComponent.<UI.Text>();
		clonedtext.GetComponent.<RectTransform>().localScale = new Vector3(1, 1, 1);
		clumping = true;
		clumpTime = 0;
	}
}

function GainPoints (price : int) {
	if(clumping == false)
	{
		pointsgained = 0;
		var clone = Instantiate(textExample, textExample.anchoredPosition, textExample.rotation);
		clonedtext = clone.GetComponent.<UI.Text>();
		clumping = true;
		clonedtext.gameObject.active = true;
		clonedtext.GetComponent(UI.Text).color = positiveColour;
		pointsgained += price;
		clonedtext.transform.parent = transform;
		clonedtext.GetComponent.<RectTransform>().offsetMin = new Vector2(0, 0);
		clonedtext.GetComponent.<RectTransform>().localPosition.z = 0;
		clonedtext.GetComponent.<RectTransform>().offsetMax = new Vector2(0, 0);
		clonedtext.GetComponent.<RectTransform>().localScale = new Vector3(1, 1, 1);
		clonedtext.GetComponent(UI.Text).text = "+" + pointsgained;
		clumpTime = 0;
	}
	else
	{
		clonedtext.color.a = 1;
		pointsgained += price;
		clonedtext.GetComponent(UI.Text).text = "+" + pointsgained;
		clonedtext.gameObject.active = true;
	}
}

function NewRound (round : int) {
	Transition.gameObject.active = true;
	Transition.SendMessage("NewRound", round, SendMessageOptions.DontRequireReceiver);
}