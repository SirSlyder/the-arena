#pragma strict

var counterh : Transform;
var countert : Transform;
var counteru : Transform;
var sponsors : int = 0;
var sponsorsu : int = 0;
var sponsorst : int = 0;
var sponsorsh : int = 0;
var maxsponsortime : float = 200;
var sponsortime : float = 0;
var addSponsor : boolean = false;
var speedTime : boolean = false;
var partrange : int = 6;
var partselected : int = 0;
var partspawner : Transform;
var part01 : Rigidbody;
var part02 : Rigidbody;
var part03 : Rigidbody;
var part04 : Rigidbody;
var part05 : Rigidbody;
var part06 : Rigidbody;
var part07 : Rigidbody;
var randomx : float = 0.0;
var randomz : float = 0.0;

function Update () {
	maxsponsortime = 200 - (0.1 * sponsors);
	sponsortime += Time.deltaTime;
	if(addSponsor == true)
	{
		StartCoroutine("AddSponsor");
		addSponsor = false;
	}
	if(speedTime == true)
	{
		sponsortime += 5;
		speedTime = false;
	}
	if(sponsors > 999)
	{
		sponsors = 999;
	}
	if(sponsortime >= maxsponsortime)
	{
		sponsortime = 0;
		StartCoroutine("SpawnPart");
	}
}

function AddSponsor () {
	if(sponsors != 999)
	{
		sponsors += 1;
		sponsorsu += 1;
		if(sponsorsu == 1)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter01");
		}
		if(sponsorsu == 2)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter12");
		}
		if(sponsorsu == 3)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter23");
		}
		if(sponsorsu == 4)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter34");
		}
		if(sponsorsu == 5)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter45");
		}
		if(sponsorsu == 6)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter56");
		}
		if(sponsorsu == 7)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter67");
		}
		if(sponsorsu == 8)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter78");
		}
		if(sponsorsu == 9)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter89");
		}
		if(sponsorsu == 10)
		{
			counteru.GetComponent.<Animation>().PlayQueued("Counter90");
			sponsorsu = 0;
			sponsorst += 1;
			StartCoroutine("AddTen");
		}
	}
}

function AddTen () {
	if(sponsorst == 1)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter01");
	}
	if(sponsorst == 2)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter12");
	}
	if(sponsorst == 3)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter23");
	}
	if(sponsorst == 4)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter34");
	}
	if(sponsorst == 5)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter45");
	}
	if(sponsorst == 6)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter56");
	}
	if(sponsorst == 7)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter67");
	}
	if(sponsorst == 8)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter78");
	}
	if(sponsorst == 9)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter89");
	}
	if(sponsorst == 10)
	{
		countert.GetComponent.<Animation>().PlayQueued("Counter90");
		sponsorst = 0;
		sponsorsh += 1;
		StartCoroutine("AddHundred");
	}
}

function AddHundred () {
	if(sponsorsh == 1)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter01");
	}
	if(sponsorsh == 2)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter12");
	}
	if(sponsorsh == 3)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter23");
	}
	if(sponsorsh == 4)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter34");
	}
	if(sponsorsh == 5)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter45");
	}
	if(sponsorsh == 6)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter56");
	}
	if(sponsorsh == 7)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter67");
	}
	if(sponsorsh == 8)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter78");
	}
	if(sponsorsh == 9)
	{
		counterh.GetComponent.<Animation>().PlayQueued("Counter89");
	}
}

function SpawnPart () {
	partselected = Random.Range(0, partrange);
	if(partselected == 0)
	{
		Instantiate( part01, partspawner.position, partspawner.rotation );
	}
	if(partselected == 1)
	{
		Instantiate( part02, partspawner.position, partspawner.rotation );
	}
	if(partselected == 2)
	{
		Instantiate( part03, partspawner.position, partspawner.rotation );
	}
	if(partselected == 3)
	{
		Instantiate( part04, partspawner.position, partspawner.rotation );
	}
	if(partselected == 4)
	{
		Instantiate( part05, partspawner.position, partspawner.rotation );
	}
	if(partselected == 5)
	{
		Instantiate( part06, partspawner.position, partspawner.rotation );
	}
	if(partselected == 6)
	{
		Instantiate( part07, partspawner.position, partspawner.rotation );
	}
}