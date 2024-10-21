import TodoList from '@/components/TodoList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beautiful To-Do App',
  description: 'A simple and elegant to-do app built with Next.js and shadcn/ui',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Beautiful To-Do App</h1>
      <TodoList />
    </div>
  );
}