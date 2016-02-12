#pragma strict
var explosion : Transform;

@HideInInspector
static var score:int;
@HideInInspector
var showScore:boolean=false;


var bossHealth:int=10;


function OnGUI () {
	GUI.Box (Rect (10,10,50,30), ""+score);
}


function OnCollisionEnter2D(col: Collision2D){
	if (this.gameObject.tag == "Player"){
		Destroy(this.gameObject);
		Instantiate(explosion, transform.position, transform.rotation);
		PlayerPrefs.SetInt("Player Score", score);
		score=0;
		Application.LoadLevel("Score");
	}

	if ((this.gameObject.tag == "Boss")&&(col.gameObject.tag == "special bullet")){
	}
	else if (this.gameObject.tag == "Boss"){
		bossHealth--;
		Destroy(col.gameObject);
		if(bossHealth==0){
			Destroy(this.gameObject);
			Instantiate(explosion, transform.position, transform.rotation);
			score+=1000;
			PlayerPrefs.SetInt("Player Score", score);
			score=0;
			Application.LoadLevel("Score");
		}
		
	}	
	
	if (this.gameObject.tag == "Enemy"){
		score++;
		Destroy(this.gameObject);
		Instantiate(explosion, transform.position, transform.rotation);
	}
	
	
	if (this.gameObject.tag == "BadassEnemy"){
		if (col.gameObject.tag == "Bullet"){
			score+=5;
			Destroy(this.gameObject);
			Instantiate(explosion, transform.position, transform.rotation);
		}
	}
		
	
	if (this.gameObject.tag == "Bullet"){
		Destroy(this.gameObject);
	}		

}