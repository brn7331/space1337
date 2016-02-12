#pragma strict

var speed:double;

@HideInInspector
var lookAtPos:Vector3;


function Start () {
	WhereEnemy();
}

function WhereEnemy () {
	if(GameObject.FindWithTag("Player")!=null){
		lookAtPos = GameObject.FindWithTag("Player").transform.position;
		lookAtPos.z = transform.position.z;
		transform.up = (lookAtPos - transform.position);
	}
}



function Update () {

	if(GameObject.FindWithTag("Player")!=null){
		WhereEnemy();
		transform.Translate(Vector3(0,speed,0)* Time.deltaTime);
	
	}
}








