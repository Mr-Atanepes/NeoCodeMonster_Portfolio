// var mode = document.getElementById("mode");
// var btn = document.getElementById("btn");
// mode.addEventListener("change", ()=>{
//     alert("Hellooo!!");
// })
// var result = document.getElementById("result");
// result.textContent = "The checkbox is checked.";
// result.textContent = "The checkbox is not checked.";
//    --main-color: ;
//   --secondary-color: ;
// alert("yay its checked!!");
// document.documentElement.style.setProperty("background", "#04e757");
// alert("its not checked check the chekced or not checked")

// var  mode = document.getElementbyID("mode")

var checkbox = document.getElementById("mode");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty("--second-color", "white");
    document.documentElement.style.setProperty("--third-color", "black");
    document.documentElement.style.setProperty("--text-color", "black"); // Change text color
  } else {
    document.documentElement.style.setProperty("--main-color", "#071e2e");
    document.documentElement.style.setProperty("--second-color", "#03adea");
    document.documentElement.style.setProperty("--third-color", "black");
    document.documentElement.style.setProperty("--text-color", "white"); // Change text color
  }
});
