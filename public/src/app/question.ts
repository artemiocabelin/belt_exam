export class Question {
    constructor(
        public id: number = null,
        public question: string = '',
        public description: number = null,
        public creator: string = '',
        public answers: object[] = [],
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) {}
}