import { combineReducers } from 'redux'
import { assessment } from './assessment-reducer'
import { error } from './error-reducer'
import { loading } from './loading-reducer'
import { personalities } from './personalities-reducer'
import { results } from './results-reducer'
import { slides } from './slides-reducer'
import { tests } from './tests-reducer'
import { user } from './user-reducer'

export const rootReducer = combineReducers({
  assessment,
  error,
  loading,
  personalities,
  results,
  slides,
  tests,
  user
})