// script.js
let correctAnswers = 0;
let totalQuestions = 10;

function checkAnswer(button, isCorrect) {
  const questionDiv = button.parentElement;

  // Desativar os botões da questão atual
  questionDiv.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
  });

  if (isCorrect) {
    button.style.backgroundColor = "green";
    correctAnswers++;
  } else {
    button.style.backgroundColor = "red";
  }

  const answeredQuestions = document.querySelectorAll("button:disabled").length / 2;
  if (answeredQuestions === totalQuestions) {
    showResults();
  }
}

function showResults() {
  const modal = document.getElementById("resultModal");
  const score = document.getElementById("modalScore");

  score.textContent = correctAnswers;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("resultModal");
  modal.style.display = "none";
}

function resetQuiz() {
  correctAnswers = 0;

  document.querySelectorAll(".question button").forEach(button => {
    button.disabled = false;
    button.style.backgroundColor = "";
  });

  closeModal();
}

function goToSite() {
  window.location.href = "https://bertinmarquez84.wixsite.com/o-despertar-qa";
}

document.getElementById("retryBtn").addEventListener("click", resetQuiz);
document.getElementById("siteBtn").addEventListener("click", goToSite);
document.querySelector(".close").addEventListener("click", closeModal);

window.onclick = function(event) {
  const modal = document.getElementById("resultModal");
  if (event.target == modal) {
    closeModal();
  }
};
