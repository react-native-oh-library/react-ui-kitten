import _ from 'lodash';
import {DefaultTheme} from './defaultTheme';
import {RkColors} from './color';
import {TypeManager} from './typeManager';
import {RkStyleSheet} from './styleSheet'

const themeUpdated = 'themeUpdated';

class ThemeManager {

  constructor() {
    this._currentTheme = this._getDefault();
    this._colors = _.cloneDeep(RkColors);
    this._updatePredefinedStyles();
    this.listeners = [];
  }

  subscribeComponent(obj) {
    this.listeners.push(obj);
  }

  unsubscribeComponent(obj) {
    _.pull(this.listeners, obj);
  }

  _updatePredefinedStyles() {
    this._predefinedStyles = this._createColorsStyles(this._colors);
  }

  _createColorsStyles(colors) {
    let styleObject = {};
    for (let colorName in colors) {
      styleObject[colorName + 'Text'] = {
        color: colors[colorName]
      };
      styleObject[colorName + 'Bg'] = {
        backgroundColor: colors[colorName]
      };
      styleObject[colorName + 'Border'] = {
        borderColor: colors[colorName]
      };
    }
    return styleObject;
  }

  _getDefault() {
    return _.cloneDeep(DefaultTheme);
  }

  get current() {
    return this._currentTheme;
  }

  get styles() {
    return this._predefinedStyles;
  }

  get colors() {
    return this._colors;
  }

  // -------------------------
  // 👇 修复完成版 setTheme
  // -------------------------
  setTheme(theme) {
    // 1. 合并主题
    let newTheme = _.merge(this._currentTheme, theme);
    this._currentTheme = newTheme;

    // 2. ✅【关键】更新颜色
    if (theme.colors) {
      _.merge(this._colors, theme.colors);
      this._updatePredefinedStyles();
    }

    // 3. 刷新组件
    TypeManager.invalidateTypes();
    RkStyleSheet._invalidate();

    this.listeners.forEach(t => {
      try {
        t.forceUpdate();
      } catch (e) {}
    });
  }

  setType(element, name, value, parentTypes) {
    TypeManager.setType(element, name, value, parentTypes);
  }

  registerComponent(element, types) {
    TypeManager.registerTypes(element, types);
  }

  setColor(name, value) {
    this._colors[name] = value;
    this._updatePredefinedStyles();
  }
}

export let RkTheme = new ThemeManager();