import {createSelector} from 'reselect'
import {TodoItemType} from 'types'

const itemsSelector = state => state.todos.items

const activeTodos = createSelector(
  itemsSelector, items => items.filter((i: TodoItemType) => !i.isArchived)
)

const archivedTodos = createSelector(
  itemsSelector, items => items.filter((i: TodoItemType) => i.isArchived)
)

export {
  activeTodos,
  archivedTodos,
}
