#pragma strict
var again : KeyCode;

function Start () {
}

function OnGUI () {
		Screen.showCursor = true;
		GUI.Box(Rect (Screen.width/2-65, Screen.height/2-100, 130, 25), "Score: "+PlayerPrefs.GetInt("Player Score"));
	
		if ((GUI.Button (Rect (Screen.width/2-50, Screen.height/2, 100, 50), "Again!\n[Space]"))||(Input.GetKey(again))) {
			Screen.showCursor = false;
    	    Application.LoadLevel(PlayerPrefs.GetString("Level"));
		}
		
		if (GUI.Button (Rect (Screen.width/2-50, Screen.height/2+100, 100, 50), "Menu")) {
			Application.LoadLevel("Menu");
		}
}