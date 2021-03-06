/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index.js';
import {SIZE} from '../input/index.js';

export const IconWrapper = styled<{$size: typeof SIZE}>('div', props => {
  const {$size, $theme} = props;
  const marginLeft = {
    [SIZE.compact]: $theme.sizing.scale500,
    [SIZE.default]: $theme.sizing.scale600,
    [SIZE.large]: $theme.sizing.scale700,
  };
  return {
    //$FlowFixMe
    marginLeft: marginLeft[$size],
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  };
});
