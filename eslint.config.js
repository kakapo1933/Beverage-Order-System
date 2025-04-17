/**
 * ESLint Configuration for Beverage Order System
 *
 * This configuration supports:
 * - JavaScript files with ES6+ syntax
 * - TypeScript files
 * - React components (JSX and TSX)
 * - Prettier integration
 */

// Core ESLint imports
import js from '@eslint/js';
import globals from 'globals';

// TypeScript ESLint imports
import * as typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

// React-related imports
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

// Prettier-related imports
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

// ====================================
// Configuration Groups
// ====================================

/**
 * Common ESLint ignores for the project
 */
const ignorePatterns = {
	// Dependencies
	dependencies: ['**/node_modules/**', '.pnp.js', '.pnpm-store/**'],
	// Build outputs
	build: ['**/dist/**', '**/build/**', '**/out/**', '.next/**', '.nuxt/**', '.output/**'],
	// Testing and tooling
	testing: ['**/coverage/**'],
	// Generated files
	generated: ['**/.eslintcache', '**/.stylelintcache', '**/.turbo/**'],
	// Misc caches and temp
	misc: ['**/.cache/**', '**/.temp/**', '**/.tmp/**', '**/.history/**'],
	// Project specifics
	project: ['**/prisma/migrations/**', '**/plans/**', '**/tasks/**']
};

/**
 * Common browser and node globals for the project
 */
const commonGlobals = {
	...globals.browser,
	...globals.es2020,
	...globals.node
};

/**
 * Base JavaScript configuration
 */
const baseJsConfig = js.configs.recommended;

/**
 * TypeScript configuration
 */
const typescriptConfig = {
	files: ['**/*.{ts,tsx}'],
	languageOptions: {
		parser: typescriptParser,
		parserOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true
			}
			// No project reference - using non-type-aware rules only
		},
		globals: commonGlobals
	},
	plugins: {
		'@typescript-eslint': typescriptEslint
	},
	rules: {
		// Disable ESLint core rules that TypeScript ESLint handles better
		'no-unused-vars': 'off',
		'no-undef': 'off'
	}
};

/**
 * React configuration
 */
const reactConfig = {
	files: ['**/*.{jsx,tsx}'],
	plugins: {
		react: reactPlugin,
		'react-hooks': reactHooksPlugin,
		'react-refresh': reactRefreshPlugin
	},
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true
			}
		},
		globals: commonGlobals
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		// Essential React rules
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react-refresh/only-export-components': 'warn'
	}
};

/**
 * Prettier integration
 */
const prettierIntegration = {
	plugins: {
		prettier: prettierPlugin
	},
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }]
	}
};

/**
 * App-specific configurations
 */
const appSpecificConfig = {
	files: ['apps/client/**/*.{js,jsx,ts,tsx}', 'apps/merchant/**/*.{js,jsx,ts,tsx}'],
	rules: {
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }]
	}
};

/**
 * Common best practices for all files
 */
const commonBestPractices = {
	rules: {
		'prefer-const': 'error',
		'no-var': 'error',
		eqeqeq: 'warn'
	}
};

// ====================================
// Export Config
// ====================================

/**
 * ESLint configuration export
 */
export default [
	// Ignores (always first)
	{
		ignores: [
			...ignorePatterns.dependencies,
			...ignorePatterns.build,
			...ignorePatterns.testing,
			...ignorePatterns.generated,
			...ignorePatterns.misc,
			...ignorePatterns.project
		]
	},
	// Base configurations
	baseJsConfig,
	typescriptConfig,
	reactConfig,
	// App-specific rules
	appSpecificConfig,
	// Common best practices
	commonBestPractices,
	// Prettier (always last to override other formatting rules)
	prettierIntegration,
	prettierConfig
];
