function quizzesConcluidos(quizIndex) {
    const quizzesConcluidos = JSON.parse(localStorage.getItem('quizzesConcluidos')) || [];
    if (!quizzesConcluidos.includes(quizIndex)) {
        quizzesConcluidos.push(quizIndex);
        localStorage.setItem('quizzesConcluidos', JSON.stringify(quizzesConcluidos));
    }
}
