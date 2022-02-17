import { useContext } from 'react'
import { StepContext } from './StepContext'

export const useStep = () => {
  const context = useContext(StepContext)

  if (!context) {
    throw Error('Wrap your step with `<Steps />`')
  } else {
    return context
  }
}
