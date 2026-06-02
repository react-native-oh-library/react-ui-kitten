import React, { useState, useEffect } from "react";
import {
  RkText,
  RkButton,
  RkStyleSheet,
  RkChoice,
  RkChoiceGroup,
  RkTextInput,
  RkModalImg,
  RkTabView,
  RkCard,
  RkAvoidKeyboard,
  RkPicker,
  withRkTheme,
  RkTheme,
} from "react-native-ui-kitten";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MyCustomThemedButton from "./MyThemedButton";

function KittenTest() {
  // 业务状态
  const [selected, setSelected] = useState("option1");
  const [showImage, setShowImage] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickedValue, setPickedValue] = useState(["opt1", "2025"]);

  // 主题状态
  const [isBlueTheme, setIsBlueTheme] = useState(true);

  // ✅ 强制刷新触发器
  const [refreshKey, setRefreshKey] = useState(0);
  const refreshPage = () => setRefreshKey((prev) => prev + 1);
  const [btnText, setBtnText] = useState("自定义按钮");
  const [btnBgColor, setBtnBgColor] = useState("#1677ff");
  const [btnTextColor, setBtnTextColor] = useState("#ffffff");
  const [btnRadius, setBtnRadius] = useState(8);
  // ==============================================
  // ✅ 初始化主题 + 刷新页面
  // ==============================================
  useEffect(() => {
    initTheme();
  }, []);

  const initTheme = () => {
    RkTheme.setTheme({
      colors: {
        primary: "#1677ff",
        background: "#e9f5ff",
      },
    });
    refreshPage();
  };

  // ==============================================
  // ✅ 切换主题 + 刷新页面
  // ==============================================
  const toggleTheme = () => {
    const newTheme = !isBlueTheme;
    setIsBlueTheme(newTheme);

    if (newTheme) {
      RkTheme.setTheme({
        colors: {
          primary: "#1677ff",
          background: "#e9f5ff",
        },
      });
    } else {
      RkTheme.setTheme({
        colors: {
          primary: "#ff4081",
          background: "#fff0f6",
        },
      });
    }

    refreshPage();
  };

  const handleClick = () => alert("RkButton 点击成功！");

  const pickerData = [
    [
      { key: "opt1", value: "选项1" },
      { key: "opt2", value: "选项2" },
    ],
    ["2024", "2025", "2026"],
  ];

  return (
    <ScrollView>
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
          style={[
            localStyles.normalBtn,
            { backgroundColor: RkTheme.colors.primary },
          ]}
          onPress={handleClick}
        >
          主题色按钮
        </RkButton>
      </View>

      {/* RkChoiceGroup */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkChoice+RkChoiceGroup 选择组</Text>
        <RkChoiceGroup selectedValue={selected} onChange={setSelected}>
          <RkChoice label="选项 1" value="option1" />
          <RkChoice label="选项 2" value="option2" />
        </RkChoiceGroup>
      </View>

      {/* RkTextInput */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkTextInput 输入框</Text>
        <RkTextInput style={localStyles.input} placeholder="请输入内容" />
      </View>
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkModalImg 图片预览</Text>
        <RkModalImg
          source={{
            uri: "https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg",
          }}
        />
      </View>

      {/* RkTabView */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkTabView 标签页</Text>
        <View style={{ height: 100 }}>
          <RkTabView>
            <RkTabView.Tab title="标签 1">
              <View style={{ padding: 20 }}>
                <RkText>内容面板 1</RkText>
              </View>
            </RkTabView.Tab>
            <RkTabView.Tab title="标签 2">
              <View style={{ padding: 20 }}>
                <RkText>内容面板 2</RkText>
              </View>
            </RkTabView.Tab>
          </RkTabView>
        </View>
      </View>

      {/* RkCard */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkCard 卡片</Text>
        <RkCard style={localStyles.card}>
          <View rkCardHeader style={{ padding: 15 }}>
            <RkText style={localStyles.cardTitle}>卡片标题</RkText>
          </View>
          <Image
            rkCardImg
            source={{
              uri: "https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg",
            }}
            style={{ height: 220 }}
          />
          <View rkCardContent style={{ padding: 15 }}>
            <RkText>这是卡片展示的内容区域</RkText>
          </View>
          <View
            rkCardFooter
            style={{ padding: 15, flexDirection: "row", gap: 10 }}
          >
            <RkButton
              style={[
                localStyles.footerBtn,
                { backgroundColor: RkTheme.colors.primary },
              ]}
            >
              操作 1
            </RkButton>
            <RkButton
              style={[
                localStyles.footerBtn,
                { backgroundColor: RkTheme.colors.primary },
              ]}
            >
              操作 2
            </RkButton>
          </View>
        </RkCard>
      </View>

      {/* RkAvoidKeyboard 内部输入框（完全正常） */}
      <RkAvoidKeyboard>
        <View style={localStyles.section}>
          <Text style={localStyles.label}>RkAvoidKeyboard 键盘适配</Text>
          <RkTextInput
            style={localStyles.input}
            placeholder="键盘弹出时界面自动上移"
          />
        </View>
      </RkAvoidKeyboard>
      {/* RkPicker */}
      <View style={localStyles.section}>
        <Text style={localStyles.label}>RkPicker 选择器</Text>
        <RkButton
          style={[
            localStyles.normalBtn,
            { backgroundColor: RkTheme.colors.primary },
          ]}
          onPress={() => setPickerVisible(true)}
        >
          打开选择器
        </RkButton>

        <RkPicker
          title="请选择"
          visible={pickerVisible}
          data={pickerData}
          selectedOptions={pickedValue}
          onConfirm={(data) => {
            setPickedValue(data);
            setPickerVisible(false);
          }}
          onCancel={() => setPickerVisible(false)}
        />
      </View>
      {/* RkTheme */}
      <View>
        <RkText style={localStyles.label}>
          RkTheme组件+RkStyleSheet组件+withRkTheme组件
        </RkText>
        <RkButton
          style={[
            localStyles.themeBtn,
            { backgroundColor: RkTheme.colors.primary },
          ]}
          onPress={toggleTheme}
        >
          切换主题
        </RkButton>
      </View>
      <View style={localStyles.section}>
        <RkText style={localStyles.label}>
          自定义 RkComponent 按钮（可视化配置）
        </RkText>

        {/* ====================== */}
        {/* 配置面板 */}
        {/* ====================== */}
        <View style={{ gap: 10, marginBottom: 20 }}>
          {/* 1. 按钮文字 */}
          <RkTextInput
            style={localStyles.input}
            value={btnText}
            onChangeText={setBtnText}
            placeholder="按钮文字"
          />

          {/* 2. 背景色选择 */}
          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            <Text>背景色：</Text>
            {["#1677ff", "#52c41a", "#ff4081", "#faad14", "#000000"].map(
              (color) => (
                <TouchableOpacity
                  key={color}
                  onPress={() => setBtnBgColor(color)}
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: color,
                    borderRadius: 15,
                    borderWidth: btnBgColor === color ? 2 : 0,
                    borderColor: "#fff",
                  }}
                />
              ),
            )}
          </View>

          {/* 3. 文字颜色选择 */}
          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            <Text>文字色：</Text>
            {["#ffffff", "#000000", "#1677ff", "#52c41a"].map((color) => (
              <TouchableOpacity
                key={color}
                onPress={() => setBtnTextColor(color)}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color,
                  borderRadius: 15,
                  borderWidth: btnTextColor === color ? 2 : 0,
                  borderColor: "#333",
                }}
              />
            ))}
          </View>

          {/* 4. 圆角大小 */}
          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            <Text>圆角：</Text>
            {[0, 4, 8, 16, 30, 50].map((radius) => (
              <TouchableOpacity
                key={radius}
                onPress={() => setBtnRadius(radius)}
                style={{
                  padding: 8,
                  borderWidth: 1,
                  borderColor: btnRadius === radius ? "#1677ff" : "#ccc",
                  borderRadius: 4,
                }}
              >
                <Text>{radius}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ====================== */}
        {/* ✅ 实时预览按钮（根据配置自动变化） */}
        {/* ====================== */}
        <MyCustomThemedButton
          bgColor={btnBgColor}
          textColor={btnTextColor}
          borderRadius={btnRadius}
          onPress={() => alert("配置后的按钮点击！")}
        >
          {btnText}
        </MyCustomThemedButton>
      </View>
    </ScrollView>
  );
}

const localStyles = RkStyleSheet.create({
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  themeBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footerBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 6,
  },
});

export default withRkTheme(KittenTest);

export const displayName = "react-active-ui-kitten";
export const framework = "React";
export const category = "UI";
export const title = "react-active-ui-kitten";
export const description = "react-native-ui-kitten 主题切换演示";

export const examples = [
  {
    title: "react-active-ui-kitten",
    render: () => <KittenTest />,
  },
];
