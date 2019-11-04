import {connect} from 'react-redux'
import {compose} from 'redux'
import {todosSelectors, todosActions} from 'modules/todos'
import {AppStateType} from 'types'
import ActiveList from './ActiveList'

const mapStateToProps = (state: AppStateType) => ({
  todos: todosSelectors.activeTodos(state),
})

const mapDispatchToProps = {
  toggleTodoList: todosActions.toggleTodoList,
  addTodoList: todosActions.addTodoList
}

const ActiveListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ActiveList)

export default ActiveListContainer
