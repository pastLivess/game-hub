import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
export default function NavBar(): JSX.Element {
  return (
    <HStack justifyContent='space-between'>
      <Image boxSize='60px' src={logo} />
      <ColorModeSwitch />
    </HStack>
  )
}
