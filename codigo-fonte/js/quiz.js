function quizzesConcluidos(quizIndex) {
    const email = localStorage.getItem('loggedInUserEmail');
    
    if (quizIndex !== null && !isNaN(quizIndex) && quizIndex >= 0) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        const quizIndexInt = parseInt(quizIndex);

        users = users.map(user => {
            if (user.email === email) {
                user.quizzesConcluidos = user.quizzesConcluidos || [];
                if (!user.quizzesConcluidos.includes(quizIndexInt)) {
                    user.quizzesConcluidos.push(quizIndexInt);
                }
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(users));
    } else {
        console.error('Índice de quiz inválido:', quizIndex);
    }
}
