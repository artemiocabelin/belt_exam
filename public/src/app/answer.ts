export class Answer {
    constructor(
        public _id: number = null,
        public answer: string = '',
        public details: number = null,
        public creator: string = '',
        public likes: object[] = [],
        public _question: string = '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) {}
}