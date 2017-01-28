#pragma strict

var top : GameObject;
var bottom : GameObject;
var front : GameObject;
var back : GameObject;
var left : GameObject;
var right : GameObject;

var top1col : Color;
var top1tex : Texture;
var bottom2col : Color;
var bottom2tex : Texture;
var front3col : Color;
var front3tex : Texture;
var back4col : Color;
var back4tex : Texture;
var left5col : Color;
var left5tex : Texture;
var right6col : Color;
var right6tex : Texture;

function Update () {
	if(top1tex == null)
	{
		top.GetComponent.<MeshRenderer>().material.color = top1col;
	}
	else
	{
		top.GetComponent.<MeshRenderer>().material.mainTexture = top1tex;
		top.GetComponent.<MeshRenderer>().material.mainTextureScale = Vector2(transform.localScale.z / 4, transform.localScale.z / 2);
	}
	if(bottom2tex == null)
	{
		bottom.GetComponent.<MeshRenderer>().material.color = bottom2col;
	}
	else
	{
		bottom.GetComponent.<MeshRenderer>().material.mainTexture = bottom2tex;
		bottom.GetComponent.<MeshRenderer>().material.mainTextureScale = Vector2(transform.localScale.y / 2, transform.localScale.y / 2);
	}
	if(front3tex == null)
	{
		front.GetComponent.<MeshRenderer>().material.color = front3col;
	}
	else
	{
		front.GetComponent.<MeshRenderer>().material.mainTexture = front3tex;
		front.GetComponent.<MeshRenderer>().material.mainTextureScale = Vector2(transform.localScale.x / 2, transform.localScale.x / 2);
	}
	if(back4tex == null)
	{
		back.GetComponent.<MeshRenderer>().material.color = back4col;
	}
	else
	{
		back.GetComponent.<MeshRenderer>().material.mainTexture = back4tex;
		back.GetComponent.<MeshRenderer>().material.mainTextureScale = Vector2(transform.localScale.x / 2, transform.localScale.x / 2);
	}
	if(left5tex == null)
	{
		left.GetComponent.<MeshRenderer>().material.color = left5col;
	}
	else
	{
		left.GetComponent.<MeshRenderer>().material.mainTexture = left5tex;
		left.GetComponent.<MeshRenderer>().material.mainTextureScale = Vector2(transform.localScale.z / 2, transform.localScale.z / 2);
	}
	if(right6tex == null)
	{
		right.GetComponent.<MeshRenderer>().material.color = right6col;
	}
	else
	{
		right.GetComponent.<MeshRenderer>().material.mainTexture = right6tex;
		right.GetComponent.<MeshRenderer>().material.mainTextureScale = Vector2(transform.localScale.z / 2, transform.localScale.z / 2);
	}
}