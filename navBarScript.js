
function topDropDownMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function openSocialNav(){
	document.getElementById("sociallinks").style.visibility="visible";
	document.getElementById("sociallinks").style.width="250px";


}
function closeSocialNav(){
	document.getElementById("sociallinks").style.width="0";
	}