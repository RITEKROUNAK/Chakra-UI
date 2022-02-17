import * as React from 'react'

const determineState = (activeIndex: number, index: number) => {
  if (activeIndex > index) return 'complete'
  if (activeIndex === index + 1) return 'active'
  return 'incomplete'
}

export const useProgressState = <T extends Record<string, unknown>[]>(steps: T) => {
  const [activeStep, setActiveStep] = React.useState(1)
  const factor = steps.length - 1
  return {
    value: (100 / factor) * (activeStep - 1),
    getState: (index: number) => determineState(activeStep, index),
    onClick: (index: number) => () => setActiveStep(index + 1),
  }
}
