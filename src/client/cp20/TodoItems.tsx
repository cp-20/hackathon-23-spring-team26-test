import { css } from '@emotion/react';
import type { FC } from 'react';
import { TodoItem } from '@/client/cp20/TodoItem';

export type Item = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoItemsProps = {
  items: Item[];
  updateItemCompletedHandler: (id: string, completed: boolean) => void;
};

export const TodoItems: FC<TodoItemsProps> = ({
  items,
  updateItemCompletedHandler,
}) => {
  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
      `}
    >
      {items.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          updateItemCompletedHandler={updateItemCompletedHandler}
        />
      ))}
    </ul>
  );
};
