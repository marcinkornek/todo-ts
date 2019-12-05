import {connect} from 'react-redux';
import {compose} from 'redux';
import {get} from 'lodash';
import {todosSelectors, todosActions} from 'modules/todos';
import {AppStateType, NavigationRouteProps} from 'types';
import TodosList from './TodosList';

const mapStateToProps = (
  state: AppStateType,
  ownProps: NavigationRouteProps,
) => {
  const listKey = get(ownProps, 'route.params.key');

  return {
    listKey,
    todos: todosSelectors.todosByKey(state, listKey),
  };
};

const mapDispatchToProps = {
  addTodo: todosActions.addTodo,
  toggleTodo: todosActions.toggleTodo,
  updateTodo: todosActions.updateTodo,
  deleteTodo: todosActions.deleteTodo,
};

const TodosListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TodosList);

export default TodosListContainer;
