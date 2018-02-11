import React from 'react';
import { shallow } from 'enzyme';
import { ExpensifyLoginPage } from '../../components/ExpensifyLoginPage';

test('should correctly render ExpensifyLoginPage', () => {
    const wrapper = shallow(<ExpensifyLoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<ExpensifyLoginPage startLogin={startLogin} />);
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
});