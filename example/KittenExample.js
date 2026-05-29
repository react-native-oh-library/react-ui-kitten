/**
 * UI Kitten 完整测试 Demo - 修复依赖问题
 * 如果不安装 @ui-kitten/eva-icons，可以使用内嵌图标组件
 */

'use strict';

const React = require('react');
const { useState, createContext, useContext, useEffect, useMemo } = React;
const { StyleSheet, View, ScrollView, SafeAreaView, TouchableOpacity } = require('react-native');
const {
  ApplicationProvider,
  Button,
  Layout,
  Text,
  useTheme,
  useStyleSheet,
  StyleService,
  Card,
  Divider,
  TopNavigation,
  TopNavigationAction
} = require('@ui-kitten/components');
// 注释掉这行，因为包可能未安装
// const { EvaIconsPack } = require('@ui-kitten/eva-icons');
const eva = require('@eva-design/eva');
const i18n = require('i18next');
const { initReactI18next, useTranslation } = require('react-i18next');

// ============================================
// 1. 多语言配置
// ============================================
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to UI Kitten 😻',
      testMessage: 'This is a test for 61 project verification',
      themeToggle: 'Toggle Theme',
      switchLanguage: 'Switch Language',
      currentLanguage: 'Current Language',
      lightTheme: 'Light',
      darkTheme: 'Dark',
      like: 'LIKE',
      themeColorDemo: 'Dynamic Theme Color Demo',
      primaryColorText: 'This is primary color text',
      dynamicStyleDemo: 'Dynamic Style Demo',
      back: 'Back',
      themeHint: 'Click to see color value',
      primaryLight: 'Primary Light Variant'
    }
  },
  zh: {
    translation: {
      welcome: '欢迎使用 UI Kitten 😻',
      testMessage: '这是 61 项目的测试验证',
      themeToggle: '切换主题',
      switchLanguage: '切换语言',
      currentLanguage: '当前语言',
      lightTheme: '浅色',
      darkTheme: '深色',
      like: '点赞',
      themeColorDemo: '动态主题色示例',
      primaryColorText: '这是主色调文字',
      dynamicStyleDemo: '动态样式示例',
      back: '返回',
      themeHint: '点击查看颜色值',
      primaryLight: '主色调浅色变体'
    }
  }
};

// 初始化 i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

// ============================================
// 2. 主题上下文
// ============================================
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// ============================================
// 3. 自定义简单图标组件（替代 EvaIcons）
// ============================================
const MoonIcon = ({ style, ...props }) => (
  <View style={[styles.iconBase, style]}>
    <Text style={styles.iconText}>🌙</Text>
  </View>
);

const SunIcon = ({ style, ...props }) => (
  <View style={[styles.iconBase, style]}>
    <Text style={styles.iconText}>☀️</Text>
  </View>
);

const LanguageIcon = ({ style, ...props }) => (
  <View style={[styles.iconBase, style]}>
    <Text style={styles.iconText}>🌐</Text>
  </View>
);

// ============================================
// 4. 可点击的动态颜色演示组件
// ============================================
const DynamicColorDemo = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={dynamicStyles.container}>
      <Text category="s1" style={dynamicStyles.label}>
        {t('themeColorDemo')}
      </Text>
      <Text 
        style={{ 
          color: theme['color-primary-500'], 
          marginTop: 8,
          fontSize: 14,
          fontWeight: '500'
        }}
        onPress={() => alert(`${t('themeHint')}: ${theme['color-primary-500']}`)}
      >
        {t('primaryColorText')} ({t('themeHint')})
      </Text>
      <View 
        style={[
          dynamicStyles.colorBox, 
          { backgroundColor: theme['color-primary-500'] }
        ]} 
      />
      <Text style={{ color: theme['color-primary-300'], marginTop: 8, fontSize: 12 }}>
        {t('primaryLight')}: color-primary-300
      </Text>
    </View>
  );
};

const dynamicStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  label: {
    marginBottom: 12,
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginTop: 12,
  },
});

// ============================================
// 5. 完整功能的主界面组件
// ============================================
const CompleteDemoScreen = () => {
  const themeContext = useContext(ThemeContext);
  const { t, i18n: i18nInstance } = useTranslation();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const toggleLanguage = () => {
    const newLang = i18nInstance.language === 'en' ? 'zh' : 'en';
    i18nInstance.changeLanguage(newLang);
  };

  // 使用自定义图标组件
  const renderThemeAction = () => (
    <TopNavigationAction
      icon={themeContext.theme === 'light' ? MoonIcon : SunIcon}
      onPress={themeContext.toggleTheme}
    />
  );

  const renderLanguageAction = () => (
    <TopNavigationAction
      icon={LanguageIcon}
      onPress={toggleLanguage}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopNavigation
        title={t('welcome')}
        alignment="center"
        accessoryRight={() => (
          <View style={styles.actionContainer}>
            {renderLanguageAction()}
            {renderThemeAction()}
          </View>
        )}
      />
      <Divider />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 信息卡片 */}
        <Card style={styles.card} status="primary">
          <Text category="h6" style={styles.cardTitle}>
            {t('welcome')}
          </Text>
          <Text category="s1" appearance="hint" style={styles.cardSubtitle}>
            {t('testMessage')}
          </Text>
        </Card>

        {/* 语言切换卡片 */}
        <Card style={styles.card}>
          <Text category="s1" style={styles.label}>
            {t('currentLanguage')}: {i18nInstance.language === 'en' ? 'English' : '中文'}
          </Text>
          <Button 
            onPress={toggleLanguage} 
            style={styles.button}
            appearance="outline"
            status="info"
          >
            {t('switchLanguage')}
          </Button>
        </Card>

        {/* 主题切换卡片 */}
        <Card style={styles.card}>
          <Text category="s1" style={styles.label}>
            {t('themeToggle')}: {themeContext.theme === 'light' ? t('lightTheme') : t('darkTheme')}
          </Text>
          <Button 
            onPress={themeContext.toggleTheme} 
            style={styles.button}
            status="primary"
          >
            {t('themeToggle')}
          </Button>
        </Card>

        {/* 基础按钮测试 */}
        <Card style={styles.card}>
          <Text category="s1" style={styles.label}>
            {t('like')} Button Test
          </Text>
          <Button 
            style={styles.likeButton}
            status="danger"
          >
            {t('like')}
          </Button>
        </Card>

        {/* 动态主题色示例 */}
        <Card style={styles.card}>
          <DynamicColorDemo />
        </Card>
        
        {/* StyleService 响应式样式演示 */}
        <Card style={styles.card}>
          <Text category="s1" style={styles.label}>
            {t('dynamicStyleDemo')}
          </Text>
          <View style={styles.responsiveBox}>
            <Text style={styles.responsiveText}>
              {t('dynamicStyleDemo')} - Background changes with theme
            </Text>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

// 响应式样式定义
const themedStyles = StyleService.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
  },
  cardTitle: {
    marginBottom: 4,
  },
  cardSubtitle: {
    marginTop: 4,
  },
  label: {
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  likeButton: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  responsiveBox: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'color-primary-100',
    alignItems: 'center',
    marginTop: 8,
  },
  responsiveText: {
    color: 'color-primary-800',
    fontSize: 14,
    textAlign: 'center',
  },
});

// ============================================
// 6. 全局样式
// ============================================
const styles = StyleSheet.create({
  iconBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
});

// ============================================
// 7. 应用入口组件
// ============================================
const KittenExample = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <CompleteDemoScreen />
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};

// ============================================
// 8. 基础测试组件
// ============================================
const BasicKittenTest = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={basicStyles.container}>
        <Text category='h1' style={basicStyles.title}>
          Welcome to UI Kitten 😻
        </Text>
        <Text category='s1' style={basicStyles.subtitle}>
          This is a test for 61 project verification
        </Text>
        <Button style={basicStyles.likeButton} status="danger">
          LIKE
        </Button>
      </Layout>
    </ApplicationProvider>
  );
};

const basicStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
  },
  likeButton: {
    marginVertical: 16,
    minWidth: 120,
  },
});

// ============================================
// 9. 模块导出
// ============================================
const KittenExampleModule = {
  title: 'UI Kitten',
  description: 'Test UI Kitten integration in 61 project with theme switching and i18n support',
  examples: [
    {
      title: '完整功能演示 (Complete Demo)',
      description: '包含主题切换、多语言、动态样式、响应式颜色的完整示例',
      render: () => <KittenExample />,
    },
  ],
};

module.exports = KittenExampleModule;