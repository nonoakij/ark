import { mergeProps } from '@zag-js/solid'
import { type JSX } from 'solid-js'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import { runIfFn } from '../run-if-fn'
import type { Assign } from '../types'
import { SplitterProvider } from './splitter-context'
import { useSplitter, type UseSplitterProps, type UseSplitterReturn } from './use-splitter'

export interface SplitterProps
  extends Assign<
    Assign<
      HTMLArkProps<'div'>,
      { children?: JSX.Element | ((api: UseSplitterReturn) => JSX.Element) }
    >,
    UseSplitterProps
  > {}

export const Splitter = (props: SplitterProps) => {
  const [splitterParams, localProps] = createSplitProps<UseSplitterProps>()(props, [
    'dir',
    'getRootNode',
    'id',
    'ids',
    'onSizeChange',
    'onSizeChangeEnd',
    'onSizeChangeStart',
    'orientation',
    'size',
  ])

  const api = useSplitter(splitterParams)
  const getChildren = () => runIfFn(localProps.children, api)
  const rootProps = mergeProps(() => api().rootProps, localProps)

  return (
    <SplitterProvider value={api}>
      <ark.div {...rootProps}>{getChildren()}</ark.div>
    </SplitterProvider>
  )
}
