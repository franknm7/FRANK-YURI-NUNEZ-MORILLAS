function checkAnswers() {
    // Obtener las respuestas del usuario
    const answers = document.forms["quiz-form"];
    const answer1 = answers.elements["question1"].value;
    const answer2 = answers.elements["question2"].value;
    const answer3 = answers.elements["question3"].value;
    const answer4 = answers.elements["question4"].value;
    const answer5 = answers.elements["question5"].value;
    
    // Verificar si todas las preguntas han sido respondidas
    if (answer1 === "" || answer2 === "" || answer3 === "" || answer4 === "" || answer5 === "") {
    alert("Por favor responde todas las preguntas para enviar tus respuestas.");
    return false;
    }
    
    // Verificar las respuestas correctas
    let correctAnswers = 0;
    if (answer1 === "madrid") { correctAnswers++; }
    if (answer2 === "amazonas") { correctAnswers++; }
    if (answer3 === "everest") { correctAnswers++; }
    if (answer4 === "asia") { correctAnswers++; }
    if (answer5 === "elefante") { correctAnswers++; }
    
    // Mostrar el resultado en el elemento “result”
    const result = document.getElementById("result");
    result.innerHTML = `Obtuviste ${correctAnswers} respuestas correctas de 5.`;
    result.classList.remove("hide");
    }
    