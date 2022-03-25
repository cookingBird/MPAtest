module.exports = {
  singleQuote: true, //单引号
  useEditorConfig: true,
  printWidth: 90,
  tabWidth: 2,
  useTabs: false, //不使用tab换行
  /**
   * @description 行尾换行符
   * 'lf':\n
   * 'ctrl': \r\n
   * 'cr': \r
   * 'auto': 根据文中的换行符确定
   */
  endOfLine: 'lf',
  /**
   * ['true','false']
   * true: let i = 1;
   * false: let i = 1
   */
  semi: true,
  /**
   * ['all','es5','none']
   * "all": {
   *          a:1,
   *          b:2,
   *        }
   * "none": {
   *          a:1,
   *          b:2
   *        }
   */
  trailingComma: 'all',
  /**
   * ['true','false']
   * true: <script>
   *          let a='test';
   *       </script>
   * false: <script>
   *        let a='test';
   *        </script>
   */
  vueIndentScriptAndStyle: false,
  /**
   * ['ignore','strict','css']
   * ignore:默认所有的(inline)element中的空格是insignificant(不重要的)
   * strict:默认所有的(inline)element中的空格是significant(重要的)
   * css:根据element的display值,判断空格是否significant
   */
  htmlWhitespaceSensitivity: 'ignore',
  /**
   * ['true','false']
   * true: { a:'test' }
   * false: {a:"test"}
   */
  bracketSpacing: true,
  /**
   * ['true','false']
   * true: function test ()
   * false: function test()
   */
  insertSpaceBeforeFunctionParenthesis: true,
  /**
   * @description html元素尾标签同一行
   * ['true','false']
   * true: <div
   *          style=""
   *          class=""></div>
   * false: <div
   *          style=""
   *          class=""
   *        ></div>
   */
  bracketSameLine: false,
  /**
   * @description 是否对换行敏感的渲染器进行换行格式化
   * ['always','never','preserve']
   * 'always':总是换行
   * 'never':总是使其成为一行
   * 'preserve':不对其格式化
   */
  proseWrap: 'preserve',
  arrowParens: 'always', //箭头函数参数必须带括弧
  embeddedLanguageFormatting: 'auto', //开启格式化
  quoteProps: 'as-needed',
}
