import { format } from 'date-fns';

export class DateHandler {
    static formatDate(date) {
        if (!Date.parse(date)) {
            return "no date"
        } else {
            return format(date, "do MMMM yyyy")
        }
    }
}