#!/bin/bash
echo '开始构建组件库'

npm run build:commonjs2

npm run build:component

echo '组件库构建完成，现在发布'

npm publish --access public