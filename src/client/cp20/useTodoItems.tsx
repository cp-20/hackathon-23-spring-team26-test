import { useState } from 'react';
import type { Item } from '@/client/cp20/TodoItems';

const defaultItems: Item[] = [
  { id: '1', title: '牛乳を買う', completed: false },
  { id: '2', title: 'ハッカソン', completed: true },
];

export const useTodoItems = () => {
  const [items, setItems] = useState(defaultItems);

  const addItem = (title: string) => {
    const newItem = {
      id: '' + Date.now() + Math.random().toString(),
      title,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const updateItemCompletedStatus = (id: string, completed: boolean) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      }),
    );
  };

  return { items, addItem, updateItemCompletedStatus };
};
