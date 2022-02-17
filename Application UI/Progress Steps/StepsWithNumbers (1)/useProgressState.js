import * as React from 'react'

const determineState = (activeIndex, index) => {
  if (activeIndex > index) return 'complete'
  if (activeIndex === index + 1) return 'active'
  return 'incomplete'
}

export const useProgressState = (steps) => {
  const [activeStep, setActiveStep] = React.useState(1)
  const factor = steps.length - 1
  return {
    value: (100 / factor) * (activeStep - 1),
    getState: (index) => determineState(activeStep, index),
    onClick: (index) => () => setActiveStep(index + 1),
  }
}
