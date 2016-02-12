#pragma strict

var speed:double;
var radius:double;

var projectile : Transform;

@HideInInspector
var lookAtPos:Vector3;

@HideInInspector
var tempPos1:Vector3;
@HideInInspector
var tempPos2:Vector3;
@HideInInspector
var tempPos3:Vector3;
@HideInInspector
var tempPos4:Vector3;
@HideInInspector
var tempPos5:Vector3;

@HideInInspector
var x:double;
@HideInInspector
var y:double;
var cont:double;

function Start () {
	transform.position=(Vector3(0,7,0));
	cont=Time.time+Random.Range(2.0,3.0);
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
	
	transform.Translate(Vector3(-1,2.5,0));
	Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, 110));
	transform.Translate(Vector3(1,-2.5,0));


	transform.Translate(Vector3(-0.5,2.5,0));
	Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, 100));
	transform.Translate(Vector3(0.5,-2.5,0));

	transform.Translate(Vector3(0,2.5,0));
	Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, 90));
	transform.Translate(Vector3(0,-2.5,0));
	
	transform.Translate(Vector3(0.5,2.5,0));
	Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, 80));
	transform.Translate(Vector3(-0.5,-2.5,0));
	
	transform.Translate(Vector3(1,2.5,0));
	Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, 70));
	transform.Translate(Vector3(-1,-2.5,0));

}


function Update () {
	if(GameObject.FindWithTag("Player")!=null){
		x =	GameObject.FindWithTag("Player").transform.position.x;
		y =	GameObject.FindWithTag("Player").transform.position.y;
		WhereEnemy();
		
		if(Time.time>cont){
			Shoot();
			cont=Time.time+Random.Range(1.5,2);
				
	}
	
		transform.position.x = Mathf.Sin(Time.time * speed) * radius + x;
		transform.position.y = Mathf.Cos(Time.time * speed) * radius + y;
	
		//transform.position.x = (Mathf.Sin(Time.time * speed) * radius + x)*Time.deltaTime;
		//transform.position.y = (Mathf.Cos(Time.time * speed) * radius + y)*Time.deltaTime;
	}

}
