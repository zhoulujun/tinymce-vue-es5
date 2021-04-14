/**
 * @file eslint config
 * @author andyljzhou <andyljzhou@tencent.com>
 */

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    // value 为 true 允许被重写，为 false 不允许被重写
    NODE_ENV: false,
    LOCAL_DEV_URL: false,
    LOCAL_DEV_PORT: false,
    AJAX_URL_PREFIX: false,
    AJAX_MOCK_PARAM: false,
    LOGIN_URL: false,
    USER_INFO_URL: false
  },
  // add your custom rules hered
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
