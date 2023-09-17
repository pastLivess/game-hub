import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import type { FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'

export default function SearchInput(): JSX.Element {
  const { setSearchText } = useGameQueryStore()
  const ref = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  function handlerSubmit(e: FormEvent) {
    e.preventDefault()
    if (ref.current) {
      setSearchText(ref.current.value)
      navigate('/')
    }
  }
  return (
    <form onSubmit={handlerSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
        />
      </InputGroup>
    </form>
  )
}
