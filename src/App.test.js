import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { findByTestAttr, testStore } from './utils/utils';
import App from './App';

const store = configureStore()({});
const wrapper = shallow(<App store={store} />);

describe('App', () => {
  test('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'AppComponent');
    expect(component.length).toBe(1);
  });
});
