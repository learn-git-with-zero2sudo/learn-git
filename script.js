const fundamentalList = document.getElementById('fundamental-list');

const addFundamentalForm = document.getElementById('add-fundamental')

const newFundamentalField = document.getElementById('new-fundamental')

addFundamentalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newFundamental = newFundamentalField.value;
    addGitFundamental(newFundamental);
    addFundamentalForm.reset();
})

function hideAllTabContentsAndTabStyles() {
    const tabContent = document.getElementsByClassName("tabcontent");

    // On initial load hide all tabContents
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // On initial load, remove any selected information on the tab
    const tabLinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("selected");
    }

}

// tabName should be a query param value
function getTabContentIdFromCurrentTabId(tabName) {
    if (tabName === 'tab-fundamentals') {
        return 'fundamentals';
    }

    if (tabName === 'tab-quiz') {
        return 'quiz';
    }

    console.error('Invalid tab query param! Update this function to handle this tab query param: ', tabName);
}

function displayTabContentAndStyleSelectedTab(tabName) {
    document.getElementById(getTabContentIdFromCurrentTabId(tabName)).style.display = "block";
    document.getElementById(tabName).classList.add("selected");
}

function handleTabSelection(tabName) {
    initializeTab(tabName);
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

function initializeTab(tabParam) {
    hideAllTabContentsAndTabStyles();
    displayTabContentAndStyleSelectedTab(tabParam);
}

document.addEventListener('DOMContentLoaded', () => {
    const tabParam = getParameterByName('tab');

    if (tabParam) {
        initializeTab(tabParam);
    } else {
        // If the tab parameter is not present, set it to 'fundamentals'
        history.replaceState({}, '', `${location.pathname}?tab=tab-fundamentals`);
        window.location.reload();
    }
});

function addGitFundamental(fundamental) {
    const newFundamental = document.createElement('li')
    newFundamental.textContent = fundamental;
    fundamentalList.appendChild(newFundamental);
}
