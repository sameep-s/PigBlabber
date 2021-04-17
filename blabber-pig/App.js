var btnTranslate = document.querySelector("#btnTranslate")
var txtInput = document.querySelector("#txt-area")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(text){
    return serverURL +"?"+"text="+ text
  }
  
  function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! please try again later")
  }
  
  btnTranslate.addEventListener("click",function clickEventHandler()
  {
  var inputText = txtArea.value;
  
  fetch(getTranslationURL(inputText))
    .then(response=> response.json())
    .then(json=>{
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler)
  })