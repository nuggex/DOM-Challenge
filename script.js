


window.onload = function() {
    var profile = document.getElementsByClassName('profile');
    var team = document.getElementsByClassName('team-member');

    console.log(team);
    
    for(let i=0; i< team.length; i++)
    {
        team[i].addEventListener("mouseover", function( event){
            console.log(event);
            team[i].firstElementChild.style.filter = "drop-shadow(0 0 0.75rem red)";
       })
       team[i].addEventListener("mouseout", function( event){
        team[i].firstElementChild.style.filter  = "drop-shadow(0 0 0rem red)";
       })
       team[i].addEventListener("click", function(event){
           var x = window.prompt("nytt namn");
           team[i].querySelector(".team-title").innerHTML = x;
       })
    }

    
}
