'use client';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonComp from './ButtonComp';

export default function BoxComp({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  return (
    <>
      <Box
        borderColor="orange.500"
        p="20px"
        borderWidth="1px"
        borderRadius="base"
        bg="#242320"
        mb="20px"
      >
        <Flex justifyContent="space-between">
          <Box>
            <Heading color="white" fontSize="2xl">
              {title}
            </Heading>
            <Text color="white">{details}</Text>
          </Box>
          <ButtonComp content="X" size={'1px'} />
        </Flex>
      </Box>
    </>
  );
}
