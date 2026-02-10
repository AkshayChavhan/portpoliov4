'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { codeEditorContent } from '@/lib/data';

interface Token {
  text: string;
  type: 'keyword' | 'string' | 'variable' | 'comment' | 'punctuation' | 'property' | 'value' | 'plain';
}

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  const patterns: [RegExp, Token['type']][] = [
    [/^(\/\/.*)/, 'comment'],
    [/^(const|let|var|export|default|import|from|function|return|true|false)\b/, 'keyword'],
    [/^("[^"]*"|'[^']*')/, 'string'],
    [/^(\w+)(?=\s*[:=])/, 'variable'],
    [/^(\w+)(?=\s*\()/, 'variable'],
    [/^([{}[\](),;:])/, 'punctuation'],
    [/^(\w+)/, 'plain'],
    [/^(\s+)/, 'plain'],
  ];

  let remaining = line;
  while (remaining.length > 0) {
    let matched = false;
    for (const [pattern, type] of patterns) {
      const match = remaining.match(pattern);
      if (match) {
        tokens.push({ text: match[0], type });
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      tokens.push({ text: remaining[0], type: 'plain' });
      remaining = remaining.slice(1);
    }
  }
  return tokens;
}

const colorMap: Record<Token['type'], string> = {
  keyword: '#c084fc',
  string: '#4ade80',
  variable: '#60a5fa',
  comment: '#64748b',
  punctuation: '#94a3b8',
  property: '#f472b6',
  value: '#fb923c',
  plain: '#e2e8f0',
};

export function CodeEditor() {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const content = codeEditorContent;

    const typeInterval = setInterval(() => {
      if (index < content.length) {
        setDisplayedText(content.slice(0, index + 1));
        index++;

        // Auto-scroll
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 35);

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const lines = displayedText.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="rounded-xl overflow-hidden shadow-2xl border"
      style={{
        backgroundColor: 'var(--code-bg)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs ml-2" style={{ color: '#64748b' }}>
          akshay.config.ts
        </span>
      </div>

      {/* Code content */}
      <div
        ref={containerRef}
        className="p-4 font-mono text-sm leading-6 overflow-auto max-h-[350px]"
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex">
            <span
              className="select-none w-8 text-right mr-4 shrink-0"
              style={{ color: '#475569' }}
            >
              {lineIndex + 1}
            </span>
            <span>
              {tokenizeLine(line).map((token, tokenIndex) => (
                <span key={tokenIndex} style={{ color: colorMap[token.type] }}>
                  {token.text}
                </span>
              ))}
              {lineIndex === lines.length - 1 && (
                <span
                  className="inline-block w-[2px] h-[1.1em] align-middle ml-[1px]"
                  style={{
                    backgroundColor: '#60a5fa',
                    opacity: cursorVisible ? 1 : 0,
                    transition: 'opacity 0.1s',
                  }}
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
