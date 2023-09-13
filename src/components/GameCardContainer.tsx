import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function GameCardContainer({ children }: Props): JSX.Element {
  return (
    <Box borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  )
}
