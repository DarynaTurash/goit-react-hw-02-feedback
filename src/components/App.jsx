import { Component } from 'react';
import { FeedbackOptions } from "./feedback-options/feedback-options";
import { Statistics } from "./statistics/statistics";
import { Section } from './section/section';
import { Notification } from './notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = option => {
    this.setState({
      [option]: this.state[option] + 1,
    })
  };

  handlerTotalSum = () => {
    const arrayOfStateValues = Object.values(this.state);
    const totalSum = arrayOfStateValues.reduce((acc, value) => acc + value, 0);
    return totalSum;
  };

  handlerGetPercentage = () => {
    const { good } = this.state;
    const totalSum = this.handlerTotalSum();
    const percentage = (good / totalSum) * 100;
    return isNaN(percentage) ? 0 : percentage.toFixed(0);
  };

  render() {
    const state = this.state;
    const conditionForRender = Object.values(state).every(value => value === 0);
    const options = Object.keys(state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        {conditionForRender
        ? <Notification message="There is no feedback" />
        :<Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={this.handlerTotalSum()} positivePercentage={this.handlerGetPercentage()} />}
      </Section>
    );
  }
}
