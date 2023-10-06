import dayjs from 'dayjs'

export const toLongDate = (date: string) => {
  return dayjs(date).format('DD MMMM YYYY')
}
