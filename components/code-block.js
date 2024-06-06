"use client"
import { CopyBlock, tomorrowNightBlue } from 'react-code-blocks';

export default function CodeBlock({ children }) {
    return <CopyBlock
        text={children}
        language="json"
        showLineNumbers={true}
        codeBlock={true}
        theme={tomorrowNightBlue}
        wrapLines
    />
}