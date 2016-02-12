#pragma strict

var speed:double;
var range:double;
var projectile : Transform;
var cont:double;
var cont2:double;
var cont3:double;
var shield : Sprite;
var normal : Sprite;
var position:Vector3;
var first:boolean=true;

@HideInInspector
var lookAtPos:Vector3;
@HideInInspector
var i:int;

function Start () {
	position=transform.position;
	cont=Time.time+Random.Range(2.5,3.5);
	
	collider2D.isTrigger=true;
	GetComponent(SpriteRenderer).sprite = shield;
	cont3=Time.time+2;
	print("iniziamo");
}


function Update () {
	
	transform.position=position;

	if((Time.time>cont3)&&(first)){
		collider2D.isTrigger=false;
		GetComponent(SpriteRenderer).sprite = normal;
		first=false;
	}		
	
	
	
	
	if(GameObject.FindWithTag("Player")!=null){

		if((Time.time>cont2+1)&&(first==false)){
			collider2D.isTrigger=false;
			GetComponent(SpriteRenderer).sprite = normal;
		}			


		if(Time.time>cont){

			collider2D.isTrigger=true;
			GetComponent(SpriteRenderer).sprite = shield;
			
			for(i=0; i<360;i+=3){
				Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, i));
			}
		
			cont2=Time.time;
			cont=Time.time+Random.Range(2,3);

		
		}		
	}
}
