#pragma strict
    
var y:double;
var x:double;

@HideInInspector
var target : GameObject;


function Start(){
	y=GameObject.FindWithTag("Player").camera.main.orthographicSize*0.20;
	x=y*0.2;	
	target=GameObject.FindWithTag("Player");
}

function Update(){
	
	if(target!=null){
	    
	    //print(Camera.main.orthographicSize );
	    transform.Translate(Vector3(0,(target.transform.position.y-transform.position.y)*y,0)* Time.deltaTime);
	    transform.Translate(Vector3((target.transform.position.x-transform.position.x)*x,0,0)* Time.deltaTime);
	    
	  
     }
}