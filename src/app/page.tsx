'use client';

import Header from '@/components/Header';
import ToDoList from '@/components/ToDoList';
import { TodoProvider } from '@/context/TodoContext';
import { Box, Container, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <TodoProvider>
        <Container>
          <Box mb="10px">
            <Header />
          </Box>

          <ToDoList />
        </Container>
      </TodoProvider>
    </>
  );
}
