#pragma strict

var doorhinge : HingeJoint;
var openlimit : int;
var opened : boolean = false;
var locked : boolean = false;
var yRotView : float;

function Awake () {
    doorhinge = GetComponent.<HingeJoint>();
}

function Update () {
    yRotView = transform.eulerAngles.y;
    var yRotation : float = transform.eulerAngles.y;
    if(yRotation <= 10)
    {
        if(opened == false)
        {
            doorhinge.limits.max = 0;
        }
    }
}

function Open () {
    Debug.Log("Door Can Open");
    opened = true;
    if(locked == false)
    {
        doorhinge.limits.max = openlimit;
    }
}

function Close () {
    opened = false;
}