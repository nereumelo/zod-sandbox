import CodeMirror from '@uiw/react-codemirror';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { tokyoNightDayInit } from '@uiw/codemirror-theme-tokyo-night-day';
import { tags as t } from '@lezer/highlight';
import { EditorView } from "@codemirror/view";
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { CompletionContext, CompletionResult } from "@codemirror/autocomplete"
import Header from '../Header';
import { KeyboardEvent, useContext } from 'react';
import { MainContext } from '../../contexts/Main';
import { zodCompletionOptions } from './completionOptions';

const tokyoNightDay = tokyoNightDayInit({
  theme: 'light',
  settings: {
    background: '#f9fafa',
    gutterBackground: '#f9fafa',
  },
  styles: [
    { tag: t.bool, color: '#dd8b0f' },
    { tag: t.null, color: '#dd8b0f' },
    { tag: t.number, color: '#dd8b0f' },
    { tag: [t.string, t.special(t.brace)], color: '#73a142' },
  ]
});

const dracula = draculaInit({
  theme: 'dark',
  styles: [
    { tag: t.bool, color: '#66d9ef' },
    { tag: t.null, color: '#66d9ef' },
    { tag: t.number, color: '#66d9ef' },
  ]
})

export default function Box(props: BoxProps) {
  const { className, label, onChange, onKeyPress, placeholder, style, type, value } = props
  const { theme } = useContext(MainContext);
  const disabled = type === 'result';
  const focused = type === 'data';
  const activeTheme = theme === 'dark' ? dracula : tokyoNightDay;

  const handleValue = (value: string) => {
    onChange?.(value);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault();
      onKeyPress?.();
    }
  }

  const myCompletions = (context: CompletionContext): CompletionResult | null => {
    const word = context.matchBefore(/[\w.]*/) as { from: number; to: number; text: string; };
    if (!/(\.[a-z]*)$/i.test(word.text) || type !== 'schema') return null
    if (/^z/.test(word.text)) {
      word.text = word.text.slice(1)
      ++word.from
    }

    return {
      from: word.from,
      options: zodCompletionOptions,
    };
  };

  return (
    <div className={`${className} h-full w-full`}>
      <label htmlFor="label">
        <Header.h2>{label}</Header.h2>
      </label>
        <CodeMirror
          className={`h-[calc(100%-2rem)] text-[13.6px] w-auto overflow-auto rounded-lg border-[1px] focus-within:border-gray-200 focus-within:shadow-md transition-shadow ${style}`}
          onChange={handleValue}
          placeholder={placeholder}
          extensions={[
            javascript(),
            javascriptLanguage.data.of({ autocomplete: myCompletions, }),
            EditorView.lineWrapping,
          ]}
          value={value}
          readOnly={disabled}
          autoFocus={focused}
          height='100%'
          minHeight='70px'
          minWidth='300px'
          basicSetup={{
            lineNumbers: false,
          }}
          onKeyDownCapture={handleKeyPress}
          theme={activeTheme}
        />
    </div>
  )
}

type BoxType = 'data' | 'schema' | 'result'

type BoxProps = {
  style?: string
  className?: string
  disabled?: boolean
  label: string
  placeholder?: string
  value?: string
  type: BoxType
  onChange?: (value: string) => void
  onKeyPress?: () => void
}
