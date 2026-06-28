> 模板版本：v0.4.1

# <center>react-native-ui-kitten</center>


| 三方库名称                                | 三方库版本 | 发布信息 | 支持RN版本 | Autolink | 编译API版本 | 社区基线版本 | npm地址 |
| ----------------------------------------- | ---------- | -------- | ---------- | -------- | ----------- | ------------ | ------- |
| @react-native-ohos/react-native-ui-kitten | ~ 3.0.0-0.61.1 | [Github Releases](https://github.com/react-native-oh-library/react-ui-kitten) | 0.61.* | 否 | API12+ | 3.0.0 | [Npm Address](https://www.npmjs.com/package/@react-native-ohos/react-native-ui-kitten) |

## 简介

kitten组件用于 React Native。<br/>
kitten是一个ui组件库，可以在应用和网页中使用，这样就可以在不同设备拥有相同的ui组件！<br/>

## 下载安装

使用RNOH0.61框架的工程需要根据该文档配置，RNOH0.61框架指导文档：https://gitcode.com/CPF-RN/usage-docs/blob/br_rnoh0.61/zh-cn/rnoh0.61_usage.md

进入到工程目录并输入以下命令：

**npm**

```bash
npm install @react-native-ohos/react-native-ui-kitten
```

**yarn**

```bash
yarn add @react-native-ohos/react-native-ui-kitten
```
## 约束与限制

### 兼容性

本文档内容基于以下版本验证通过：

1. RNOH: 0.61; SDK: HarmonyOS 6.0.0 Release SDK; IDE: DevEco Studio 6.0.0.858; ROM: 6.0.0.112;

## 使用示例

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。

```javascript
import React from "react";
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from "react-native-ui-kitten";
import { View, Text, Alert } from "react-native";

function KittenTest() {
  const handleClick = () => Alert.alert("RkButton 点击成功！");

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
});

export default KittenTest;
```
## 接口说明

> [!TIP] "平台"列表示该属性在原三方库上支持的平台。

> [!TIP] "HarmonyOS平台支持"列为 yes 表示 HarmonyOS平台支持 该属性；no 则表示不支持；partially 表示部分支持。使用方法跨平台一致，效果对标 iOS 或 Android 的效果。

### 组件

| 名称       | 参数类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| RkText| RkTextProps| yes  | all  | yes                 | 文本展示组件 |
| RkButton | RkButtonProps | yes  | all  | yes                 | 按钮组件 |
| RkChoice | RkChoiceProps | yes  | all  | yes                 | 选择器组件 |
| RkChoiceGroup | RkChoiceGroupProps | yes  | all  | yes                 | 选择组组件 |
| RkTextInput| RkTextInputProps | yes  | all  | yes                 | 输入框组件|
| RkModalImg| RkModalImgProps | yes  | all  | yes                 | 图片预览弹窗组件 |
| RkTabView | RkTabViewProps| yes  | all  | yes                 | 标签页切换组件 |
| RkCard| RkCardProps | yes  | all  | yes                 | 卡片容器组件 |
| RkAvoidKeyboard| RkAvoidKeyboardProps| yes  | all  | yes                 |键盘避让组件 |
| RkPicker| RkPickerProps| yes  | all  | yes                 | 滚动选择器组件 |

### RkTextProps

| 名称      | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | 组件预设样式 |
| TextProps | TextProps| no  | all  | yes                 | Text组件属性 |

### RkText rkType的属性值

| 名称     | 类型 | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| -------- | ------- | ---- | ---- | ---------------- | --------------|
| basic    | string  | no   | all  | yes              | 基础样式 |
| header   | string  | no   | all  | yes              | 标题样式 |
| xxlarge  | string  | no   | all  | yes              | XXLarge字号 |
| xlarge   | string  | no   | all  | yes              | XLarge字号 |
| large    | string  | no   | all  | yes              | Large字号 |
| medium   | string  | no   | all  | yes              | Medium字号 |
| small    | string  | no   | all  | yes              | Small字号 |
| subtitle | string  | no   | all  | yes              | 副标题样式 |
| primary  | string  | no   | all  | yes              | Primary文本 |
| info     | string  | no   | all  | yes              | Info文本 |
| success  | string  | no   | all  | yes              | Success文本 |
| danger   | string  | no   | all  | yes              | Danger文本 |
| warning  | string  | no   | all  | yes              | Warning文本 |


### RkButtonProps

| 名称      | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | 组件预设样式 |
| style | style | no  | all  | yes                 | 通用样式 |
| contentStyle | style | no  | all  | yes          | 子组件样式 |
| props | TouchableOpacity.props | no  | all  | yes | TouchableOpacity组件属性 |


### RkButton rkType的属性值

| 名称     | 类型 | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| -------- | ------- | ---- | ---- | ---------------- | --------------|
| _base    | string  | no   | all  | yes              | 基础样式 |
| basic    | string  | no   | all  | yes              | 默认按钮 |
| transparent | string  | no   | all  | yes           | 透明按钮 |
| primary    | string  | no   | all  | yes            | 主色按钮 |
| warning    | string  | no   | all  | yes            | 警告按钮 |
| danger     | string  | no   | all  | yes            | 危险按钮 |
| success    | string  | no   | all  | yes            | 成功按钮 |
| info       | string  | no   | all  | yes            | 信息按钮 |
| outline    | string  | no   | all  | yes            | 边框按钮 |
| rounded    | string  | no   | all  | yes            | 大圆角按钮 |
| circle     | string  | no   | all  | yes            | 圆形按钮 |
| rectangle  | string  | no   | all  | yes            | 直角按钮 |
| small      | string  | no   | all  | yes            | small按钮 |
| medium     | string  | no   | all  | yes            | medium按钮 |
| large      | string  | no   | all  | yes            | large按钮 |
| xlarge     | string  | no   | all  | yes            | xlarge按钮 |
| clear      | string  | no   | all  | yes            | 清除按钮样式 |
| stretch    | string  | no   | all  | yes            | 撑满按钮 |


### RkChoiceProps

| 名称      | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | 组件预设样式 |
| selected | bool| no  | all  | yes                 | 默认复选框 |
| disabled    | bool | no  | all  | yes                 | 禁用状态 |
| onPress | function| no  | all  | yes                 | 点击事件 |
| renderContentFunction    | function | no  | all  | yes | 用于呈现自定义内容 |
| style | style | no  | all  | yes                 | 通用样式 |
| contentStyle    | style | no  | all  | yes       | 子组件样式 |

### RkChoiceProps rkType的属性值

| 名称     | 类型 | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| -------- | ------- | ---- | ---- | ---------------- | --------------|
| _base    | string  | no   | all  | yes              | 基础样式 |
| Selected    | string  | no   | all  | yes              | 选中样式 |
| Disabled | string  | no   | all  | yes           | 禁用样式 |
| SelectedDisabled    | string  | no   | all  | yes            | 选中禁用样式 |
| radio    | string  | no   | all  | yes            | 圆角单选框 |
| radioSelected     | string  | no   | all  | yes            | 圆角选中单选框 |
| radioDisabled    | string  | no   | all  | yes            | 圆角禁用单选框 |
| radioSelectedDisabled       | string  | no   | all  | yes            | 圆角选中禁用单选框 |
| posNeg    | string  | no   | all  | yes            | 正负号/对错 |
| posNegSelected    | string  | no   | all  | yes            | 正负号/对错选中 |
| posNegDisabled     | string  | no   | all  | yes            | 正负号/对错禁用 |
| posNegSelectedDisabled  | string  | no   | all  | yes            | 正负号/对错选中禁用 |
| clear      | string  | no   | all  | yes            | 无边框 |
| clearSelected     | string  | no   | all  | yes            | 无边框选中 |
| clearDisabled      | string  | no   | all  | yes            | 无边框禁用 |
| clearSelectedDisabled     | string  | no   | all  | yes            | 无边框选中禁用 |

### RkChoiceGroupProps
| 名称      | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| --------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType    | string | no  | all  | yes                 | 组件预设样式 |
| style | style | no  | all  | yes                 | 通用样式 |
| radio | boolean | no  | all  | yes          | 是否启用单选框模式 |
| selectedIndex | number | no  | all  | yes | 选中项索引 |
| onChange | function | no  | all  | yes | 选中变化回调 |

### RkChoiceGroup rkType的属性值

| 名称     | 类型 | 必填 | 平台 | HarmonyOS平台支持 | 描述   |
| -------- | ------- | ---- | ---- | -----------| --------|
| _base    | string  | no   | all  | yes        | 基础样式 |
| bordered | string  | no   | all  | yes        | 边框样式 |
| stretch  | string  | no   | all  | yes        | 撑满样式 |

### RkTextInputProps
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | 组件预设样式 |
| style |style | no  | all  | yes                 | 通用样式 |
| props |TextInput.prop | no  | all  | yes                 | TextInput原生属性 |
| label |string/function | no  | all  | yes                 | 显示在输入框旁的标签/图标属性 |
| labelStyle |style | no  | all  | yes                 | 应用于label的样式 |
| inputStyle |style | no  | all  | yes                 | 应用于内部TextInput的样式 |

### RkTextInput rkType的属性值
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | 基础样式 |
| basic |string | no  | all  | yes                 | 默认输入框 |
| bordered|string| no  | all  | yes                 | 添加边框和圆角 |
| rounded|string| no  | all  | yes                 | 大圆角胶囊形状 |
| form|string| no  | all  | yes                 | 表单输入框样式 |
| clear|string| no  | all  | yes                 | 去除底部下划线 |
| topLabel|string| no  | all  | yes                 | 标签在输入框上方 |

### RkModalImgProps
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | 组件预设样式 |
| style |style | no  | all  | yes                 | 常规模式，未打开Modal时的样式 |
| props |Image.props | no  | all  | yes                 | Image原生属性 |
| imgContainerStyle |style | no  | all  | yes                 | 常规模式下图片容器的样式 |
| modalStyle |style | no  | all  | yes                 | 模态框根视图的样式 |
| modalImgStyle |style | no  | all  | yes                 | 模态模式下图片的样式 |
| headerStyle |style | no  | all  | yes                 | 模态模式下头部容器样式（未设renderHeader时生效） |
| footerStyle |style | no  | all  | yes                 | 模态模式下底部容器样式（未设renderFooter时生效） |
| visible |bool | no  | all  | yes                 | 是否已打开模态框 |
| animationType |string | no  | all  | yes                 | 模态框是否显示Modal动画类型：'none'/'slide'/'fade' |
| transparent |bool | no  | all  | yes                 | 是否让Modal背景透明 |
| renderHeader |function | no  | all  | yes                 | 自定义头部渲染函数，传入options对象 |
| renderFooter |function | no  | all  | yes                 | 自定义底部渲染函数，传入options对象 |
| index |number | no  | all  | yes                 | 画廊模式下当前显示的图片索引 |

### RkModalImg rkType的属性值
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | 基础样式 |

### renderHeader和renderFooter的options参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| closeImage|function| no  | all  | yes                 | 关闭模态框 |
| pageNumber|number| no  | all  | yes                 | 当前页码 |
| totalPages|number| no  | all  | no                 | 总页数 |

### RkTabViewProps
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | 组件预设样式 |
| style |style | no  | all  | yes                 | 直接应用于整个RkTabView根容器的样式 |
| headerContainerStyle | style | no  | all  | yes                 | 仅应用于包裹选项卡的容器（头部区域），不影响下方的内容容器。 |
| maxVisibleTabs |number | no  | all  | yes                 | 设置后，选项卡栏将变为可滚动，并且最多同时显示指定数量的选项卡 |
| index |number | no  | all  | yes                 | 默认激活的选项卡索引 |
| tabsUnderContent |bool | no  | all  | yes                 | 如果设置为true，内容区域会被渲染在选项卡的上方 |
| title |string | no  | all  | yes                 | (RkTabView.Tab prop)如果传入字符串，会被渲染为包裹在View内的Text组件（使用默认或自定义样式），如果传入函数，该函数会接收isSelected（布尔值，表示当前选项卡是否被选中）作为参数，并需要返回一个React组件 |
| style |style | no  | all  | yes                 | (RkTabView.Tab prop)应用于选项卡内容容器的样式 |
| styleSelected |style | no  | all  | yes                 | (RkTabView.Tab prop)当选项卡被选中时，应用于标签容器的样式 |
| contentStyle |style | no  | all  | yes                 | (RkTabView.Tab prop)直接应用于选项卡文本标签的样式 |
| contentStyleSelected |style | no  | all  | yes                 | (RkTabView.Tab prop)当选项卡被选中时，应用于文本标签的样式 |
| onTabChanged |function | no  | all  | yes                 | 当用户切换选项卡时触发的回调函数 |

### RkTabView rkType的属性值
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述       |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | 基础样式 |
| basic|string| no  | all  | yes                 | 默认样式 |
| selected|string| no  | all  | yes                 | 选中状态样式 |
| materialSelected|string| no  | all  | yes                 | Material风格选中态样式 |
| material|string| no  | all  | yes                 | Material风格选中状态样式 |

### RkCardProps
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | 组件预设样式 |
| style |style | no  | all  | yes                 | 样式属性 |

### RkCard rkType的属性值
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | 基础卡片 |
| shadowed |string | no  | all  | yes                 | 阴影卡片 |
| heroImage|string| no  | all  | yes                 | 大图卡片 |

### RkAvoidKeyboard
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | 组件预设样式 |
| style |style | no  | all  | yes                 | 样式属性 |

### RkAvoidKeyboard rkType的属性值
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | 基础样式 |

### RkComponent（所有UIKitten组件的基础父类，提供主题、样式、类型等公共能力）
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| componentName|string| no  | all  | yes                 | 组件注册名 |
| typeMapping |object | no  | all  | yes                 | 用于定义预设属性的映射表 |
| baseStyle |string | no  | all  | yes                 | 组件的基础样式名，默认值是'_base' |
| defaultType |string | no  | all  | yes                 | 组件的默认类型名称，默认值是'basic' |
| defaultTypeMappingElement |string | no  | all  | yes                 | 默认的类型映射元素，如果未定义，会取第一个元素 |
| defineStyles |function | no  | all  | yes                 | 把组件当前的各种“类型标记”收集起来，编译成最终的样式对象 |
| extractNonStyleValue |function | no  | all  | yes                 | 从样式数组中“提取”某个非样式属性值，并将它从样式数组中移除 |

### defineStyles参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| componentName|string| no  | all  | yes                 | 额外需要追加的类型名 |

### extractNonStyleValue参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| style|object| no  | all  | yes                 | 已编译好的样式对象 |
| property|string| no  | all  | yes                 | 需要从样式数组中提取的属性名 |

### RkPicker
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| rkType|string| no  | all  | yes                 | 组件预设样式 |
| style |style | no  | all  | yes                 | 样式属性 |
| visible|bool| yes  | all  | yes                 | 控制模态窗口显示/隐藏 |
| data|array| yes  | all  | yes                 | 选项数据 |
| selectedOptions|array| yes  | all  | yes                 | 当前被选中的选项数组 |
| onConfirm |function | yes  | all  | yes                 | 点击确认按钮回调 |
| onCancel|function| yes  | all  | yes                 | 点击取消按钮回调 |
| title |string | no  | all  | yes                 | 标题文字 |
| confirmButtonText|string| no  | all  | yes                 | 确认按钮的显示文本，默认值为"OK" |
| cancelButtonText |string | no  | all  | yes                 | 取消按钮的显示文本，默认值为"CANCEL" |
| confirmTextRkType |string| no  | all  | yes                 | 确认按钮文字的样式类型，默认值为"header" |
| cancelTextRkType |string | no  | all  | yes                 | 取消按钮文字的样式类型 |
| confirmButtonRkType |string| no  | all  | yes                 | 确认按钮的样式类型，默认值为"transparent rectangle" |
| cancelButtonRkType |string | no  | all  | yes                 | 确认按钮的样式类型，默认值为"transparent rectangle" |
| titleTextRkType |string| no  | all  | yes                 | 标题文字的样式类型，默认值为"header" |
| optionHeight | number | no  | all  | yes                 | 每个选项的行高，默认值为50 |
| optionNumberOnPicker | number | no  | all  | yes                 | 选择器上可见的选项数量，默认值为3 |
| optionRkType | string | no  | all  | yes                 | 普通选项文字（未选中项）的样式类型 |
| selectedOptionRkType | string | no  | all  | yes                 | 选中选项文字的样式类型 |

### RkPicker rkType的属性值
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| _base|string| no  | all  | yes                 | 基础样式 |

### withRkTheme
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| withRkTheme| function | no  | all  | yes                 | 使得组件能够响应全局主题的变化而自动重新渲染 |

### withRkTheme参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| Wrapped| React.Component | yes  | all  | yes                 | 需要响应主题动态切换的组件 |

### RkTheme（主题管理核心类，负责配置、切换、存储全局主题（颜色、字体、尺寸等））
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| subscribeComponent |function | no  | all  | yes                 | 订阅主题变更 |
| unsubscribeComponent | function | no  | all  | yes                 | 取消订阅主题变更 |
| current |object| no  | all  | yes                 | 获取当前主题对象 |
| styles |object| no  | all  | yes                 | 预置颜色快捷样式集 |
| colors|object| no  | all  | yes                 | 当前所有颜色值 |
| setTheme |function | no  | all  | yes                 | 合并新主题到当前主题 |
| setColor |function | no  | all  | yes                 | 设置单个颜色值 |
| setType |function | no  | all  | yes                 | 为指定组件定义新的rkType样式 |
| registerComponent |function | no  | all  | yes                 | 为元素注册一组类型 |

### subscribeComponent参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| obj | React.Component | yes  | all  | yes                 | 组件实例 |

### unsubscribeComponent参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| obj | React.Component | yes  | all  | yes                 | 组件实例 |

### setTheme参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| theme | object | yes  | all  | yes                 | 与当前主题进行合并的偏主题对象 |

### setColor参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| name | string | yes  | all  | yes                 | 颜色名称 |
| value | string | yes  | all  | yes                 | 颜色值 |

### setType参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| element | string | yes  | all  | yes                 | 组件注册名，对应组件类的componentName |
| name | string | yes  | all  | yes                 | 新类型名称，与组件rkType对应 |
| value | object | yes  | all  | yes                 | 样式定义对象，键为typeMapping中定义的内部元素名或样式属性，值为样式对象或具体值 |
| parentTypes | string[] | no  | all  | yes                  | 父类型数组，该类型会继承父类型的样式后再合并自身样式 |

### registerComponent参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| element | string | yes  | all  | yes                 | 组件注册名 |
| types | function | yes  | all  | yes                 | 接收theme参数，返回类型定义对象的工厂函数 |

### RkStyleSheet（主题化样式系统，基于RN StyleSheet扩展，支持根据主题动态生成样式）
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| create |function | no  | all  | yes                 | 创建可响应主题变化的StyleSheet |

### create参数介绍
| 名称       | 类型                            | 必填 | 平台 | HarmonyOS平台支持 | 描述           |
| ---------- | ----------------------------------- | ---- | ---- | ------------------- | -------------- |
| style | object | yes  | all  | yes                 | 样式定义 |

## 遗留问题

## 其他

## 目录结构

````
/react-native-ui-kitten # 项目根目录
├── src # JS代码
│    ├─ assets # 资源管理文件夹
│    ├─ components #组件封装导出文件夹
│    └─ styles # 样式封装文件夹        
├── README.md # 中文安装使用方法
├── README_en.md # 英文安装使用方法  
````
## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/bullptr/react-ui-kitten/blob/v3.0.0/LICENSE.txt) ，请自由地享受和参与开源。
