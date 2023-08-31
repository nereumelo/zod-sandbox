import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from "@codemirror/view";
import Header from './Header';
import { KeyboardEvent } from 'react';

export default function Box(props: BoxProps) {
  const { className, label, onChange, onKeyPress, placeholder, style, value } = props
  const disabled = Object.hasOwn(props, 'disabled');
  const focused = Object.hasOwn(props, 'focused');

  const handleValue = (value: string) => {
    onChange?.(value);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault();
      onKeyPress?.();
    }
  }

  return (
    <div className={`${className} h-full w-full`}>
      <label htmlFor="label">
        <Header.h2>{label}</Header.h2>
      </label>
        <CodeMirror
          className={`h-[calc(100%-2rem)] w-auto overflow-auto rounded-lg border-[1px] focus-within:border-gray-200 focus-within:shadow-md transition-shadow ${style}`}
          onChange={handleValue}
          placeholder={placeholder}
          extensions={[javascript(), EditorView.lineWrapping]}
          value={value}
          readOnly={disabled}
          autoFocus={focused}
          height='100%'
          basicSetup={{
            lineNumbers: false,
          }}
          onKeyDownCapture={handleKeyPress}
        />
    </div>
  )
}

type BoxProps = {
  style?: string
  className?: string
  disabled?: boolean
  focused?: boolean
  label: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onKeyPress?: () => void
}
