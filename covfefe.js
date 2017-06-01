nodes = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

for(i=0; i<nodes.length; i++) {
  if(nodes[i].textContent.length==0) continue;
  else if(nodes[i].innerHTML.substring(0,2)=="<a") continue;
  nodes[i].innerHTML += " covfefe";
}
