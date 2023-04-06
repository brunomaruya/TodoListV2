import ButtonComp from '@/common/ButtonComp';
import { useTodo } from '@/context/TodoContext';
import { FormControl, Flex, Input, Box, Button } from '@chakra-ui/react';

import React from 'react';

export default function Header() {
  const { title, setTitle, handleSubmit, details, setDetails } = useTodo();

  return (
    <div>
      <Box mt="10px" w="100%">
        <form onSubmit={handleSubmit}>
          <Flex alignItems="center" gap="10px" h="50px">
            <Flex direction="column" w="100%">
              <Input
                placeholder="Title..."
                borderColor="orange.500"
                borderWidth="1px"
                mb="3px"
                h="100%"
                fontSize="15px"
                backgroundColor="#242320"
                color="white"
                focusBorderColor="orange.300"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
              <Input
                placeholder="About..."
                borderColor="orange.500"
                borderWidth="1px"
                h="100%"
                fontSize="15px"
                backgroundColor="#242320"
                color="white"
                focusBorderColor="orange.300"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
              />
            </Flex>
            <ButtonComp content={'+'} size="50px" type="submit" />
          </Flex>
        </form>
      </Box>
    </div>
  );
}
