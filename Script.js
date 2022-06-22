const titulo = document.querySelector("#fisrt");

titulo.addEventListener("mouseover", function() {
    titulo.style.color = "#69436C";
});

titulo.addEventListener("mouseout", function() {
    titulo.style.color = "";
});

const project = document.getElementById("one");

project.addEventListener("mouseover", function() {
   var color1 = project.style.color = "#6a2f6a";
});

project.addEventListener("mouseout", function() {
    project.style.color = "";
});

const service = document.getElementById("two");

service.addEventListener("mouseover", function() {
    service.style.color = "#6a2f6a";
});

service.addEventListener("mouseout", function() {
    service.style.color = "";
});

const footer = document.getElementById("footer")

footer.addEventListener("mouseover", function(){
    footer.style.color = "#ffffff"

});
footer.addEventListener("mouseout", function() {
    footer.style.color = "";
});