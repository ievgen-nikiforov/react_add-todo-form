import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};
interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo = ({ todo }: TodoInfoProps) => {
  return (
    <article
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo userID={todo.userId} />
    </article>
  );
};
