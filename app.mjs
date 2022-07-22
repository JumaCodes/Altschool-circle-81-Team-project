 function countOccurences(string, word) {
    return string.split(word).length - 1;
  }


  function redactWords() {
    var badWords = document.getElementById("searchtext").value;
    var text = document.getElementById("query").value;
    var wordsMatched = countOccurences(badWords, text)
    var query = new RegExp("(\\b" + text + "\\b)", "gim");
    var newWords = document.getElementById("newwords").value;
    if (query.test(badWords) === true) {
      var enew = badWords.replace(/(<span>|<\/span>)/igm, "");
      document.getElementById("searchtext").innerHTML = enew;
      var newe = enew.replace(query, `${newWords}`);
    }
    document.getElementById("searchtext").value = newe;



    document.getElementById("searchedwords").textContent = "total number of scanned words: " + " " + badWords.length;
    document.getElementById("matchedwords").textContent = "total number of matched words: " + " " + wordsMatched;

    document.getElementById("scrambledwords").textContent = "total number of scrambled character: " + " " + wordsMatched.length;
  }

function startApp(e) {
  e.preventDefault();
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  document.getElementById("btn").addEventListener("click", redactWords)

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //