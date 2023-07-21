function highlightWords() {
    const mainText = document.getElementById("mainText").value.toLowerCase();
    const wordsToHighlight = document.getElementById("wordsToHighlight").value.split('\n').map(word => word.trim().toLowerCase());

    const foundWordsList = document.getElementById("foundWordsList");
    const notFoundWordsList = document.getElementById("notFoundWordsList");

    foundWordsList.innerHTML = "";
    notFoundWordsList.innerHTML = "";

    let totalFoundCount = 0;

    wordsToHighlight.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        const matches = mainText.match(regex);
        const count = matches ? matches.length : 0;
        
        if (count > 0) {
            totalFoundCount += count;
            const listItem = document.createElement("li");
            listItem.textContent = `${word} - ${count} times`;
            foundWordsList.appendChild(listItem);
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = word;
            notFoundWordsList.appendChild(listItem);
        }
    });

    const percentageFound = ((totalFoundCount / wordsToHighlight.length) * 100).toFixed(2);
    
    const percentageDiv = document.createElement("div");
    percentageDiv.textContent = `Percentage of words found: ${percentageFound}%`;
    
    document.getElementById("output").appendChild(percentageDiv);
}
