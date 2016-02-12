#pragma strict

var alwaysForward : boolean;
var forward : KeyCode;
var moveUp : KeyCode;
var moveDown : KeyCode;
var moveRight : KeyCode;
var moveLeft : KeyCode;

var shoot : KeyCode;

var frameToReload : int;
var speed : double;

var rotation : double;

var projectile : Transform;

var explosion : Transform;


@HideInInspector
var opposite:int;
@HideInInspector
var dest:double;
@HideInInspector
var cont:int;

@HideInInspector
var up : int;
@HideInInspector
var down : int;
@HideInInspector
var left : int;
@HideInInspector
var right : int;

@HideInInspector
var num : int;
@HideInInspector
var den : int;

var pos:float;

@HideInInspector
var memory : int=-1;

// Collisione
function OnCollisionEnter2D(col: Collision2D){
		
	if (col.gameObject.tag == "Enemy"){
		Destroy(col.gameObject); 
		Destroy(this.gameObject);
		Instantiate(explosion, transform.position, transform.rotation);
	}
	
}


// Rotazione in senso antiorario
function ruotaSx () {
	transform.eulerAngles += new Vector3(0, 0, rotation);
}

// Rotazione in senso orario
function ruotaDx () {
	transform.eulerAngles -= new Vector3(0, 0, rotation);
}

// Angolo a cui ruotare
/*
		  0
	90			270
		180
*/


function Start(){

	transform.eulerAngles.z = 0;

}

function rotateTo(dest:float){

// transform.Translate(Vector3(0,dest,0) * Time.deltaTime);

//memory=dest* Time.deltaTime;


//transform.eulerAngles.z = dest;


//transform.rotation = Quaternion.Slerp (transform.rotation, Quaternion(0,90,90,0), Time.time * rotation);

print(dest);
print(transform.eulerAngles.z);

	pos=transform.eulerAngles.z;

	if(Mathf.Abs(pos-dest)<1){
		transform.eulerAngles.z = dest;
	} else {
		transform.eulerAngles.z += (pos-dest)/100;
	}
	
	/*
		if(transform.eulerAngles.z!=dest){ 

			if(dest>=180){
				opposite = dest-180;
			}else{
				opposite = dest+180;
			}	

			if(dest>opposite){
			
				if((transform.eulerAngles.z>opposite)&&(transform.eulerAngles.z<dest))
				{ transform.eulerAngles.z += 1; } else { transform.eulerAngles.z -= 1; }    
			
			}else{
			
				if((transform.eulerAngles.z>dest)&&(transform.eulerAngles.z<opposite))
				{ transform.eulerAngles.z -= 1; } else { transform.eulerAngles.z += 1; }    
			} 
	}
*/

}



function Update () {
	

	if(Input.GetKey(moveUp)){
	
		up=1;
		//rotateTo(0);
    	    
	    	    	    
	}
	
	
	if(Input.GetKey(moveDown)){
		down=1;
		//rotateTo(180);
		
	}
	


	if(Input.GetKey(moveRight)){
		right=1;
		//rotateTo(270);
		
	}
 		
	if(Input.GetKey(moveLeft)){
		left=1;
		//rotateTo(90);
}
	
	
	
if(right==1){
		num=270*right+90*left+180*down+360*up;
}else{
		num=270*right+90*left+180*down+0*up;
}
	
	//num=270*right+90*left+180*down+0*up;
	den=up+down+left+right;
	
	if(den != 0){
		print(num/den);
		rotateTo(num/den);
	}
	
	up=0;
	down=0;
	left=0;
	right=0;
	
	
	if(alwaysForward){
		transform.Translate(Vector3(0,speed,0));
	}else{
		if(Input.GetKey(forward)){
			transform.Translate(Vector3(0,speed,0));
		}
	}
			
	
	if((Input.GetKey(shoot))&&(cont==0)){
	
		var clone : Transform;
		clone = Instantiate(projectile, transform.position, transform.rotation*Quaternion.Euler(0, 0, 90));
		cont=frameToReload;
				
	}
	
	if(cont>0){
		cont--;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
}