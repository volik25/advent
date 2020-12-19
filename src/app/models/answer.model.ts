export interface Answer {
    id: number;
    bgUrl: string;
    cardColor: string;
    text: string;
    blackText?: boolean;
    class?: string;
    images?: string[];
}

export const answers: Answer [] = [
    {
        id: 21,
        bgUrl: 'assets/backgrounds/answer_1.svg',
        cardColor: '#17B0AB',
        text: 'Кто издал указ, согласно которому Новый год необходимо отмечать первого января?',
        class: 'sock',
        images: ['assets/resources/sock.svg']
    },
    {
        id: 22,
        bgUrl: 'assets/backgrounds/answer_2.svg',
        cardColor: '#17B0AB',
        text: 'А сколько на самом деле идёт один год?\n– 365 дней;\n– 364 дня 22 часа 53 минуты;\n– 365 дней 5 часов 49 минут 30 секунд;\n– один год идёт один год.'
    },
    {
        id: 23,
        bgUrl: 'assets/backgrounds/answer_3.svg',
        cardColor: '#FFFFFF',
        blackText: true,
        text: 'Приведи пример оригинального раскрытия аббревиатуры своего факультета, подведя её под новогоднюю тематику. Оригинальность приветствуется!'
    },
    {
        id: 24,
        bgUrl: 'assets/backgrounds/answer_4.svg',
        cardColor: '#DF4A4E',
        text: 'Почему у Деда Мороза красный нос?'
    },
    {
        id: 25,
        bgUrl: 'assets/backgrounds/answer_5.svg',
        cardColor: '#17B0AB',
        text: 'Опиши как можно оригинальнее 3 твоих любимых новогодних фильма одним предложением.'
    },
    {
        id: 26,
        bgUrl: 'assets/backgrounds/answer_6.svg',
        cardColor: '#FFFFFF',
        blackText: true,
        text: 'Назови как можно больше новогодних проектов ССт.'
    },
    {
        id: 27,
        bgUrl: 'assets/backgrounds/answer_7.svg',
        cardColor: '#DF4A4E',
        text: 'Ты наверняка замечал, что в сообществе F&U выходят авторские рубрики. Сколько всего активных авторских рубрик на данный момент существует?'
    },
]

export const BaseAnswer: Answer = {
    id: 0,
    bgUrl: 'assets/backgrounds/answer_1.svg',
    cardColor: '#17B0AB',
    text: 'Неверный url'
}