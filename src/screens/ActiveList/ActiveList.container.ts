import {connect} from 'react-redux'
import {compose} from 'redux'
import {todosSelectors} from 'modules/todos'
import {AppStateType} from 'types'
import ActiveList from './ActiveList'

const mapStateToProps = (state: AppStateType) => ({
  todos: todosSelectors.activeTodos(state),
})

const ActiveListContainer = compose(
  connect(
    mapStateToProps,
    null
  )
)(ActiveList)

export default ActiveListContainer
