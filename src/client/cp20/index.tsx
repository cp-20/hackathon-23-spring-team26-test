import { css } from '@emotion/react';
import { TodoItemInput } from '@/client/cp20/TodoItemInput';
import { TodoItems } from '@/client/cp20/TodoItems';
import { useTodoItems } from '@/client/cp20/useTodoItems';

export const TodoList = () => {
  const { items, addItem, updateItemCompletedStatus } = useTodoItems();

  return (
    <div
      css={css`
        display: flex;
        width: min(100vw, 720px);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        margin: 0 auto;
        gap: 2rem;
      `}
    >
      <h1>cp20&apos;s Todo List</h1>

      <TodoItems
        items={items}
        updateItemCompletedHandler={updateItemCompletedStatus}
      />
      <TodoItemInput inputHandler={addItem} />
    </div>
  );
};
