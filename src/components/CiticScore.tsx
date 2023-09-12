import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

export default function CiticScore({ score }: Props): JSX.Element {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  )
}
