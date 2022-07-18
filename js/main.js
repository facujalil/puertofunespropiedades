const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length

for(let i = 1; i<menuLength; i++){
    if (menuItem[i].href === currentLocation){
menuItem[i].className = "active"
    }
}
