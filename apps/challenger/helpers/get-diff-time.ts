export const getDiffTime = (updatedAt: Date) => {
  const currentTime = new Date().getTime()
  const updatedTime = updatedAt.getTime()

  const diffTime = currentTime - updatedTime
  const timeMinutes = diffTime / (1000 * 60)
  const timeHours = diffTime / (1000 * 3600)
  const timeDays = timeHours / 24

  if (!Math.floor(timeMinutes)) {
    return 'Today'
  }

  const minutes = Math.floor(timeMinutes)

  if (minutes < 60) {
    return `${minutes}m ago`
  }

  const hours = Math.floor(timeHours)

  if (hours < 24) {
    return `${hours}h ago`
  }

  const days = Math.floor(timeDays)

  if (days < 7) {
    return `${days}d ago`
  }

  const weeks = Math.floor(timeDays / 7)

  if (weeks < 4) {
    return `${weeks}w ago`
  }

  const months = Math.floor(weeks / 4)

  if (months < 12) {
    return `${months}mth ago`
  }

  const year = Math.floor(months / 12)

  return `${year}y ago`
}
