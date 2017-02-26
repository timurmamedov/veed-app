import React, { PropTypes, Component } from 'react';
import classnames                      from 'classnames';

import './style.css';

export default class Form extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <form className='form'>
          <div className='form__field-wrapper'>
            <input
              className='form__field-input'
              type='text'
              id='email'
              value='timurmamedov@protonmail.com'
              placeholder='email'
              onChange={this._changeUsername}
              autoCorrect='off'
              autoCapitalize='off'
              spellCheck='false' />
            
          </div>
          <div className='form__field-wrapper'>
            <input
              className='form__field-input'
              id='password'
              type='password'
              value='password'
              placeholder='password'
              onChange={this._changePassword} 
              />
            
          </div>
          <div className='form__submit-btn-wrapper'>
            <button className='form__submit-btn' type='submit'>
              {this.props.btnText}
            </button>
          </div>
        </form>
    );
  }

  _changeUsername (event) {
    this._emitChange({...this.props.data, username: event.target.value})
  }

  _changePassword (event) {
    this._emitChange({...this.props.data, password: event.target.value})
  }
}