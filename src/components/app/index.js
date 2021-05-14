import render from './render';
import * as statics from './statics';
import withStyle from './style';

export default withStyle(Object.assign(render, statics));
