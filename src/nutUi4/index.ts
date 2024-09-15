import { getComponentMap, getPropsMap } from './mapping'

export function nutUi4() {
  return {
    uiName: '@nutui/nutui4',
    map: getPropsMap(),
    lib: '@nutui/nutui',
    prefix: 'nut',
  }
}

export function nutUi4Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'nut',
    isReact: false,
    lib: '@nutui/nutui',
    // directives: directives.nutUi4,
  }
}
