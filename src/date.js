import { format } from 'date-fns';

export class DateHandler {
    static formatDate(date) {
        if (!Date.parse(date)) {
            return "no date"
        } else {
            return format(date, "do MMMM yyyy")
        }
    }

    static formatDateForInput(date) {
        if (!Date.parse(date)) {
            return date
        }
       return format(date, "yyyy-MM-dd")
    }
}