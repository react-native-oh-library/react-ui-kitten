/**
 * Copyright (c) 2024 Huawei Technologies Co., Ltd.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ReactTestter from './src/kittenTest'


AppRegistry.registerComponent(appName, () => ReactTestter);