import { StatCardData } from './StatCard'

export const data: StatCardData[] = [
  {
    id: 'bandwidth',
    title: 'Bandwidth used',
    value: 96046924900,
    limit: 107374182400,
    formattedData: {
      value: '916 MB',
      limit: '100 GB',
    },
  },
  {
    id: 'build-minutes',
    title: 'Build minutes used',
    value: 51,
    limit: 300,
  },
  {
    id: 'concurrent-builds',
    title: 'Concurrent builds',
    value: 2,
    limit: 10,
  },
]
