<script lang="ts">
import type { PolymorphicProps } from '../factory'

export interface EditableEditTriggerProps extends PolymorphicProps {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useEditableContext } from './use-editable-context'

defineProps<EditableEditTriggerProps>()
const editable = useEditableContext()
</script>

<template>
  <ark.button v-bind="editable.editTriggerProps" :as-child="asChild">
    <slot />
  </ark.button>
</template>
