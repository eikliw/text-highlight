function highlightWords() {
    const mainText = document.getElementById("mainText").value;
    const wordsToHighlight = document.getElementById("wordsToHighlight").value.split('\n');

    const foundWordsList = document.getElementById("foundWordsList");
    const notFoundWordsList = document.getElementById("notFoundWordsList");

    foundWordsList.innerHTML = "";
    notFoundWordsList.innerHTML = "";

    wordsToHighlight.forEach(word => {
        if (mainText.includes(word)) {
            const listItem = document.createElement("li");
            listItem.textContent = word;
            foundWordsList.appendChild(listItem);
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = word;
            notFoundWordsList.appendChild(listItem);
        }
    });
}
