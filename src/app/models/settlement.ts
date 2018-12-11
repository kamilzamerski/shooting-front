export class Settlement {
    constructor(
        public id?: number,
        public member_id?: number,
        public description?: string,
        public amount?: number,
        public year?: number) {
    }
}
