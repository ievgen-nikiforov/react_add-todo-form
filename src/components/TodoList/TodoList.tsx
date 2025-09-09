import { TodoInfo } from '../TodoInfo';
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};
interface TodoListProps {
  todos: Todo[];
}
export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <section className="TodoList">
      {todos.map(el => (
        <TodoInfo todo={el} />
      ))}
    </section>
  );
};
