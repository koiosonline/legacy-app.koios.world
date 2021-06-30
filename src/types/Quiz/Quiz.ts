export type typeQuiz = {
        chapter: string;
        question: string;
        multipleAnswers: boolean;
        answers: [
            {
                A: string;
                correct: boolean;
            },
            {
                B: string;
                correct: boolean;
            },
            {
                C: string;
                correct: boolean;
            },
            {
                D: string;
                correct: boolean;
            }
        ];
    }