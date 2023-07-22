function openTab(tabName) {
    /** Handle on click scenario */
    const tabContent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    /** Handle on click scenario */
    const tabLinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("selected");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("selected");

    // Save the selected tab in the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('tab', tabName);
    history.replaceState({}, '', `${location.pathname}?${urlParams}`);
}


function checkQuiz() {
    const correctAnswers = ["a", "c"]; // Replace with the correct answers for each question

    const quizForm = document.forms[0];
    let score = 0;

    for (let i = 0; i < quizForm.elements.length - 1; i++) {
        const userAnswer = quizForm.elements[i].value;
        if (userAnswer === correctAnswers[i]) {
            score++;
        }
    }

    const quizResult = document.getElementById("quiz-result");
    quizResult.textContent = `You scored ${score} out of ${correctAnswers.length}`;

    return false; // Prevent form submission
}


function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', () => {
    const tabParam = getParameterByName('tab');
    if (tabParam) {
        openTab(tabParam);

        // Highlight the initially selected tab based on the query parameter
        const tabLinks = document.getElementsByClassName("tablink");
        for (let i = 0; i < tabLinks.length; i++) {
            if (tabLinks[i].textContent.toLowerCase() === tabParam.toLowerCase()) {
                tabLinks[i].classList.add("selected");
                break;
            }
        }
    }
});
