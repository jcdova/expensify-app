import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should view 1 expenses totalling correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should view 2 expenses totalling correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235987868768} />);
    expect(wrapper).toMatchSnapshot();
});

