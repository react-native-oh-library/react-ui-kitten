> 模板版本：v0.4.1

# <center>react-native-ui-kitten</center>


| Name | Version | Release Information | Supported RN Version | Supported Autolink | Compile API Version | Community Baseline Version | npm Address     |
| --------------| -------------- | ------------------------------ | ------------- | ------------- |------------------------ | ------------- | ------------- |
| @react-native-ohos/react-native-ui-kitten | ~ 3.0.0-0.61.1 | [Github Releases](https://github.com/react-native-oh-library/react-ui-kitten) | 0.61.* | No | API12+ | 3.0.0 | [Npm Address](https://www.npmjs.com/package/@react-native-ohos/react-native-ui-kitten) | 

## Introduction

kitten component for React Native.
Kitten is a UI component library that can be used in applications and web pages, so that different devices can have the same UI components!

## InstallationInstallation and Usage

Projects using the RNOH0.61 framework need to be configured according to this document. RNOH0.61 Framework Guidance Document: https://gitcode.com/CPF-RN/usage-docs/blob/br_rnoh0.61/en/rnoh0.61_usage.md

Go to the project directory and execute the following instruction:

**npm**

```bash
npm install @react-native-ohos/react-native-ui-kitten
```

**yarn**

```bash
yarn add @react-native-ohos/react-native-ui-kitten
```
## Constraints

### Compatibility

This document is verified based on the following versions:

1. RNOH: 0.61; SDK: HarmonyOS 6.0.0 Release SDK; IDE: DevEco Studio 6.0.0.858; ROM: 6.0.0.112;

## Usage example

The following code shows the basic use scenario of the repository:

> [!WARNING] The name of the imported repository remains unchanged.

```javascript
import React from "react";
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from "react-native-ui-kitten";
import { View, Text, Alert } from "react-native";

function KittenTest() {
  const handleClick = () => Alert.alert("RkButton clicked successfully!");

  return (
    <View>
      {/* RkText */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkText Text Component</Text>
        <RkText style={localStyles.descText}>
          This is a text content presented in a thematic manner
        </RkText>
      </View>
      {/* RkButton */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkButton Button</Text>
        <RkButton
          onPress={handleClick}
        >
          Button
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
});

export default KittenTest;
```
## Interface Description

> [!TIP] The **Platform** column indicates the platform where the properties are supported in the original third-party library.

> [!TIP] If the value of **HarmonyOS Platform Support** is **yes**, it means that the HarmonyOS platform supports this property; **no** means the opposite; **partially** means some capabilities of this property are supported. The usage method is the same on different platforms and the effect is the same as that of iOS or Android.

### Components

| Name         | Parameter Type                 | Required  | Platform  | HarmonyOS Platform Support | Description          |
|--------------|------------------------|------|------|--------------|----------------------|
| RkText| RkTextProps | yes  | all  | yes                 | Text display component |
| RkButton | RkButtonProps | yes  | all  | yes                 | Button Component |
| RkChoice | RkChoiceProps | yes  | all  | yes                 | Selector component|
| RkChoiceGroup |RkChoiceGroupProps | yes  | all  | yes                 |Selector component |
| RkTextInput| RkTextInputProps | yes  | all  | yes                 | Text box component|
| RkModalImg| RkModalImgProps | yes  | all  | yes                 | Image preview pop-up window component.|
| RkTabView | RkTabViewProps | yes  | all  | yes                 | The tab switching component  |
| RkCard| RkCardProps| yes  | all  | yes                 | Card container component|
| RkAvoidKeyboard| RkAvoidKeyboardProps | yes  | all  | yes                 |Keyboard avoidance component |
| RkPicker| RkPickerProps | yes  | all  | yes                 | The scroll selector component |

### RkTextProps

| Name      | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | Component preset style |
| TextProps | TextProps| no  | all  | yes                 | Text component properties |

### The attribute values of RkText rkType

| Name     | Type | Required | Platform | HarmonyOS Platform Support | Description           |
| -------- | ------- | ---- | ---- | ---------------- | --------------|
| basic    | string  | no   | all  | yes              | Basic Style |
| header   | string  | no   | all  | yes              | Title Style |
| xxlarge  | string  | no   | all  | yes              | XXLarge font size |
| xlarge   | string  | no   | all  | yes              | XLarge font size |
| large    | string  | no   | all  | yes              | Large font size |
| medium   | string  | no   | all  | yes              | Medium font size |
| small    | string  | no   | all  | yes              | Small font size |
| subtitle | string  | no   | all  | yes              | Subtitle Style |
| primary  | string  | no   | all  | yes              | Primary Text |
| info     | string  | no   | all  | yes              | Info Text |
| success  | string  | no   | all  | yes              | Success Text |
| danger   | string  | no   | all  | yes              | Danger Text |
| warning  | string  | no   | all  | yes              | Warning Text |


### RkButtonProps

| Name      | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | Component preset style |
| style | style | no  | all  | yes                 | General style |
| contentStyle | style | no  | all  | yes          | Sub component style |
| props | TouchableOpacity.props | no  | all  | yes | TouchableOpacity component properties |


### The attribute values of RkButton rkType

| Name     | Type | Required | Platform | HarmonyOS Platform Support | Description           |
| -------- | ------- | ---- | ---- | ---------------- | --------------|
| _base    | string  | no   | all  | yes              | Basic Style |
| basic    | string  | no   | all  | yes              | Default button |
| transparent | string  | no   | all  | yes           | Transparent button |
| primary    | string  | no   | all  | yes            | Main color button |
| warning    | string  | no   | all  | yes            | Warning button |
| danger     | string  | no   | all  | yes            | Danger button |
| success    | string  | no   | all  | yes            | Success button |
| info       | string  | no   | all  | yes            | Information button |
| outline    | string  | no   | all  | yes            | Border button |
| rounded    | string  | no   | all  | yes            | Large rounded button |
| circle     | string  | no   | all  | yes            | Round button |
| rectangle  | string  | no   | all  | yes            | Right angle button |
| small      | string  | no   | all  | yes            | Small button |
| medium     | string  | no   | all  | yes            | Medium button |
| large      | string  | no   | all  | yes            | Large button |
| xlarge     | string  | no   | all  | yes            | Xlarge button |
| clear      | string  | no   | all  | yes            | Clear button style |
| stretch    | string  | no   | all  | yes            | Full button |


### RkChoiceProps

| Name      | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | Component preset style |
| selected | bool| no  | all  | yes                 | Default checkbox |
| disabled    | bool | no  | all  | yes                 | Disabled state |
| onPress | function| no  | all  | yes                 | Click event |
| renderContentFunction    | function | no  | all  | yes | Used to present custom content |
| style | style | no  | all  | yes                 | General style |
| contentStyle    | style | no  | all  | yes       | Sub component style |

### The attribute values of RkChoiceProps rkType

| Name     | Type | Required | Platform | HarmonyOS Platform Support | Description           |
| -------- | ------- | ---- | ---- | ---------------- | --------------|
| _base    | string  | no   | all  | yes              | Basic Style |
| Selected    | string  | no   | all  | yes              | Select style |
| Disabled | string  | no   | all  | yes           | Disable Style |
| SelectedDisabled    | string  | no   | all  | yes            | Select to disable styles |
| radio    | string  | no   | all  | yes            | Rounded radio button |
| radioSelected     | string  | no   | all  | yes            | Rounded corner selection radio button |
| radioDisabled    | string  | no   | all  | yes            | Rounded corner disable radio button |
| radioSelectedDisabled       | string  | no   | all  | yes            | Rounded corner select disable radio button |
| posNeg    | string  | no   | all  | yes            | Positive and negative signs/right and wrong |
| posNegSelected    | string  | no   | all  | yes            | Positive/negative sign/correct/incorrect selection |
| posNegDisabled     | string  | no   | all  | yes            | Positive and negative signs/right and wrong disabled |
| posNegSelectedDisabled  | string  | no   | all  | yes            | Positive/negative sign/correct/incorrect selection disabled |
| clear      | string  | no   | all  | yes            | Borderless |
| clearSelected     | string  | no   | all  | yes            | Borderless selection |
| clearDisabled      | string  | no   | all  | yes            | Borderless disabled |
| clearSelectedDisabled     | string  | no   | all  | yes            | Borderless selection disabled |

### RkChoiceGroupProps
| Name      | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | Component preset style |
| style | style | no  | all  | yes                 | General style |
| radio | boolean | no  | all  | yes          | Do you want to enable radio button mode |
| selectedIndex | number | no  | all  | yes | Selected item index |
| onChange | function | no  | all  | yes | Select Change callback |

### The attribute values of RkChoiceGroup rkType

| Name     | Type | Required | Platform | HarmonyOS Platform Support | Description   |
| -------- | ------- | ---- | ---- | -----------| --------|
| _base    | string  | no   | all  | yes        | Basic Style |
| bordered | string  | no   | all  | yes        | Border Style |
| stretch  | string  | no   | all  | yes        | Fill up the style |

### RkTextInputProps
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | Component preset style |
| style |style | no  | all  | yes                 | General style |
| props |TextInput.prop | no  | all  | yes                 | TextInput native properties |
| label |string/function | no  | all  | yes                 | Label/icon properties displayed next to the input box |
| labelStyle |style | no  | all  | yes                 | Style applied to labels |
| inputStyle |style | no  | all  | yes                 | Styles applied to internal TextInput |

### The attribute values of RkTextInput rkType
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | Basic Style |
| basic |string | no  | all  | yes                 | Default input box |
| bordered|string| no  | all  | yes                 | Add borders and rounded corners |
| rounded|string| no  | all  | yes                 | Large rounded capsule shape |
| form|string| no  | all  | yes                 | Form input box style |
| clear|string| no  | all  | yes                 | Remove the bottom underline |
| topLabel|string| no  | all  | yes                 | The label is above the input box |


### RkModalImgProps
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | Component preset style |
| style |style | no  | all  | yes                 | Normal mode, style when Modal is not turned on |
| props |Image.props | no  | all  | yes                 | Image native properties |
| imgContainerStyle |style | no  | all  | yes                 | Style of Image Container in Normal Mode |
| modalStyle |style | no  | all  | yes                 | Style of modal box root view |
| modalImgStyle |style | no  | all  | yes                 | The style of images in modal mode |
| headerStyle |style | no  | all  | yes                 | Head container style in modal mode (effective when renderHeader is not set) |
| footerStyle |style | no  | all  | yes                 | Bottom container style in modal mode (effective when renderFooter is not set) |
| visible |bool | no  | all  | yes                 | Has the modal box been opened|
| animationType |string | no  | all  | yes                 | Does the modal box display Modal animation type: 'none'/'slide'/'fade' |
| transparent |bool | no  | all  | yes                 | Should we make the Modal background transparent |
| renderHeader |function | no  | all  | yes                 | Customize the head rendering function and pass in the options object |
| renderFooter |function | no  | all  | yes                 | Customize the bottom rendering function and pass in the options object |
| index |number | no  | all  | yes                 | Index of currently displayed images in gallery mode |

### The attribute values of RkModalImg rkType
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | Basic Style |

### Introduction to the options parameters of renderHeader and renderFooter
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| closeImage|function| no  | all  | yes                 | Close the modal |
| pageNumber|number| no  | all  | yes                 | Current page number |
| totalPages|number| no  | all  | no                 | Total Pages |

### RkTabViewProps
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | Component preset style |
| style |style | no  | all  | yes                 | Style directly applied to the entire RkTabView root container |
| headerContainerStyle | style | no  | all  | yes                 | Only applicable to the container of the package tab (head area), does not affect the content container below. |
| maxVisibleTabs |number | no  | all  | yes                 | After setting, the tab bar will become scrollable and display a maximum of the specified number of tabs simultaneously |
| index |number | no  | all  | yes                 | Default activated tab index |
| tabsUnderContent |bool | no  | all  | yes                 | If set to true, the content area will be rendered above the tab |
| title |string | no  | all  | yes                 | (RkTabView.Tab prop)If a string is passed in, it will be rendered as a Text component wrapped within the View (using default or custom styles). If a function is passed in, it will take isSelected (a boolean value indicating whether the current tab is selected) as an argument and return a React component |
| style |style | no  | all  | yes                 | (RkTabView.Tab prop)Styles applied to tab content containers |
| styleSelected |style | no  | all  | yes                 | (RkTabView.Tab prop)When a tab is selected, the style applied to the label container |
| contentStyle |style | no  | all  | yes                 | (RkTabView.Tab prop)Style directly applied to tab text labels |
| contentStyleSelected |style | no  | all  | yes                 | (RkTabView.Tab prop)Style applied to text labels when a tab is selected |
| onTabChanged |function | no  | all  | yes                 | The callback function triggered when the user switches tabs |

### RkTabView rkType的属性值
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | Basic Style |
| basic|string| no  | all  | yes                 | Default Style |
| selected|string| no  | all  | yes                 | Select Status Style |
| materialSelected|string| no  | all  | yes                 | Material style selected state style |
| material|string| no  | all  | yes                 | Material Style Selection Status Style |

### RkCardProps
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | Component preset style |
| style |style | no  | all  | yes                 | Style attribute |

### The attribute values of RkCard rkType
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | Basic Card |
| shadowed |string | no  | all  | yes                 | Shadow Card |
| heroImage|string| no  | all  | yes                 | Large picture Card |

### RkAvoidKeyboard
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | Component preset style |
| style |style | no  | all  | yes                 | Style attribute |

### The property values of RkAvoidKeyboard rkType
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | Basic Style |

### RkComponent（The basic parent class of all UIKitten components, providing common capabilities such as themes, styles and types）
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| componentName|string| no  | all  | yes                 | Component registration name |
| typeMapping |object | no  | all  | yes                 | Mapping table used to define preset attributes |
| baseStyle |string | no  | all  | yes                 | The basic style name of the component, with a default value of'base' |
| defaultType |string | no  | all  | yes                 | The default TypeName for the component is' basic ' |
| defaultTypeMappingElement |string | no  | all  | yes                 | The default Type mapping element, if not defined, will take the first element |
| defineStyles |function | no  | all  | yes                 | Collect various Type tags of the component and compile them into the final style object |
| extractNonStyleValue |function | no  | all  | yes                 | Extract a non Style attribute value from the style array and remove it from the style array |

### defineStyles parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| componentName|string| no  | all  | yes                 | Additional Type Names Required |

### extractNonStyleValue parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| style|object| no  | all  | yes                 | Compiled style objects |
| property|string| no  | all  | yes                 | The attribute names that need to be extracted from the style array |

### RkPicker
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | Component preset style |
| style |style | no  | all  | yes                 | Style attribute |
| visible|bool| yes  | all  | yes                 | Control the display/hide of modal windows |
| data|array| yes  | all  | yes                 | Option data |
| selectedOptions|array| yes  | all  | yes                 | The currently selected option array |
| onConfirm |function | yes  | all  | yes                 | Click the confirm button to call back |
| onCancel|function| yes  | all  | yes                 | Click the cancel button to call back |
| title |string | no  | all  | yes                 | Title Text |
| confirmButtonText|string| no  | all  | yes                 | The display text of the confirm button defaults to "OK"|
| cancelButtonText |string | no  | all  | yes                 | The display text of the cancel button defaults to "CANCEL" |
| confirmTextRkType |string| no  | all  | yes                 | Confirm the style type of button text, default value is "header" |
| cancelTextRkType |string | no  | all  | yes                 | Cancel the style type of button text |
| confirmButtonRkType |string| no  | all  | yes                 | Confirm the style type of the button, default value is "transparent rectangle" |
| cancelButtonRkType |string | no  | all  | yes                 | Confirm the style type of the button, default value is "transparent rectangle" |
| titleTextRkType |string| no  | all  | yes                 | The style type of the title text, default value is "header" |
| optionHeight | number | no  | all  | yes                 | The row height of each option is set to 50 by default |
| optionNumberOnPicker | number | no  | all  | yes                 | The number of visible options on the selector, with a default value of 3 |
| optionRkType | string | no  | all  | yes                 | Style Type of Normal Option Text (Unchecked) |
| selectedOptionRkType | string | no  | all  | yes                 | Select the style type of option text |

### The attribute values of RkPicker rkType
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | Basic Style |

### withRkTheme
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| withRkTheme| function | no  | all  | yes                 | Enable components to automatically re render in response to changes in the global theme |

### withRkTheme parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| Wrapped| React.Component | yes  | all  | yes                 | Components that require dynamic switching in response to themes |

### RkTheme（Theme management core class, responsible for configuring, switching, and storing global themes (colors, fonts, sizes)）
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| subscribeComponent |function | no  | all  | yes                 | Subscription Theme Change |
| unsubscribeComponent | function | no  | all  | yes                 | Unsubscribe from Theme Change |
| current |object| no  | all  | yes                 | Get the current theme object |
| styles |object| no  | all  | yes                 | Pre set color shortcut style set |
| colors|object| no  | all  | yes                 | All current color values |
| setTheme |function | no  | all  | yes                 | Merge new theme into current theme |
| setColor |function | no  | all  | yes                 | Set a single color value |
| setType |function | no  | all  | yes                 | Define a new rkType style for the specified component |
| registerComponent |function | no  | all  | yes                 | Register a set of Types for an element |

### subscribeComponent parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| obj | React.Component | yes  | all  | yes                 | Component instance |

### unsubscribeComponent parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| obj | React.Component | yes  | all  | yes                 | Component instance |

### setTheme parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| theme | object | yes  | all  | yes                 | Partial theme objects merged with the current theme |

### setColor parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| name | string | yes  | all  | yes                 | Color Name |
| value | string | yes  | all  | yes                 | Color Value |

### setType parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| element | string | yes  | all  | yes                 | Component registration name, corresponding to the componentName of the component class |
| name | string | yes  | all  | yes                 | New type name, corresponding to component rkType |
| value | object | yes  | all  | yes                 | Style definition object, key is the internal element name or style attribute defined in typeMapping, value is the style object or specific value |
| parentTypes | string[] | no  | all  | yes                  | The parent type array inherits the style of the parent type and merges its own style |

### registerComponent parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| element | string | yes  | all  | yes                 | Component registration name |
| types | function | yes  | all  | yes                 | Receive the theme parameter and return the factory function of the Type defined object |

### RkStyleSheet（Theme based style system, based on RN StyleSheet extension, supports dynamically generating styles according to themes）
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| create |function | no  | all  | yes                 | Create StyleSheet that can respond to theme changes |

### create parameter introduction
| Name       | Type                            | Required | Platform | HarmonyOS Platform Support | Description           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| style | object | yes  | all  | yes                 | Style definition |

## Known Issues

## Other

## Directory Structure

````
/react-native-ui-kitten # Project root directory
├── src # JS code
│    └─ assets # Resource management folder.
│    └─ components # Component Package Export Folder
│    └─ styles # Style encapsulation folder.        
├── README.md # Installation and Usage Guide (Chinese)
├── README_en.md # English Installation and Usage Guide
````
## License

The repository is based on [The MIT License (MIT)](https://github.com/bullptr/react-ui-kitten/blob/v3.0.0/LICENSE.txt).
