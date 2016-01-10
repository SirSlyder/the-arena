using UnityEngine;
using System.Collections;
using System;

public class Item : IComparable<Item> {
	public string itemname;
	public Transform playeritem;
	public int damage;
	public string equip;
	public string dequip;
	public string anim1;
	public string anim2;
	public string anim3;
	public string anim4;
	public enum GunType{Melee = 0, Pistol = 1, Shotgun = 2, Rifle = 3, Laser = 4}
	public enum MeleeType{None = 0, Light = 1, Medium = 2, Heavy = 3}
	public int ammo;
	public int maxammo;
	public float minspread;
	public float maxspread;

	public int CompareTo(Item other)
    {
		if(other == null)
		{
			return 1;
		}

		return damage - other.damage;
	}
}
