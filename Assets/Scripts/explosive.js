#pragma strict

var speed:double;
var range:double;
var projectile : Transform;


@HideInInspector
var lookAtPos:Vector3;
@HideInInspector
var i:int;

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
		
		//print((Mathf.Abs(GameObject.FindWithTag("Player").transform.position.x-transform.position.x)));
		
		if(
		(Mathf.Abs(GameObject.FindWithTag("Player").transform.position.x-transform.position.x)<range)
		&&
		(Mathf.Abs(GameObject.FindWithTag("Player").transform.position.y-transform.position.y)<range)
		)
		{
			
			for(i=0; i<360;i+=15){
				Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, i));
			}
		
		
		}
		
		
	}
}
