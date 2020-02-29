function alertFunction() {
    var checkbox = document.getElementById('boxOne');
if (checkbox.checked) 
{
    alert('Selected');
}
else
{
    alert('Not selected');
}
};

function radioButtonAlert() {
    var radioButton = document.getElementsByName('r1');
    for (var i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            alert('Option ' + (i+1) + ' selected');
            
        }
    };
};

function selectorChange() {
    var sel = document.getElementById('select').selectedIndex;
    var opt = document.getElementById('select').options;
    alert('You chose ' + opt[sel].text);
    
}

function rangeFun() {
    var range = document.getElementById('range1');
    var text = document.getElementById('one');
    text.innerHTML = range.value;
}