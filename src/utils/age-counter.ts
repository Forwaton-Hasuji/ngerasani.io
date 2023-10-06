import dayjs from 'dayjs'

export const ageCounter = (dob: string) => {
  const now = dayjs(Date.now())
  return now.diff(dob, 'year')
}
