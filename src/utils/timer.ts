const getTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone

const getOffSetHour = () => -(new Date().getTimezoneOffset() / 60)

const isInFuture = (date: Date): boolean => new Date(date) > new Date()

export { isInFuture, getTimeZone, getOffSetHour }
