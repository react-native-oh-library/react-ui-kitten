import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { RkComponent } from 'react-native-ui-kitten'; // 替换成你真实的RkComponent路径
import { RkTheme } from 'react-native-ui-kitten';

// 自定义可配置按钮：继承RkComponent，支持主题、rkType、动态样式
export default class MyCustomThemedButton extends RkComponent {
  // 组件名称（RkComponent核心标识）
  componentName = 'MyCustomThemedButton';

  // 类型映射：定义内部子元素（container：按钮容器，text：文字）
  typeMapping = {
    container: {
      backgroundColor: 'backgroundColor',
      borderRadius: 'borderRadius',
      padding: 'padding',
    },
    text: {
      color: 'color',
      fontSize: 'fontSize',
      fontWeight: 'fontWeight',
    },
  };

  // 默认基础样式
  baseStyle = '_base';
  // 默认类型
  defaultType = 'default';

  render() {
    const {
      style,
      textStyle,
      children,
      onPress,
      // 自定义可配置属性
      bgColor = RkTheme.colors.primary,
      borderRadius = 8,
      textColor = '#ffffff',
      ...props
    } = this.props;

    // 编译主题样式
    const compiledStyles = this.defineStyles();

    return (
      <TouchableOpacity
        style={[
          compiledStyles.container,
          {
            backgroundColor: bgColor,
            borderRadius: borderRadius,
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}
        onPress={onPress}
        activeOpacity={0.8}
        {...props}
      >
        <Text
          style={[
            compiledStyles.text,
            { color: textColor, fontSize: 15 },
            textStyle,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}