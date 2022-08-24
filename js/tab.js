const Team = document.querySelector('#all_team');
const Personal = document.querySelector('#all_personal');
const bt_Team = document.querySelector('#Team');
const bt_Personal = document.querySelector('#Personal');

bt_Team.addEventListener('click', function(){
    Personal.classList.replace("grid", "hidden");
    Team.classList.replace("hidden", "grid");
    bt_Personal.style.background = "none";
    bt_Personal.style.color = "black";
    bt_Team.style.background = "black";
    bt_Team.style.color = "white";
})

bt_Personal.addEventListener('click', function(){
    Team.classList.replace("grid", "hidden");
    Personal.classList.replace("hidden", "grid")
    bt_Team.style.background = "none";
    bt_Team.style.color = "black";
    bt_Personal.style.background = "black";
    bt_Personal.style.color = "white";
})