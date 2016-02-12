#pragma strict

var speed:double;
var radius:double;

var projectile : Transform;

@HideInInspector
var lookAtPos:Vector3;
@HideInInspector
var tempPos:Vector3;
@HideInInspector
var x:double;
@HideInInspector
var y:double;
var cont:double;

function Start () {
		x =	transform.position.x;
		y =	transform.position.y;
}


function WhereEnemy () {
	if(GameObject.FindWithTag("Player")!=null){
		lookAtPos = GameObject.FindWithTag("Player").transform.position;
		lookAtPos.z = transform.position.z;
		transform.up = (lookAtPos - transform.position);
	}
}


function Shoot () {
	var clone : Transform;
	transform.Translate(Vector3(0,1.1,0));
	tempPos=transform.position;
	transform.Translate(Vector3(0,1.1,0));
	clone = Instantiate(projectile, tempPos, transform.rotation*Quaternion.Euler(0, 0, 90));
}


function Update () {
	if(GameObject.FindWithTag("Player")!=null){

		WhereEnemy();
		
		if(Time.time>cont){
			Shoot();
			cont=Time.time+Random.Range(1.0,3.0);
				
	}
	
		transform.position.x = Mathf.Sin(Time.time * speed) * radius + x;
		transform.position.y = Mathf.Cos(Time.time * speed) * radius + y;
	
		//transform.position.x = (Mathf.Sin(Time.time * speed) * radius + x)*Time.deltaTime;
		//transform.position.y = (Mathf.Cos(Time.time * speed) * radius + y)*Time.deltaTime;
	}

}








