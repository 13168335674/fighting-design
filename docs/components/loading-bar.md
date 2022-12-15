# Loading Bar 加载条

玩命的加载中

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/loading-bar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/loading-bar.md)

## 基本使用

在使用前，需要先引入它：

```ts
import { useLoadingBar } from 'fighting-design'
```

`useLoadingBar` 函数中，暴露出了 `start` `finish` `error` 三个方法，来实现开始加载、加载完成、加载出错三个状态

::: demo

```vue
<script lang="ts" setup>
  import { useLoadingBar } from 'fighting-design'

  const bar = useLoadingBar()

  const start = () => {
    bar.start()
  }

  const finish = () => {
    bar.finish()
  }

  const error = () => {
    bar.error()
  }
</script>

<template>
  <f-space>
    <f-button type="primary" @click="start">开始</f-button>
    <f-button type="success" @click="finish">结束</f-button>
    <f-button type="danger" @click="error">报错</f-button>
  </f-space>
</template>
```

:::

## Events

| 事件名称 | 说明         |
| -------- | ------------ |
| `start`  | 加载成功触发 |
| `finish` | 加载完成触发 |
| `error`  | 加载失败触发 |

## Interface

组件导出以下类型定义：

```ts
import type { LoadingBarProps } from 'fighting-design'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>