import { css } from '@emotion/react';
import { Checkbox, Group } from '@mantine/core';
import type { FC } from 'react';
import type { Item } from '@/client/cp20/TodoItems';

export type TodoItemProps = {
  item: Item;
  updateItemCompletedHandler: (id: string, completed: boolean) => void;
};

export const TodoItem: FC<TodoItemProps> = ({
  item,
  updateItemCompletedHandler,
}) => {
  return (
    <li>
      <Group>
        <Checkbox
          checked={item.completed}
          onChange={(e) => {
            updateItemCompletedHandler(item.id, e.currentTarget.checked);
          }}
        />
        <p
          css={css`
            ${item.completed && `text-decoration: line-through;`}
          `}
        >
          {item.title}
        </p>
      </Group>
    </li>
  );
};
