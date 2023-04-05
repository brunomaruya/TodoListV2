import React from 'react';
import { Button } from '@chakra-ui/react';

export default function ButtonComp({
  content,
  size,
  type,
}: {
  content: string;
  size: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) {
  return (
    <Button
      borderColor="orange.500"
      borderWidth="1px"
      minW={size}
      minH={size}
      backgroundColor="#1b1a17"
      color="white"
      _hover={{ backgroundColor: 'orange.500' }}
      type={type}
    >
      {content}
    </Button>
  );
}
