import React, { PropTypes, Component } from 'react';
import classnames                      from 'classnames';
import Form                            from '../Form';
import logo                            from '../FrontCover/logo.png';

import './style.css';

export default class Login extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
        <div className='form-page__wrapper'>
          <div className='form-page__form-wrapper'>
            <div className='form-page__form-header'>
              <img className='form-page__img' src={logo} />
            </div>
            <Form btnText={'LOG IN'} />
          </div>
        </div>
      </div>
    );
  }
}