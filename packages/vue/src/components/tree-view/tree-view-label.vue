<script lang="ts">
import type { PolymorphicProps } from '../factory'

export interface TreeViewLabelProps extends PolymorphicProps {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useTreeViewContext } from './use-tree-view-context'

defineProps<TreeViewLabelProps>()
const treeView = useTreeViewContext()
</script>

<template>
  <ark.label v-bind="treeView.labelProps" :as-child="asChild">
    <slot />
  </ark.label>
</template>
