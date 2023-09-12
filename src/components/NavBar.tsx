import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
export default function NavBar(): JSX.Element {
  return (
    <HStack>
      <Image boxSize='60px' src={logo} />
      <Text>NavBar</Text>
    </HStack>
  )
}
