#pragma strict

var bg : Transform;
@HideInInspector
var x:double;
@HideInInspector
var y:double;
var xRange:double;
var yRange:double;
var xAdd:double;
var yAdd:double;
var random:float;
var random2:float;

function Start () {


for(x=-xRange;x<xRange;x+=xAdd){

	for(y=-yRange;y<yRange;y+=yAdd){

		random = Random.Range(-0.1,0.1);
		if(random>0){
			random = 1;
		}else{
			random = 0;
		}
	
		random2 = Random.Range(-0.1,0.1);
		if(random2>0){
			random2 = 1;
		}else{
			random2 = 0;
		}
		
		Instantiate(bg, Vector3(x,y,0), transform.rotation*Quaternion.Euler(0, 0, 180*random2));
	
	}
	
}


}

function Update () {

}