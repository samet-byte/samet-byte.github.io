function madeWithElements(href, title, src, alt, x) 
{
  
  
  document.getElementById("madewith").innerHTML = 
  document.getElementById("madewith").innerHTML +  
  "<a href='" + href + 
  "' title='" + title +
  "' target='_blank' class='w3-hover-opacity'" +
  "><img src='" + src + 
  "' alt='" + alt +
  "' style='" + "width:25px;height:25px;'></a>" + x;
  
  document.getElementById("madewith");
}


madeWithElements(
	"https://www.w3schools.com/spaces",
	"W3Schools",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/510px-W3Schools_logo.svg.png", 
	"W3Schools",
	"&emsp; &emsp;"
	);
	
	
	madeWithElements(
		"https://www.bitmoji.com",
		"Bitmoji",
		"https://www.bitmoji.com/favicon/b7cc4bae.favicon-152.cache.png",
		"Bitmoji",
		""
	)
	