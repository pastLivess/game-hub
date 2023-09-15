import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
interface Props {
  onSelectPlatform: (platform: Platform) => void
  platformId?: number
}
export default function PlatformSelector({
  onSelectPlatform,
  platformId,
}: Props) {
  const { data: platforms, error } = usePlatforms()
  const selectedPlatform = usePlatform(platformId)
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
