'use client';
import { Box, Flex, Heading, Text, useStatStyles } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ButtonComp from './ButtonComp';
import { useTodo } from '@/context/TodoContext';
import { TodoActionKind } from '@/types/@types.todo';

export default function BoxComp({
  title,
  details,
  id,
  complete,
}: {
  title: string;
  details: string;
  id: number;
  complete: boolean;
}) {
  const { dispatch } = useTodo();

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
        <Flex justifyContent="space-between" gap="10px">
          <Box mr="auto">
            <Heading
              color="white"
              fontSize="2xl"
              textDecoration={complete ? 'line-through' : 'none'}
            >
              {title}
            </Heading>

            <Text color="white">{details}</Text>
          </Box>

          <div
            onClick={() =>
              dispatch({
                type: TodoActionKind.CHECK_TODO,
                payload: { id: id },
              })
            }
          >
            <ButtonComp content="V" size="1px" />
          </div>

          <div
            onClick={() =>
              dispatch({
                type: TodoActionKind.DELETE_TODO,
                payload: { id: id },
              })
            }
          >
            <ButtonComp content="X" size={'1px'} />
          </div>
        </Flex>
      </Box>
    </>
  );
}
