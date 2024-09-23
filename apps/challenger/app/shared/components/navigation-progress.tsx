'use client'
import { AppProgressBar as NProgressBar } from 'next-nprogress-bar'

export const NavigationProgress = () => {
  return (
    <NProgressBar
      color="#173a88"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}
