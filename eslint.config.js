import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-undef': 'error',        
      //OTOMATİK ALTYAZI OLUŞTURMA ARACI
      'react/jsx-no-undef': 'error',            
      'react/jsx-no-duplicate-props': 'error',  
      'react/no-direct-mutation-state': 'error', 
      //OTOMATİK ALTYAZI OLUŞTURMA ARACI
      'react-hooks/rules-of-hooks': 'error',   
      //OTOMATİK ALTYAZI OLUŞTURMA ARACI
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
