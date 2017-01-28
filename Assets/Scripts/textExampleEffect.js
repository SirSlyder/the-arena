#pragma strict

var xvel : float;
var yvel : float;
var reduceTimer : float;
var parents : Canvas;
var txt : UI.Text;

function Update () {
	transform.Translate((Vector3.up * yvel) * Time.deltaTime);
	transform.Translate((Vector3.right * xvel) * Time.deltaTime);
	reduceTimer += Time.deltaTime;
	if(reduceTimer >= 0.5)
	{
		Destroy(gameObject);
	}
}

function Move () {
	gameObject.active = true;
	transform.parent = parents.transform;
	xvel = Random.Range(0.2, 0.4);
	yvel = Random.Range(-0.015, 0.015);
	txt.color.a = 255;
	GetComponent.<RectTransform>().localScale.x = 1;
	GetComponent.<RectTransform>().localScale.y = 1;
	GetComponent.<RectTransform>().anchoredPosition.x = 80;
	GetComponent.<RectTransform>().anchoredPosition.y = -25;
	GetComponent.<RectTransform>().localPosition.z = 0;
}