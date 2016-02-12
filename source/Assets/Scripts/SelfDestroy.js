#pragma strict

var timeToVanish : int;

function Start () {
	Invoke("Vanish", timeToVanish);

}


function Vanish(){

	Destroy (this.gameObject);

}

function Update () {

}