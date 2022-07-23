function startApp(e) {
  e.preventDefault();
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  function countOccurences(string, word) {
    return string.split(word).length - 1;
  }


  function redactWords() {
    let badWords = document.getElementById("searchtext").value;
    let text = document.getElementById("query").value;
    let wordsMatched = countOccurences(badWords, text)
    let query = new RegExp("(\\b" + text + "\\b)", "gim");
    let newWords = document.getElementById("newwords").value;
    
    if (query.test(badWords) === true) {
      let enew = badWords.replace(/(<span>|<\/span>)/igm, "");
      document.getElementById("searchtext").innerHTML = enew;
      var newe = enew.replace(query, `${newWords}`);
    }
    document.getElementById("searchtext").value = newe;
    


    let total = document.getElementById("total");
  total.classList.add("totalWords");
    document.getElementById("searchedwords").textContent = "Total number of scanned words: " + " " + badWords.length;
    document.getElementById("matchedwords").textContent = "Total number of matched words: " + " " + wordsMatched;

    
  }
  document.getElementById("btn").addEventListener("click", redactWords)
}

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //