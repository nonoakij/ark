<script lang="ts">
import type { BooleanDefaults } from '../../types'
import type { RootEmits, RootProps } from './presence.types'

export interface PresenceProps extends RootProps, PolymorphicProps {}
export interface PresenceEmits extends RootEmits {}
</script>

<script setup lang="ts">
import { ark, type PolymorphicProps } from '../factory'
import { usePresence } from './use-presence'
import { PresenceProvider } from './use-presence-context'

const props = withDefaults(defineProps<PresenceProps>(), {
  lazyMount: undefined,
  present: undefined,
  unmountOnExit: undefined,
} satisfies BooleanDefaults<RootProps>)

const emits = defineEmits<PresenceEmits>()

// @ts-expect-error TODO tweak EmitFn
const presence = usePresence(props, emits)
PresenceProvider(presence)
</script>

<template>
  <ark.div
    v-if="!presence.unmounted"
    v-bind="presence.presenceProps"
    :as-child="asChild"
    data-scope="presence"
    data-part="root"
  >
    <slot />
  </ark.div>
</template>
