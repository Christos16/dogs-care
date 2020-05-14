import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../utils/utils';
import SittersProfile from '../../components/sitters-profile/SittersProfile';

const enzymeWrapper = shallow(<SittersProfile />);

describe('Should render the component <SittersProfile /> without error', () => {
  test('should render a div tag with [data-test] of Sitter', () => {
    const component = findByTestAttr(enzymeWrapper, 'Sitters');
    expect(component.length).toBe(1);
  });
});
