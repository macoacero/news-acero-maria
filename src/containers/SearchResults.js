import { connect } from 'react-redux';
import ResultsList from '../components/ResultsList';
import { getCategory } from '../actions'


const mapStateToProps = state => {
  console.log('state', state)
  return {
  articles: state.articles,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
  
}};

console.log()

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad:  (id) => dispatch(getCategory(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsList)

