using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class jobAnimScript : MonoBehaviour {

	public Animation anim;
	public string weapon;
	public float firetimer;
	public Text texte;

	void Awake () {
		anim ["run"].layer = 1;
		anim ["run"].wrapMode = WrapMode.Loop;
		anim ["idle"].layer = 1;
		anim ["idle"].wrapMode = WrapMode.Loop;
		anim ["aimRifle"].layer = 2;
		weapon = "fist";
	}

	void Start () {
		anim.Play ("equipUnarmed");
		texte.text = "equipUnarmed";
	}

	void Update () {
		if (Input.GetButton ("Horizontal")) {
			anim.CrossFade ("run");
		} else {
			anim.CrossFade ("idle");
		}
		if (Input.GetButtonDown ("Fire1") && !Input.GetKey(KeyCode.LeftShift)) {
			if (weapon == "fist") {
				anim.Play ("punch");
				texte.text = "punch";
			} else if (weapon == "axe") {
				anim.Play ("swingMeleeMiss");
				texte.text = "swingMeleeMiss";
			} else if (weapon == "bow") {
				anim.Play ("chargeBow");
				anim.PlayQueued ("fireBow");
				texte.text = "charge + fire Bow";
			} else if (weapon == "item") {
				anim.Play ("useItem");
				anim.PlayQueued ("equipItem");
				texte.text = "use + equipItem";
			}
		}
		if (Input.GetButtonDown ("Fire2") && !Input.GetKey(KeyCode.LeftShift) && !anim.IsPlaying ("swingMeleeMiss") && !anim.IsPlaying("swingMeleeHit") && weapon == "axe") {
			anim.Play ("swingMeleeHit");
			texte.text = "swingMeleeHit";
		}

		if (Input.GetKeyDown (KeyCode.Alpha1)) {
			if (weapon != "fist") {
				if (weapon == "axe") {
					anim.PlayQueued ("dequipMelee");
					anim ["equipUnarmed"].speed = 1;
					anim ["equipUnarmed"].time = 0;
					anim.PlayQueued ("equipUnarmed");
					weapon = "fist";
				} else if (weapon == "rifle") {
					anim.PlayQueued ("dequipRifle");
					anim ["equipUnarmed"].speed = 1;
					anim ["equipUnarmed"].time = 0;
					anim.PlayQueued ("equipUnarmed");
					weapon = "fist";
				}
				else if (weapon == "bow") {
					anim.PlayQueued ("dequipBow");
					anim ["equipUnarmed"].speed = 1;
					anim ["equipUnarmed"].time = 0;
					anim.PlayQueued ("equipUnarmed");
					weapon = "fist";
				} else if (weapon == "item") {
					anim.PlayQueued ("dequipItem");
					anim ["equipUnarmed"].speed = 1;
					anim ["equipUnarmed"].time = 0;
					anim.PlayQueued ("equipUnarmed");
					weapon = "fist";
				}
				texte.text = "equipUnarmed";
			}
		} else if (Input.GetKeyDown (KeyCode.Alpha2)) {
			if (weapon != "axe") {
				if (weapon == "fist") {
					anim.PlayQueued ("dequipUnarmed");
					anim ["equipMelee"].speed = 1;
					anim ["equipMelee"].time = 0;
					anim.PlayQueued ("equipMelee");
					weapon = "axe";
				}
				else if (weapon == "rifle") {
					anim.PlayQueued ("dequipRifle");
					anim ["equipMelee"].speed = 1;
					anim ["equipMelee"].time = 0;
					anim.PlayQueued ("equipMelee");
					weapon = "axe";
				}
				else if (weapon == "bow") {
					anim.PlayQueued ("dequipBow");
					anim ["equipMelee"].speed = 1;
					anim ["equipMelee"].time = 0;
					anim.PlayQueued ("equipMelee");
					weapon = "axe";
				} else if (weapon == "item") {
					anim.PlayQueued ("dequipItem");
					anim ["equipMelee"].speed = 1;
					anim ["equipMelee"].time = 0;
					anim.PlayQueued ("equipMelee");
					weapon = "axe";
				}
				texte.text = "equipMelee";
			}
		} else if (Input.GetKeyDown (KeyCode.Alpha3)) {
			if (weapon != "rifle") {
				if (weapon == "fist") {
					anim.PlayQueued ("dequipUnarmed");
					anim ["equipRifle"].speed = 1;
					anim ["equipRifle"].time = 0;
					anim.PlayQueued ("equipRifle");
					weapon = "rifle";
				}
				else if (weapon == "axe") {
					anim.PlayQueued ("dequipMelee");
					anim ["equipRifle"].speed = 1;
					anim ["equipRifle"].time = 0;
					anim.PlayQueued ("equipRifle");
					weapon = "rifle";
				}
				else if (weapon == "bow") {
					anim.PlayQueued ("dequipBow");
					anim ["equipRifle"].speed = 1;
					anim ["equipRifle"].time = 0;
					anim.PlayQueued ("equipRifle");
					weapon = "rifle";
				} else if (weapon == "item") {
					anim.PlayQueued ("dequipItem");
					anim ["equipRifle"].speed = 1;
					anim ["equipRifle"].time = 0;
					anim.PlayQueued ("equipRifle");
					weapon = "rifle";
				}
				texte.text = "equipRifle";
			}
		} else if (Input.GetKeyDown (KeyCode.Alpha4)) {
			if (weapon != "bow") {
				if (weapon == "fist") {
					anim.PlayQueued ("dequipUnarmed");
					anim ["equipBow"].speed = 1;
					anim ["equipBow"].time = 0;
					anim.PlayQueued ("equipBow");
					weapon = "bow";
				}
				else if (weapon == "axe") {
					anim.PlayQueued ("dequipMelee");
					anim ["equipBow"].speed = 1;
					anim ["equipBow"].time = 0;
					anim.PlayQueued ("equipBow");
					weapon = "bow";
				}
				else if (weapon == "rifle") {
					anim.PlayQueued ("dequipRifle");
					anim ["equipBow"].speed = 1;
					anim ["equipBow"].time = 0;
					anim.PlayQueued ("equipBow");
					weapon = "bow";
				} else if (weapon == "item") {
					anim.PlayQueued ("dequipItem");
					anim ["equipBow"].speed = 1;
					anim ["equipBow"].time = 0;
					anim.PlayQueued ("equipBow");
					weapon = "bow";
				}
				texte.text = "equipBow";
			}
		} else if (Input.GetKeyDown (KeyCode.Alpha5)) {
			if (weapon != "item") {
				if (weapon == "fist") {
					anim.PlayQueued ("dequipUnarmed");
					anim ["equipItem"].speed = 1;
					anim ["equipItem"].time = 0;
					anim.PlayQueued ("equipItem");
					weapon = "item";
				}
				else if (weapon == "axe") {
					anim.PlayQueued ("dequipMelee");
					anim ["equipItem"].speed = 1;
					anim ["equipItem"].time = 0;
					anim.PlayQueued ("equipItem");
					weapon = "item";
				}
				else if (weapon == "rifle") {
					anim.PlayQueued ("dequipRifle");
					anim ["equipItem"].speed = 1;
					anim ["equipItem"].time = 0;
					anim.PlayQueued ("equipItem");
					weapon = "item";
				} else if (weapon == "bow") {
					anim.PlayQueued ("dequipBow");
					anim ["equipItem"].speed = 1;
					anim ["equipItem"].time = 0;
					anim.PlayQueued ("equipItem");
					weapon = "item";
				}
				texte.text = "equipItem";
			}
		}
		if (weapon == "rifle") {
			firetimer += Time.deltaTime;
			if (Input.GetButtonDown ("Fire2") && !Input.GetKey(KeyCode.LeftShift) && !anim.IsPlaying ("fireRifle")) {
				anim ["aimRifle"].speed = 1;
				anim ["aimRifle"].time = 0;
				anim.PlayQueued ("aimRifle");
				texte.text = "aimRifle";
			} else if (Input.GetButtonUp ("Fire2") && !Input.GetKey(KeyCode.LeftShift) && !anim.IsPlaying ("fireRifle")){
				anim ["aimRifle"].speed = -1;
				anim ["aimRifle"].time = anim ["aimRifle"].length;
				anim.Play ("aimRifle");
				texte.text = "aimRifle";
			}
			if(Input.GetButton ("Fire2") && !anim.IsPlaying("aimRifle") && !Input.GetKey(KeyCode.LeftShift)){
				anim ["aimRifle"].time = anim ["aimRifle"].length;
			}
			if (Input.GetButton ("Fire1") && weapon == "rifle" && !anim.IsPlaying ("equipRifle") && !Input.GetKey(KeyCode.LeftShift)) {
				if (!anim.IsPlaying ("equipRifle") && firetimer > 0.1f) {
					anim.Stop ();
					anim.Play ("fireRifle");
					firetimer = 0;
					texte.text = "fireRifle";
				}
			}
			if (Input.GetKeyDown (KeyCode.R) && !anim.IsPlaying ("reloadRifle") && !anim.IsPlaying ("equipRifle")) {
				anim.Play ("reloadRifle");
				texte.text = "reloadRifle";
			}
		}
		if (Input.GetKeyDown (KeyCode.R) && !anim.IsPlaying ("reloadBow") && !anim.IsPlaying ("equipBow") && weapon == "bow") {
			anim.Play ("reloadBow");
			texte.text = "reloadBow";
		}
		if (Input.GetKeyDown (KeyCode.LeftShift)) {
			anim ["run"].speed = 1.5f;
			if (weapon == "fist") {
				anim ["sprintUnarmed"].speed = 1;
				anim.Play ("sprintUnarmed");
				texte.text = "sprintUnarmed";
			} else if (weapon == "axe") {
				anim ["sprintMelee"].speed = 1;
				anim.Play ("sprintMelee");
				texte.text = "sprintMelee";
			} else if (weapon == "rifle") {
				anim ["sprintRifle"].speed = 1;
				anim.Play ("sprintRifle");
				texte.text = "sprintRifle";
			} else if (weapon == "bow") {
				anim ["sprintBow"].speed = 1;
				anim.Play ("sprintBow");
				texte.text = "sprintBow";
			} else if (weapon == "item") {
				anim ["sprintItem"].speed = 1;
				anim.Play ("sprintItem");
				texte.text = "sprintItem";
			}
		} else if (Input.GetKeyUp (KeyCode.LeftShift)) {
			anim ["run"].speed = 1;
			if(weapon == "fist"){
				anim ["sprintUnarmed"].speed = -1;
				anim ["sprintUnarmed"].time = anim ["sprintMelee"].length;
				anim.Play ("sprintUnarmed");
			} else if(weapon == "axe"){
				anim ["sprintMelee"].speed = -1;
				anim ["sprintMelee"].time = anim ["sprintMelee"].length;
				anim.Play ("sprintMelee");
			} else if(weapon == "rifle"){
				anim ["sprintRifle"].speed = -1;
				anim ["sprintRifle"].time = anim ["sprintRifle"].length;
				anim.Play ("sprintRifle");
			} else if(weapon == "bow"){
				anim ["sprintBow"].speed = -1;
				anim ["sprintBow"].time = anim ["sprintBow"].length;
				anim.Play ("sprintBow");
			} else if(weapon == "item"){
				anim ["sprintItem"].speed = -1;
				anim ["sprintItem"].time = anim ["sprintItem"].length;
				anim.Play ("sprintItem");
			}
		}
	}
}
