
//function to share the advice in Twitter
function getTwitter(){
  const advice = document.getElementById("advice-container").textContent;
  shareOnTwitter(advice);
}

//function that generates a share URL with the current advice as the text content. 
//The encodeURIComponent() function encodes a URI by replacing each instance of certain characters
function shareOnTwitter(advice) {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    advice
  )}`;
  window.open(url, "_blank");
}

//Function that fetches API url.
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip.advice;
}
//Function that show the advices when we click de button
function updateAdvice(advice) {
  const container = document.getElementById("advice-container");
  container.textContent = advice;
}

//Funcion that calls funtion getAdvice, updateAvice and change the background Color.
async function getStart(){
  const advice = await getAdvice();
  updateAdvice(advice);
  document.getElementById("advice-container").style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 360
  )}, 50%, 70%)`;
}


(()=>{
    getStart() ;
})();


