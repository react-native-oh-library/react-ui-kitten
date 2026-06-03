import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

import { RkText } from '../text/rkText';
import { RkComponent } from '../rkComponent';

// 👇 1. 新增：创建新的 Context
const RkThemeContext = React.createContext(null);

export class RkButton extends RkComponent {
  componentName = 'RkButton';
  typeMapping = {
    container: {
      hitSlop: 'hitSlop'
    },
    content: {
      color: 'color',
      fontSize: 'fontSize'
    }
  };

  // 👇 2. 替换：旧的 contextTypes → 新的 static contextType
  static contextType = RkThemeContext;

  _renderChildren(style) {
    let displayText = (text) => (<RkText style={[style, this.props.contentStyle]}>{text}</RkText>);
    if (typeof this.props.children === 'string') {
      return displayText(this.props.children)
    }
    let babies = _.isArray(this.props.children) ? this.props.children : [this.props.children];
    return React.Children.map(babies, (baby) => {
      if (typeof baby === 'string') {
        return displayText(baby);
      } else {
        let { style: babyStyle, ...babyProps } = baby.props;
        return React.cloneElement(baby, {
          style: [this.props.contentStyle, babyStyle],
          ...babyProps
        });
      }
    })
  }

  render() {
    let { container, content } = super.defineStyles();
    let { style, ...touchableProps } = this.props;
    let hitSlop = this.extractNonStyleValue(container, 'hitSlop');
    if (hitSlop) touchableProps.hitSlop = hitSlop;

    return (
      <TouchableOpacity style={[container, style]} {...touchableProps}>
        {this.props.children && this._renderChildren(content)}
      </TouchableOpacity>
    );
  }
}