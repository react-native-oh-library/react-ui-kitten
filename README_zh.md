> 模板版本：v0.4.0

# <center>react-native-ui-kitten</center>

本项目基于 [react-ui-kitten](https://github.com/react-native-oh-library/react-ui-kitten)开发。
支持直接从 npm 下载，新的包名为：`@react-native-ui-kitten` 版本所属关系如下：

| 三方库名称                                | 三方库版本 | 发布信息 | 支持RN版本 | Autolink | 编译API版本 | 社区基线版本 | npm地址 |
| ----------------------------------------- | ---------- | -------- | ---------- | -------- | ----------- | ------------ | ------- |
| @react-native-ohos/react-native-ui-kitten | ~ 1.0.0    |          | 0.61.*     | 否       | API12+      | 7.3.4        |         |

## 简介

kitten组件用于 React Native。<br/>
kitten是一个ui组件库，可以在应用和网页中使用，这样就可以在不同设备拥有相同的ui组件！<br/>

## 下载安装

进入到工程目录并输入以下命令：

**npm**

```bash
npm install @react-native-ohos/react-native-ui-kitten
```

**yarn**

```bash
yarn add @react-native-ohos/react-native-ui-kitten
```

## Link

## 约束与限制

### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH: 0.61; SDK: HarmonyOS 6.0.0 Release SDK; IDE: DevEco Studio 6.0.0.858; ROM: 6.0.0.112;

### 权限要求

## 使用示例

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。

```javascript
import React, { useState, useEffect } from "react";
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from "react-native-ui-kitten";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MyCustomThemedButton from "./MyThemedButton";

function KittenTest() {
  const handleClick = () => alert("RkButton 点击成功！");

  return (
    <View>
      {/* RkText */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkText 文本组件</Text>
        <RkText style={localStyles.descText}>
          这是一段主题化展示的文本内容
        </RkText>
      </View>
      {/* RkButton */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkButton 按钮</Text>
        <RkButton
          onPress={handleClick}
        >
          按钮
        </RkButton>
      </View>

    </View>
  );
}

const localStyles = RkStyleSheet.create({
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  descText: {
    fontSize: 16,
    color: "#555",
  },
  normalBtn: {
    padding: 12,
    borderRadius: 8,
  },
});

export default KittenTest;
```

## 使用说明


## 接口说明

> [!TIP] "Platform"列表示该属性在原三方库上支持的平台。

> [!TIP] "OpenHarmony Support"列为 yes 表示 OpenHarmony平台支持 该属性；no 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。

### 组件

| 名称       | 参数类型                            | 必填 | 平台 | OpenHarmony平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| RkText| [RkTextProps](#RkTextProps) | yes  | all  | yes                 | 文本展示组件 |
| RkButton | [RkButtonProps](#RkButtonProps) | yes  | all  | yes                 | 按钮组件 |
| RkChoice | [RkChoiceProps](#RkChoiceProps) | yes  | all  | yes                 | 选择器组件，单个选择，实现选择功能 |
| RkChoiceGroup | [RkChoiceGroupProps](#RkChoiceGroupProps) | yes  | all  | yes                 |选择器组件，选择组，管理选择组件，实现互斥单选或多选组管理 |
| RkTextInput| [RkTextInputProps](#RkTextInputProps) | yes  | all  | yes                 | 输入框组件，支持表单输入、占位符、键盘类型、主题样式、错误状态等|
| RkModalImg| [RkModalImgProps](#RkModalImgProps) | yes  | all  | yes                 | 图片预览弹窗组件，点击图片可放大、全屏查看，支持关闭与手势操作|
| RkTabView | [RkTabViewProps](#RkTabViewProps) | yes  | all  | yes                 | 标签页切换组件，实现顶部 / 底部 Tab 切换、左右滑动切换页面功能 |
| RkCard| [RkCardProps](#RkCardProps) | yes  | all  | yes                 | 卡片容器组件，用于展示内容块，支持阴影、圆角、边距、标题等布局样式 |
| RkAvoidKeyboard| [RkAvoidKeyboardProps](#RkAvoidKeyboardProps) | yes  | all  | yes                 |键盘避让组件，当键盘弹出时自动上推页面，避免输入框被遮挡 |
| RkComponent| [RkComponentProps](#RkComponentProps) | yes  | all  | yes                 |所有 UI Kitten 组件的基础父类，提供主题、样式、类型等公共能力 |
| RkPicker| [RkPickerProps](#RkPickerProps) | yes  | all  | yes                 | 滚动选择器组件，用于选择日期、单选列表、下拉选项等滚轮选择功能。 |
| withRkTheme| [withRkThemeProps](#withRkThemeProps) | yes  | all  | yes                 | 高阶组件（HOC），用于将主题注入到自定义组件，使组件支持主题切换。 |
| RkTheme| [RkThemeProps](#RkThemeProps) | yes  | all  | yes                 | 主题管理核心类，负责配置、切换、存储全局主题（颜色、字体、尺寸等） |
| RkStyleSheet| [RkStyleSheetProps](#RkStyleSheetProps) | yes  | all  | yes                 | 主题化样式系统，基于 RN StyleSheet 扩展，支持根据主题动态生成样式|


## 遗留问题


## 其他

无

## 目录结构

````
/rntpc_react-native-ui-kitten  # 项目根目录
├── src                  # JS代码
│    └─ assets  # 资源管理文件夹
│    └─ components #组件封装导出文件夹
│    └─ styles # 样式封装文件夹        
├── README.md           # 英文安装使用方法  
├── README_zh.md   # 中文安装使用方法
````

## 贡献代码

使用过程中发现任何问题都可以提交 ，当然，也非常欢迎提交 。

## 开源协议

本项目基于 [Apache License 2.0](https://github.com/lottie-react-native/lottie-react-native/blob/master/LICENSE) ，请自由地享受和参与开源。

