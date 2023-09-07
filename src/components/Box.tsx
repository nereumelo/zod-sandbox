import CodeMirror from '@uiw/react-codemirror';
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { EditorView } from "@codemirror/view";
import { Completion, CompletionContext, CompletionResult } from "@codemirror/autocomplete"
import Header from './Header';
import { KeyboardEvent, useContext } from 'react';
import { MainContext } from '../contexts/Main';

const zodCompletionOptions: Completion[] = [
  {
    label: ".any",
    displayLabel: "any",
    apply: '.any',
    type: 'function',
    detail: 'z.ZodAny',
  },
  {
    label: ".array",
    displayLabel: "array",
    apply: '.array',
    type: 'function',
    detail: 'z.ZodArray',
  },
  {
    label: ".boolean",
    displayLabel: "boolean",
    apply: '.boolean',
    type: 'function',
    detail: 'z.ZodBoolean',
  },
  {
    label: ".date",
    displayLabel: "date",
    apply: '.date',
    type: 'function',
    detail: 'z.ZodDate',
  },
  {
    label: ".number",
    displayLabel: "number",
    apply: '.number',
    type: 'function',
    detail: 'z.ZodNumber',
  },
  {
    label: ".string",
    displayLabel: "string",
    apply: '.string',
    type: 'function',
    detail: 'z.ZodString',
  },
  {
    label: ".object",
    displayLabel: "object",
    apply: '.object',
    type: 'function',
    detail: 'z.ZodObject',
  },
  {
    label: ".null",
    displayLabel: "null",
    apply: '.null',
    type: 'function',
    detail: 'z.ZodNull',
  },
  {
    label: ".undefined",
    displayLabel: "undefined",
    apply: '.undefined',
    type: 'function',
    detail: 'z.ZodUndefined',
  },
  {
    label: ".strict",
    displayLabel: "strict",
    apply: '.strict',
    type: 'method',
    detail: 'z.ZodObject<T, "strict", Catchall>',
  },
  {
    label: ".bigint",
    displayLabel: "bigint",
    apply: '.bigint',
    type: 'function',
    detail: 'z.ZodBigInt',
  },
  {
    label: ".enum",
    displayLabel: "enum",
    apply: '.enum',
    type: 'function',
    detail: 'z.ZodEnum',
  },
  {
    label: ".function",
    displayLabel: "function",
    apply: '.function',
    type: 'function',
    detail: 'z.ZodFunction',
  },
  {
    label: ".literal",
    displayLabel: "literal",
    apply: '.literal',
    type: 'function',
    detail: 'z.ZodLiteral',
  },
  {
    label: ".intersection",
    displayLabel: "intersection",
    apply: '.intersection',
    type: 'function',
    detail: 'z.ZodIntersection',
  },
  {
    label: ".union",
    displayLabel: "union",
    apply: '.union',
    type: 'function',
    detail: 'z.ZodUnion',
  },
];

export default function Box(props: BoxProps) {
  const { className, label, onChange, onKeyPress, placeholder, style, type, value } = props
  const { theme } = useContext(MainContext);
  const disabled = type === 'result';
  const focused = type === 'data';
  const activeTheme = theme === 'dark' ? 'dark' : 'light';

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
          className={`h-[calc(100%-2rem)] w-auto overflow-auto rounded-lg border-[1px] focus-within:border-gray-200 focus-within:shadow-md transition-shadow ${style}`}
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
