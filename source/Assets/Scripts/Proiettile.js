#pragma strict
var speed:double;
var timeToVanish : double;

function Start () {
	Invoke("Vanish", timeToVanish);
}


function Vanish(){
	Destroy (this.gameObject);
}

function Update () {
 	transform.Translate(Vector3(speed,0,0)* Time.deltaTime);
}


	

