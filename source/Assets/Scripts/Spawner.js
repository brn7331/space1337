#pragma strict

var enemy : Transform;
var freeSpaceX:float=15;
var freeSpaceY:float=7;
var spawnSpace:float=1;
var initialDelay:double;
var repeatEvery:double;

@HideInInspector
var tmp:double;
@HideInInspector
var random:double;
@HideInInspector
var playerPos: Vector3; 


function Start () {
	freeSpaceY=GameObject.FindWithTag("Player").camera.main.orthographicSize+1;
	freeSpaceX=freeSpaceY*2.2;	

	InvokeRepeating("Spawn", initialDelay, repeatEvery);
}

function Spawn () {

	if(GameObject.FindWithTag("Player")!=null){
		playerPos = GameObject.FindWithTag("Player").transform.position;
		
		//random = Random.Range(0,freeSpaceX+freeSpaceY);
		
				if(Random.Range(1,-1)>0){		
					playerPos += Vector3(Random.Range(-freeSpaceX,freeSpaceX),RandomPos(freeSpaceY),0); 
				}else{
					playerPos += Vector3(RandomPos(freeSpaceX),Random.Range(-freeSpaceY,freeSpaceY),0); 
				}
		
				
								
		Instantiate(enemy, playerPos, transform.rotation);
	}
}

function RandomPos(tmp:double){

	random = Random.Range(-0.1,0.1);
	
	if(random>0){
		random += tmp;
	}else{
		random -= tmp;
	}

	return random;
}


function Update () {
}