var sonnet = document.getElementById("sonnet").innerHTML;
var output = document.getElementById("output");

output.innerHTML += "<p>Orphans starting position: " + sonnet.indexOf("orphans") + "</p>";
output.innerHTML += "<p>Number of characters in sonnet: " + sonnet.length + "</p>";
sonnet = sonnet.replace("winter", "yuletide");
sonnet = sonnet.replace(/the /g, "a large ");
document.getElementById("sonnet").innerHTML = sonnet;