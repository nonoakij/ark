<script lang="ts">
import type { PolymorphicProps } from '../factory'

export interface SwitchControlProps extends PolymorphicProps {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useSwitchContext } from './use-switch-context'

defineProps<SwitchControlProps>()
const context = useSwitchContext()
</script>

<template>
  <ark.span v-bind="context.controlProps" :as-child="asChild">
    <slot />
  </ark.span>
</template>
