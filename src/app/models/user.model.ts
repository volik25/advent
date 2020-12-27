export interface User {
    user_id: string;
    self_name: string;
    domain: string;
    faculty?: string;
    course?: string;
    answers: AnswerBack[];
}

interface AnswerBack {
    answer_id: string;
    answer: string;
    danger?: boolean;
}