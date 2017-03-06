using UnityEngine;
using System.Collections;

public class ZombieClotheScript : MonoBehaviour {

	public Renderer rend;
	public Material shirt;
	public Material Trousers;

	// Use this for initialization
	void Awake () {
		
		rend = gameObject.GetComponent(typeof(Renderer)) as Renderer;
		shirt = rend.materials [5];
		shirt.color = new Color(Random.Range (0f, 0.5f), Random.Range (0f, 0.5f), Random.Range (0f, 1f));
		Trousers = rend.materials [6];
		Trousers.color = new Color(Random.Range (0f, 0.2f), Random.Range (0f, 0.2f), Random.Range (0f, 0.2f));
		HSBColor hsbcol = new HSBColor (GetComponent<Renderer>().materials [6].color);
		Trousers.color = hsbcol.ToColor ();
	}
}
