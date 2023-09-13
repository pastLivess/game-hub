import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props {
  onSearch: (searchText: string) => void
}
export default function NavBar({ onSearch }: Props): JSX.Element {
  return (
    <HStack justifyContent='space-between'>
      <Image boxSize='60px' src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}
