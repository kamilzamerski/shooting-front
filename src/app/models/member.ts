export class Member {
    constructor(
        public id?: number,
        public name?: string,
        public surname?: string,
        public pesel?: number,
        public date_of_join?: string,
        public address_street?: string,
        public address_street_no?: string,
        public address_apartment_no?: string,
        public post_code?: string,
        public city?: string,
        public shooting_license?: string,
        public email?: string,
        public phone?: string,
        public active_to?: string) {
    }
}
