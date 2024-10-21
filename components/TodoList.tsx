"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <div className="space-y-2">
        {todos.map(todo => (
          <Card 
            key={todo.id} 
            className={cn(
              "p-4 flex items-center justify-between cursor-pointer transition-colors duration-200",
              todo.completed ? "bg-red-100 dark:bg-red-900" : "bg-green-100 dark:bg-green-900"
            )}
            onClick={() => toggleTodo(todo.id)}
          >
            <span className={cn(
              "flex-grow",
              todo.completed && "line-through text-gray-500 dark:text-gray-400"
            )}>
              {todo.text}
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}