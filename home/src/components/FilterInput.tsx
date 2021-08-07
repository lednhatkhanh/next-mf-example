import * as React from "react";
import type Vue from 'vue';
import {  useWatch } from "../hooks";

type Props = {
    onFilter(value: string): string;
}

export function FilterInput({onFilter}: Props) {
    const [value, setValue] = React.useState('')
  const divRef = React.useRef<HTMLInputElement>(null);
  const vueRef = React.useRef<Vue.ComponentPublicInstance | null>(null)

    const handleValueChanged = React.useCallback((newValue: string) => {
        if (vueRef.current) {
            (vueRef.current as unknown as {value: string}).value = newValue;
        }
    }, [])

    useWatch(value, handleValueChanged)

  const handleChange = React.useCallback((newValue: string) => {
      setValue(newValue);
  }, [])

  const handleReset = React.useCallback(() => {
      setValue('');
  }, [])

  React.useEffect(() => {
    async function loadFilterInput() {
      const vue = await window['list'].get('./vue').then(factory => factory()) as typeof Vue;
      const VFilterInput = await window['list'].get('./FilterInput').then(factory => factory().default) as Vue.Component;
      const vueApp = {
        components: {
            FilterInput: VFilterInput,
        },
        setup() {
          const valueRef = vue.ref('');

            function handleInputEvent(newValue: string) {
                handleChange(newValue);
            }

            function handleResetEvent() {
                handleReset();
            }

          return {
            value: valueRef,
            handleInput:handleInputEvent,
            handleReset: handleResetEvent
          };
        },
        template: `
          <FilterInput :value="value" @input="handleInput" @reset="handleReset" />
        `
      }
      
      vueRef.current = vue.createApp(vueApp).mount(divRef.current as Element);
    }

    loadFilterInput();
  }, [handleChange, handleReset])

  return <div ref={divRef} />;
}
