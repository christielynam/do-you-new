import React, { Component } from 'react'
import './Results.scss'
import { fetchResults } from '../../thunks/fetchResults'
import IntroExtroResults from '../../components/IntroExtroResults'
import CoreResults from '../../components/CoreResults'
import CareerResults from '../../components/CareerResults'
import HeroesResults from '../../components/HerosResults'
import MoviesResults from '../../components/MoviesResults'
import PersuasionResults from '../../components/PersuasionResults'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Results extends Component {

  componentDidMount() {
    if (this.props.assessment !== {}) {
      this.props.fetchResults(this.props.assessment.id);
    }
  }

  handleResultsDisplay() {
    const { results } = this.props;
    const { deck_id } = results

    switch (deck_id) {
      case 'introvert-extrovert':
        return <IntroExtroResults {...results} />
      case 'career-deck' :
        return <CareerResults {...results} />
      case 'core':
        return <CoreResults {...results} />
      case 'super-hero':
        return <HeroesResults {...results} />
      case 'persuasion':
        return <PersuasionResults {...results} />
      case 'movies':
        return <MoviesResults {...results} />
      default:
        break
    }
  }

  render() {
    if (!this.props.user.id) {
      return <Redirect to='/login' />
    }

    return (
      <div className='outside-container'>
        <div className='inside-container'>
          <h2 className='results-title'>
            your assessment results.
          </h2>
          <div className='results-container'>
            { this.handleResultsDisplay() }
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  assessment: state.assessment,
  results: state.results
})

export const mapDispatchToProps = dispatch => ({
  fetchResults: (testId) => dispatch(fetchResults(testId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
