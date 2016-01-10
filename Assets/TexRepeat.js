#pragma strict

function Update () {
	transform.GetComponent.<Renderer>().material.mainTextureScale = new Vector2(transform.localScale.x , transform.localScale.y );
}