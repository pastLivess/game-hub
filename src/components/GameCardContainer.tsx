import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function GameCardContainer({ children }: Props): JSX.Element {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.15s ease-in',
      }}
      borderRadius={10}
      overflow='hidden'>
      {children}
    </Box>
  )
}
