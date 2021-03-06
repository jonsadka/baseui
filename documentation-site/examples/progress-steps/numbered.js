// @flow
import * as React from 'react';
import {ProgressSteps, NumberedStep} from 'baseui/progress-steps';
import {Button} from 'baseui/button';
import {Block} from 'baseui/block';
import {styled} from 'baseui';

const SpacedButton = styled(Button, ({$theme}) => ({
  marginLeft: $theme.sizing.scale200,
  marginRight: $theme.sizing.scale200,
  marginTop: $theme.sizing.scale200,
}));

class ProgressStepsContainer extends React.Component<
  {},
  {current: number},
> {
  state = {
    current: 0,
  };

  render() {
    return (
      <ProgressSteps current={this.state.current}>
        <NumberedStep title="Create Account">
          <Block font="font400">Here is some step content</Block>
          <SpacedButton disabled>Previous</SpacedButton>
          <SpacedButton onClick={() => this.setState({current: 1})}>
            Next
          </SpacedButton>
        </NumberedStep>
        <NumberedStep title="Verify Payment">
          <Block font="font400">Here is some some content</Block>
          <SpacedButton onClick={() => this.setState({current: 0})}>
            Previous
          </SpacedButton>
          <SpacedButton onClick={() => this.setState({current: 2})}>
            Next
          </SpacedButton>
        </NumberedStep>
        <NumberedStep title="Add Payment Method">
          <Block font="font400">Here too!</Block>
          <SpacedButton onClick={() => this.setState({current: 1})}>
            Previous
          </SpacedButton>
          <SpacedButton disabled>Next</SpacedButton>
        </NumberedStep>
      </ProgressSteps>
    );
  }
}

export default ProgressStepsContainer;
