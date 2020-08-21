import { connect } from 'react-redux'
import { getSearch, clearRepos } from '../actions'
import SearchMenu from '../components/SearchMenu'

const mapStateToProps = (state, ownProps) => ({
  defaultWord: ownProps.defaultWord
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSearch: (input) => dispatch(getSearch(input)),
  onClear: () => dispatch(clearRepos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMenu)
