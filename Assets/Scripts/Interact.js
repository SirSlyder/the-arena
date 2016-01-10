#pragma strict

var rayLength : int = 2;
private var lookingAt : Transform = null;
var timer : float;

function Start() {
	Debug.Log("Interact Begin");
}

function Update () 
{
	var hit : RaycastHit;
	var fwd = transform.TransformDirection (Vector3.forward);
	
	if (Physics.Raycast(transform.position, fwd, hit, rayLength)) {
		if (hit.transform != lookingAt) {
			if (lookingAt != null) {
				lookingAt.SendMessage("LookAway", SendMessageOptions.DontRequireReceiver);
				lookingAt = null;
			}
			hit.transform.SendMessage("LookAt", SendMessageOptions.DontRequireReceiver);
			lookingAt = hit.transform;
		}
		if (Input.GetKeyUp("e")) {
			hit.transform.SendMessage("Execute", SendMessageOptions.DontRequireReceiver);
		}
		if (Input.GetKey("e")) {
			timer += Time.deltaTime;
			if(timer >= 0.2)
			{
				timer = 0;
				hit.transform.SendMessage("Hold", SendMessageOptions.DontRequireReceiver);
			}
		}
		if (!Input.GetKey("e")) {
			timer = 0;
		}
	}
	else if (lookingAt != null) {
		lookingAt.SendMessage("LookAway", SendMessageOptions.DontRequireReceiver);
		lookingAt = null;
	}
}
