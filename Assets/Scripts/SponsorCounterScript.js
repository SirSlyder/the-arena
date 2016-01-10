#pragma strict

var uth = "";
var sponsorsu : int = 0;
var sponsorst : int = 0;
var sponsorsh : int = 0;
var sponsors : int = 0;
var addSponsor : boolean = false;

function Update () {
	if(addSponsor == true)
	{
		if(sponsors != 999)
		{
			sponsors += 1;	
		}
		if(sponsorsu != 10)
		{
			sponsorsu += 1;
			if(uth == "u")
			{
				StartCoroutine("Raise");
			}
		}
		else if(sponsorsu == 10)
		{
			sponsorsu = 0;
			if(uth == "u")
			{
				StartCoroutine("Lower");
			}
		}
		addSponsor = false;
	}
	if(sponsorsu >= 10)
	{
		if(uth == "t")
		{
			sponsorst += 1;
			if(sponsorst != 9)
			{
				StartCoroutine("Raise");
			}
			if(sponsorst == 10)
			{
				sponsorst = 0;
				StartCoroutine("Lower");
			}
		}
	}
	if(sponsorst == 10)
	{
		if(uth == "h")
		{
			if(sponsorsh != 9)
			{
				sponsorsh += 1;
				StartCoroutine("Raise");
			}
		}
	}
}

function AddSponsor () {
	if(sponsors != 999)
	{
		sponsors += 1;	
		addSponsor = false;
	}
	if(sponsorsu != 9)
	{
		sponsorsu += 1;
		if(uth == "u")
		{
			StartCoroutine("Raise");
		}
	}
	else if(sponsorsu == 9)
	{
		sponsorsu = 0;
		if(uth == "u")
		{
			StartCoroutine("Lower");
		}
	}
}

function Raise () {
	yield WaitForSeconds(0.1);
	transform.position.y += 0.1;
	yield WaitForSeconds(0.1);
	transform.position.y += 0.1;
	yield WaitForSeconds(0.1);
	transform.position.y += 0.1;
	yield WaitForSeconds(0.1);
	transform.position.y += 0.1;
	yield WaitForSeconds(0.1);
	transform.position.y += 0.1;
}

function Lower () {
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.05);
	transform.position.y -= 0.1;
	yield WaitForSeconds(0.1);
	transform.position.y -= 0.1;

}