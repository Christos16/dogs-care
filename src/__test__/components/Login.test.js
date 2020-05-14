import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../utils/utils';
import Login from '../../components/auth/Login';

const enzymeWrapper = shallow(<Login />);

describe('Should render the component <Login /> without error', () => {
  test('should render a div tag with [data-test] of Login', () => {
    const component = findByTestAttr(enzymeWrapper, 'Login');
    expect(component.length).toBe(1);
  });
});
