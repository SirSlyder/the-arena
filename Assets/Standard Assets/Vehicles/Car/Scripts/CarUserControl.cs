using System;
using UnityEngine;
using UnityStandardAssets.CrossPlatformInput;
using UnityEngine.UI;

namespace UnityStandardAssets.Vehicles.Car
{
    [RequireComponent(typeof (CarController))]
    public class CarUserControl : MonoBehaviour
    {
        private CarController m_Car; // the car controller we want to use

		public bool activated = false;

		private bool guiShow = false;

		public Texture2D Box;
		public GUIStyle Style;

		public float fuel = 1000;
		public Text fueltext;

		private Transform player;
		private Camera cam;

		private float holdtime;

        private void Awake()
        {
            // get the car controller
            m_Car = GetComponent<CarController>();
			player = Camera.main.transform;
			cam = GameObject.Find ("CarCamera").GetComponent<Camera>();
        }


        private void FixedUpdate()
        {
			if (activated) {
				if(Input.GetButton("Use")){
					holdtime += Time.deltaTime;
				}
				else{
					holdtime = 0;
				}
				if (holdtime >= 0.4) {
					activated = false;
					holdtime = 0;
				}
			}
			if (activated && fuel > 0) {
				cam.gameObject.active = true;
				player.parent.parent = this.transform;
				player.parent.localPosition = new Vector3 (0, 2, 0);
				player.parent.gameObject.active = false;
				// pass the input to the car!
				float h = CrossPlatformInputManager.GetAxis ("Horizontal");
				float v = CrossPlatformInputManager.GetAxis ("Vertical");
				#if !MOBILE_INPUT
				float handbrake = CrossPlatformInputManager.GetAxis ("Jump");
				m_Car.Move (h, v, v, handbrake);
				#else
	            m_Car.Move(h, v, v, 0f);
				#endif
				fuel -= Time.deltaTime * 5;
				fueltext.text = "Fuel Left: " + Mathf.RoundToInt (fuel / 10) + "%";
			} else if(!activated || fuel <= 0){
				activated = false;
				cam.gameObject.active = false;
				player.parent.parent = null;
				player.parent.gameObject.active = true;
			}
			if (fuel < 0) {
				fuel = 0;
			}
        }

		void LookAt(){
			guiShow = true;
		}

		void LookAway () {
			guiShow = false;
		}

		void Hold () {
			activated = true;
			guiShow = false;
		}

		void OnGUI(){
			if (guiShow == true) {
				string message = "Hold E to Enter Car";
				GUI.DrawTexture(new Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
				GUI.Label(new Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
			}
		}
    }
}
