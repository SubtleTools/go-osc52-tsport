// @subtletools/go-osc52-ts - TypeScript port of go-osc52
// This is the main export file for the TypeScript-native API

// Export the main classes and functions
export { 
  Sequence, 
  newSequence, 
  querySequence, 
  clearSequence 
} from './core.js';

// Export all types and enums
export { 
  Clipboard, 
  Mode, 
  Operation, 
  type Writer, 
  type WriterTo, 
  type Stringer 
} from './types.js';

// Import for convenience aliases
import { newSequence, querySequence, clearSequence } from './core.js';

// Convenience aliases for common operations
export const New = newSequence;
export const Query = querySequence;
export const Clear = clearSequence;