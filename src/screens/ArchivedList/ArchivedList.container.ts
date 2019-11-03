import { connect } from 'react-redux'
import { compose } from 'redux'
import { todosSelectors } from 'modules/todos'
import {AppStateType} from 'types'
import ArchivedList from './ArchivedList'

const mapStateToProps = (state: AppStateType) => ({
  todos: todosSelectors.archivedTodos(state),
})

const ArchivedListContainer = compose(
  connect(
    mapStateToProps,
    null
  )
)(ArchivedList)

export default ArchivedListContainer
