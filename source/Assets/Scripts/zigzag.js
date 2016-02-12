#pragma strict

var speed:double;
var findEnemy:int;
var arc:double;
var rotation:double;

@HideInInspector
var cont:int;


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


	
		if (cont==findEnemy*2){
	
			WhereEnemy();
			cont=0;
		}

		if(cont<findEnemy){
		
			transform.Rotate(Vector3(0, 0, rotation)* Time.deltaTime);
			transform.Translate(Vector3(0,speed,0)* Time.deltaTime);
	
		} 
	
		if (cont==findEnemy){
	
			WhereEnemy();
		}
	
		if (cont>=findEnemy){
			
	
			transform.Rotate(Vector3(0, 0, -rotation)* Time.deltaTime);
			transform.Translate(Vector3(0,speed,0)* Time.deltaTime);
		
		} 
	
		cont++;
	}
}








