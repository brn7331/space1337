#pragma strict


var moveUp : KeyCode;
var moveDown : KeyCode;
var moveRight : KeyCode;
var moveLeft : KeyCode;

var shoot : KeyCode;

var speedy : float;
var speedx : float;

var projectile : Transform;


@HideInInspector


var up : int;
var down : int;
var left : int;
var right : int;

var num : int;
var den : int;
var rot : double;

var cont : int;





function OnCollisionEnter2D(col: Collision2D){
		
	if (col.gameObject.tag == "Enemy"){
		Destroy(col.gameObject);
		Destroy(this.gameObject);
	}
	
}





function Update () {
	




	if((Input.GetKey(moveUp))&&(Input.GetKey(moveDown))){
	
		rigidbody2D.velocity.y = 0;

	}else if(Input.GetKey(moveUp)){
	
		up=1;
	 	//transform.eulerAngles = new Vector3(0, 0, 180);
		rigidbody2D.velocity.y = speedy;
 				    
	}else if(Input.GetKey(moveDown)){

		down=1;
 		//transform.eulerAngles = new Vector3(0, 0, 0);
		rigidbody2D.velocity.y = speedy*-1;
		
	}else{
		rigidbody2D.velocity.y = 0;
	}
	


	if((Input.GetKey(moveLeft))&&(Input.GetKey(moveRight))){
	
		rigidbody2D.velocity.x = 0;

	}else if(Input.GetKey(moveRight)){
	
		right=1;
 		//transform.eulerAngles = new Vector3(0, 0, 90);
		rigidbody2D.velocity.x = speedx;
	
	}else if(Input.GetKey(moveLeft)){

		left=1;
 		//transform.eulerAngles = new Vector3(0, 0, 270);
		rigidbody2D.velocity.x = speedx*-1;
		
	}else{
		rigidbody2D.velocity.x = 0;
	}
	
	
	if(right==1){
		num=270*right+90*left+180*down+360*up;
	}else{
		num=270*right+90*left+180*down+0*up;
	}
	
	den=up+down+left+right;
	
	if(den != 0){
		rot=num/den;
		transform.eulerAngles = new Vector3(0, 0, rot);
	}
	
	up=0;
	down=0;
	left=0;
	right=0;
	
	
	if((Input.GetKey(shoot))&&(cont==0)){
	
		var clone : Transform;
		clone = Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, 90));
		cont=15;
				
	}
	
	if(cont>0){
		cont--;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
}