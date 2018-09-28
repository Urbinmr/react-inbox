import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Toolbar from '../containers/Toolbar'
import Messages from '../containers/Messages'

describe('renders with proper components', () => {
  let app
  beforeEach(() => {
    app = shallow(<App />)
  })

  it('renders with Toolbar', () => {
    expect(app.find(Toolbar)).toHaveLength(1)
  })
  it('renders with Messages', () => {
    expect(app.find(Messages)).toHaveLength(1)
  })
})
