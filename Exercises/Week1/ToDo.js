// Creates a remove button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "remove p-2";
  myNodelist[i].appendChild(span);
}

// Click on the remove button to remove the current list item !
var remove = document.getElementsByClassName("remove");
for (var i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
   alert('Please add a task first ")');
  } else {
    document.getElementById("myUL").appendChild(li);
    li.className = "mb-1 pb-2 list-group-item list-group-item-info";
  }
  document.getElementById("myInput").value = "";
  

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove p-2";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}