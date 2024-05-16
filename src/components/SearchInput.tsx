import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export default function SearchInput() {
  return (
    <InputGroup w={96} color="primaryBlue400" borderColor="primaryBlue400">
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
