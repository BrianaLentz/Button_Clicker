
function change()
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="Sign Out") elem.value = "Sign In";
    else elem.value = "Sign Out";
}



function addDef(element) {
    element.remove();
}
