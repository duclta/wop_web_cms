import moment from "moment"

export const toLongDateTime = (dateTime: string) => {
    return moment(dateTime).format('HH:mm:ss DD/MM/YY')
}