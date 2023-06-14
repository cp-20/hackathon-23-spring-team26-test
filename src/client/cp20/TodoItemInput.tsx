import { css } from '@emotion/react';
import { Button, Group, Input } from '@mantine/core';
import { useState, type FC } from 'react';

export type TodoItemInputProps = {
  inputHandler: (input: string) => void;
};

export const TodoItemInput: FC<TodoItemInputProps> = ({ inputHandler }) => {
  const [input, setInput] = useState('');

  return (
    <form
      css={css`
        width: 100%;
      `}
      onSubmit={(e) => {
        e.preventDefault();
        if (input === '') return;
        inputHandler(input);
        setInput('');
      }}
    >
      <Group>
        <Input
          css={css`
            flex: 1;
          `}
          placeholder="タスクを入力してください"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button type="submit">追加</Button>
      </Group>
    </form>
  );
};
