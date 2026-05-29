> 模板版本：v0.4.0

# <center>react-native-ui-kitten</center>

This project is based on [react-ui-kitten](https://github.com/react-native-oh-library/react-ui-kitten).

This third-party library has been migrated to Gitcode and is now available for direct download from npm, the new package name is: `@react-native-ui-kitten`, The version correspondence details are as follows:

| Name | Version | Release Information | Supported RN Version | Supported Autolink | Compile API Version | Community Baseline Version | npm Address     |
| --------------| -------------- | ------------------------------ | ------------- | ------------- |------------------------ | ------------- | ------------- |
| @react-native-ohos/react-native-ui-kitten |  ~ 1.0.0    |  | 0.61.* | No | API12+ | 7.3.4 | | 

## Introduction

kitten component for React Native.
Kitten is a UI component library that can be used in applications and web pages, so that different devices can have the same UI components!

## Installation

Go to the project directory and execute the following instruction:

**npm**

```bash
npm install @react-native-ohos/react-native-ui-kitten
```

**yarn**

```bash
yarn add @react-native-ohos/react-native-ui-kitten
```

## Link

## Constraints

### Compatibility

This document is verified based on the following versions:

1. RNOH: 0.61; SDK: HarmonyOS 6.0.0 Release SDK; IDE: DevEco Studio 6.0.0.858; ROM: 6.0.0.112;

### Permission Requirements

## Example

The following code shows the basic use scenario of the repository:

> [!WARNING] The name of the imported repository remains unchanged.

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

## How to Use


## Available APIs

> [!TIP] The **Platform** column indicates the platform where the properties are supported in the original third-party library.

> [!TIP] If the value of **HarmonyOS Support** is **yes**, it means that the OpenHarmony platform supports this property; **no** means the opposite; **partially** means some capabilities of this property are supported. The usage method is the same on different platforms and the effect is the same as that of iOS or Android.

### Components

| Name         | Parameter Type                 | Required  | Platform  | OpenHarmony Platform Support | Description          |
|--------------|------------------------|------|------|--------------|----------------------|
| RkText| [RkTextProps](#RkTextProps) | yes  | all  | yes                 | Text display component |
| RkButton | [RkButtonProps](#RkButtonProps) | yes  | all  | yes                 | Button Component |
| RkChoice | [RkChoiceProps](#RkChoiceProps) | yes  | all  | yes                 | Selector component, which is used to implement the selection function. Only one item can be selected at a time. |
| RkChoiceGroup | [RkChoiceGroupProps](#RkChoiceGroupProps) | yes  | all  | yes                 |Selector component, selection group, management of selection components, and implementation of mutually exclusive single or multiple selection group management. |
| RkTextInput| [RkTextInputProps](#RkTextInputProps) | yes  | all  | yes                 | Text box component, which supports form input, placeholder, keyboard type, theme style, and error status.|
| RkModalImg| [RkModalImgProps](#RkModalImgProps) | yes  | all  | yes                 | Image preview pop-up window component. Users can click an image to zoom in or view it in full screen, and can also close the image and perform gesture operations.|
| RkTabView | [RkTabViewProps](#RkTabViewProps) | yes  | all  | yes                 | The tab switching component is used to switch between tabs on the top or bottom and switch pages by swiping left or right. |
| RkCard| [RkCardProps](#RkCardProps) | yes  | all  | yes                 | Card container component, used to display content blocks and supports layout styles such as shadows, rounded corners, margins, and titles. |
| RkAvoidKeyboard| [RkAvoidKeyboardProps](#RkAvoidKeyboardProps) | yes  | all  | yes                 |Keyboard avoidance component, which automatically pushes the page upward when the keyboard pops up to prevent the input box from being obscured. |
| RkComponent| [RkComponentProps](#RkComponentProps) | yes  | all  | yes                 |The base parent class of all UI Kitten components, providing common capabilities such as themes, styles, and types. |
| RkPicker| [RkPickerProps](#RkPickerProps) | yes  | all  | yes                 | The scroll selector component is used to select a date, a single-choice list, or a drop-down list.|
| withRkTheme| [withRkThemeProps](#withRkThemeProps) | yes  | all  | yes                 | High-Order Component (HOC), used to inject themes into custom components, enabling theme switching support for components |
| RkTheme| [RkThemeProps](#RkThemeProps) | yes  | all  | yes                 | Core class for theme management, responsible for configuring, switching, and storing global themes (such as colors, fonts, and sizes). |
| RkStyleSheet| [RkStyleSheetProps](#RkStyleSheetProps) | yes  | all  | yes                 | The theme-based style system is extended based on RN StyleSheet and supports dynamically generating styles based on themes.|

## Known Issues

## Other

## Directory Structure

````
/rntpc_react-native-ui-kitten  # Project root directory
├── src                  # JS code
│    └─ assets  # Resource management folder.
│    └─ components # Component Package Export Folder
│    └─ styles # Style encapsulation folder.        
├── README.md           # English Installation and Usage Guide
├── README_zh.md   # Installation and Usage Guide (Chinese)
````

## How to Contribute

If you find any problem when using lottie-react-native, submit an or a.

## License

The repository is based on [Apache License 2.0](https://github.com/lottie-react-native/lottie-react-native/blob/master/LICENSE).

