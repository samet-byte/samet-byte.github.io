
function rentry(sub) 
{
	// 
  // var ul = document.getElementById("rentry");
  // var li = document.createElement("li");
  // li.appendChild(document.createTextNode("Four"));
  // li.setAttribute("id", "element4"); // added line
  // li.setAttribute("href", "https:rentry.co/"+sub);
  // // ul.appendChild(li);
  // ul.appendChild(li)
  // 
  
  var a = document.createElement("a");
  var ulist = document.getElementById("rentry");
  var newItem = document.createElement("li");
  
  a.textContent = sub;
  a.style.textDecoration = "none";
  a.setAttribute('href', "https://rentry.co/"+sub);
  newItem.appendChild(a);
  ulist.appendChild(newItem);
	
	
}

rentry("samet")
rentry("baskent")
rentry("eem201")
rentry("eem209")
rentry("eem211")
rentry("eem477")
rentry("")
rentry("samscent")

