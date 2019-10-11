/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:45:22
 * @LastEditTime: 2019-10-11 10:37:50
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  presets: [
    "@vue/app",
    {
      plugins: [
        [
          "import",
          {
            libraryName: "vant",
            libraryDirectory: "es",
            style: true
          }
        ]
      ]
    }
  ]
};
