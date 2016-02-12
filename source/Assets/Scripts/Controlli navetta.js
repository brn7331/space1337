#pragma strict

var shield : Sprite;
var normal : Sprite;
var myAudio : AudioClip;

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveRight : KeyCode;
var moveLeft : KeyCode;
var bombKey : KeyCode;
var shieldKey : KeyCode;

var shoot : KeyCode;

var reload:double=0.3;
var rotation : double;
var speed:double;

var projectile : Transform;

var tempPos:Vector3;


@HideInInspector
var cont : double;
var switcherColl : boolean=true;
var switcherBomb : boolean=true;
var i:int;

function Start () {


	// Play impact audio clip at volume 0.7
	//audio.PlayOneShot(myAudio, 1);




	//AudioSource.PlayClipAtPoint(myAudio, GameObject.FindWithTag("Player").transform.position);
	cont=Time.time;
}

function colliderOn(){
	yield WaitForSeconds(3);
	collider2D.isTrigger=false;	
	GetComponent(SpriteRenderer).sprite = normal;
	yield WaitForSeconds(7);
	switcherColl=true;
}

function bombOn(){
	yield WaitForSeconds(1);
	collider2D.isTrigger=false;
	yield WaitForSeconds(14);
	switcherBomb=true;
}

function Update () {
	
	if(Input.GetKey(moveUp)){
		transform.Translate(Vector3(0,speed,0)* Time.deltaTime);
	}

	if(Input.GetKey(shieldKey)){
		if((switcherColl)&&(!(collider2D.isTrigger))){
			switcherColl=false;
			collider2D.isTrigger=true;
			GetComponent(SpriteRenderer).sprite = shield;
			colliderOn();
		}
	}

	if(Input.GetKey(bombKey)){
		if((switcherBomb)&&(!(collider2D.isTrigger))){
			switcherBomb=false;
			collider2D.isTrigger=true;
			for(i=0; i<360;i+=5){
				Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, i));
			}	
			bombOn();
		}
	}
									
	// rotazione a destra e sinistra
	if((Input.GetKey(moveRight))&&(Input.GetKey(moveLeft))){
	
	}else{
		if(Input.GetKey(moveRight)){
			transform.Rotate(Vector3.back * rotation * Time.deltaTime );
		}
	 		
		if(Input.GetKey(moveLeft)){
			transform.Rotate(Vector3.forward * rotation * Time.deltaTime );
		}
	}
	
	// spara
	if((Input.GetKey(shoot))&&(Time.time>cont)){
	
		var clone : Transform;
		transform.Translate(Vector3(0,0.7,0));
		tempPos=transform.position;
		transform.Translate(Vector3(0,-0.7,0));
				
		clone = Instantiate(projectile, tempPos, transform.rotation*Quaternion.Euler(0, 0, 90));
		cont=Time.time+reload;
				
	}

	
}