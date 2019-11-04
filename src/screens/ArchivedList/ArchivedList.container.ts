import {connect} from 'react-redux'
import {compose} from 'redux'
import {todosSelectors, todosActions} from 'modules/todos'
import {AppStateType} from 'types'
import ArchivedList from './ArchivedList'

const mapStateToProps = (state: AppStateType) => ({
  todos: todosSelectors.archivedTodos(state),
})

const mapDispatchToProps = {
  toggleTodoList: todosActions.toggleTodoList
}

const ArchivedListContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ArchivedList)

export default ArchivedListContainer
