import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export default function SearchInput() {
  return (
    <InputGroup w={96} color="#5A60FF" borderColor="#5A60FF">
      <Input
        pr="4.5rem"
        placeholder="Pesquisar em máquinas"
        borderRadius="360px"
      />

      <InputRightElement width="4.5rem">
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  )
}
