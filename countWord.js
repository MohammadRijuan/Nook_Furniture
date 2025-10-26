const textField = document.getElementById('text');
const wordCount = document.getElementById('wordCount');
const maxWords = 200;

function countWord() {
    let text = textField.value.trim();

    const words = text.split(/\s+/).filter(word => word.length > 0);

    let currentCount = words.length;
 
    if (currentCount > maxWords) {
        const trimmedText = words.slice(0, maxWords).join(" ");
        textField.value = trimmedText;
        currentCount = maxWords;
    }

    wordCount.innerText = `${currentCount} / ${maxWords}`;
}

textField.addEventListener("input", countWord);
