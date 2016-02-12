#pragma strict
var exitKey : KeyCode;

function Start () {
}

function OnGUI () {

	GUI.Box(Rect (Screen.width-125, Screen.height-50, 100, 25), "version 0.1.2");

	GUI.Box(Rect (Screen.width/2-50, 10, 100, 25), "Space 1337");

	GUI.Box(Rect (Screen.width/2-130, 40, 260, 100), "arrow up - accelerate\narron left/right - rotate\nV - shield for 3 sec every 10\nB - bomb every 15 sec\nspace - shoot\n[no bombs for boss, u sad? :'( lol]");
		
	if ((GUI.Button (Rect (Screen.width/2-100, Screen.height/2-50, 100, 25), "Big Boss"))) {
		Screen.showCursor = false;
        Application.LoadLevel("Boss");
	}	
	if ((GUI.Button (Rect (Screen.width/2+25, Screen.height/2-50, 100, 25), "Bang Boss"))) {
		Screen.showCursor = false;
        Application.LoadLevel("Evil Boss");
	}		
	if ((GUI.Button (Rect (Screen.width/2-50, Screen.height/2, 100, 25), "Survival"))) {
        Screen.showCursor = false;
        Application.LoadLevel("Survive");
	}

	if ((GUI.Button (Rect (Screen.width/2-50, Screen.height/2+50, 100, 25), "Matrix"))) {
        Screen.showCursor = false;
        Application.LoadLevel("Matrix");
	}
	
	if ((GUI.Button (Rect (Screen.width/2-50, Screen.height/2+100, 100, 25), "Shooter"))) {
        Screen.showCursor = false;
        Application.LoadLevel("Shooter");
	}
			
	if ((GUI.Button (Rect (Screen.width/2-50, Screen.height-50, 100, 25), "Quit"))||(Input.GetKey(exitKey))) {
     	Application.Quit();
	}
}