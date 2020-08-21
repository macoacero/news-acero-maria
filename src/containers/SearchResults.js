import { connect } from 'react-redux'
import ResultsList from '../components/ResultsList'
import { getCategory } from '../actions'

const mapStateToProps = state => ({
  articlesByCategory: state.loadingCategory,
  articlesByWord: state.loadingSearch,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad:  (id) => dispatch(getCategory(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsList)

