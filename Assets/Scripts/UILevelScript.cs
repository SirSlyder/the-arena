using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class UILevelScript : MonoBehaviour {

	public Text desctext;
	[TextArea]
	public string texted;

	void OnMouseOver(){
		desctext.text = texted;
	}

	void OnMouseExit(){
		desctext.text = "";
	}
}
