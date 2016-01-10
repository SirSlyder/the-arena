/*
DragRigidbodyUp.cs -Updated 19.8.2015 - wirted by ThunderWire Games * Script for Drag, Drop & Throw Objects and Draggable Door
*/

using UnityEngine;
using System.Collections;
using System.Collections.Generic;

	[System.Serializable]
	public class GrabObjectClass{
		public string m_ObjectsTag = "Interact"; 
		public float m_PickupRange = 3f; 
		public float m_ThrowStrength = 50f;
		public float m_distance = 3f;
		public float m_maxDistanceGrab = 4f;
	}
	
	[System.Serializable]
	public class DoorGrabClass{
		public string m_DoorsTag = "Door"; 
		public float m_DoorPickupRange = 2f;
		public float m_DoorThrow = 10f;
		public float m_DoorDistance = 2f;
		public float m_DoorMaxGrab = 3f;
	}

public class DragRigidbodyV2 : MonoBehaviour {

	public GameObject playerCam;
	
	public string GrabButton = "Grab";
	public string ThrowButton = "Throw";
	public GrabObjectClass ObjectGrab = new GrabObjectClass();
	public DoorGrabClass DoorGrab = new DoorGrabClass();
	
	private float PickupRange = 3f;
	private float ThrowStrength = 50f;
	private float distance = 3f;
	private float maxDistanceGrab = 4f;
	
	private Ray playerAim;
	private GameObject objectHeld;
	private bool isObjectHeld;
	
	void Start () {
		isObjectHeld = false;
		objectHeld = null;
	}
	
	void FixedUpdate () {
		if(Input.GetKey(KeyCode.Mouse1)){
			if(!isObjectHeld){
				tryPickObject();
			} else {
				holdObject();
			}
		}else if(isObjectHeld){
			DropObject();
		}
	}
	
	private void tryPickObject(){
		Ray playerAim = playerCam.GetComponent<Camera>().ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));
		RaycastHit hit;
		
		if (Physics.Raycast (playerAim, out hit, PickupRange)){
			if(hit.collider.tag == ObjectGrab.m_ObjectsTag){
				isObjectHeld = true;
				objectHeld = hit.collider.gameObject;
				objectHeld.GetComponent<Rigidbody>().useGravity = false;
				objectHeld.GetComponent<Rigidbody>().freezeRotation = true;
				/**/
				PickupRange = ObjectGrab.m_PickupRange; 
				ThrowStrength = ObjectGrab.m_ThrowStrength;
				distance = ObjectGrab.m_distance;
				maxDistanceGrab = ObjectGrab.m_maxDistanceGrab;
			}
			if(hit.collider.tag == DoorGrab.m_DoorsTag){
				isObjectHeld = true;
				objectHeld = hit.collider.gameObject;
                objectHeld.SendMessage("Open", SendMessageOptions.DontRequireReceiver);
                objectHeld.GetComponent<Rigidbody>().useGravity = true;
				objectHeld.GetComponent<Rigidbody>().freezeRotation = false;
				/**/
				PickupRange = DoorGrab.m_DoorPickupRange; 
				ThrowStrength = DoorGrab.m_DoorThrow;
				distance = DoorGrab.m_DoorDistance;
				maxDistanceGrab = DoorGrab.m_DoorMaxGrab;
			}
		}
	}
	
	private void holdObject(){
		Ray playerAim = playerCam.GetComponent<Camera>().ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));
		
		Vector3 nextPos = playerCam.transform.position + playerAim.direction * distance;
		Vector3 currPos = objectHeld.transform.position;
		
		objectHeld.GetComponent<Rigidbody>().velocity = (nextPos - currPos) * 10;
		
        if (Vector3.Distance(objectHeld.transform.position, playerCam.transform.position) > maxDistanceGrab)
        {
            DropObject();
        }
	}
	
    private void DropObject()
    {
        objectHeld.SendMessage("Close", SendMessageOptions.DontRequireReceiver);
		isObjectHeld = false;
		objectHeld.GetComponent<Rigidbody>().useGravity = true;
		objectHeld.GetComponent<Rigidbody>().freezeRotation = false;
		objectHeld = null;
    }
	
    private void ThrowObject()
    {
        objectHeld.GetComponent<Rigidbody>().AddForce(playerCam.transform.forward * ThrowStrength);
		objectHeld.GetComponent<Rigidbody>().freezeRotation = false;
		objectHeld = null;
    }
}
