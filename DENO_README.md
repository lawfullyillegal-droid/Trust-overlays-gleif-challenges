# Trust Overlays GLEIF Challenges - Deno Module

This Deno module provides utilities for Trust Overlay validation and GLEIF challenge processing.

## Features

- TypeScript interfaces for Trust Overlay structures
- Validation functions for Trust Overlay data
- Timestamp formatting utilities

## Development

### Prerequisites

- [Deno](https://deno.land/) v1.x or higher

### Running Tests

```bash
deno test -A
```

### Linting

```bash
deno lint
```

## Module Structure

- `mod.ts` - Main module with types and functions
- `mod_test.ts` - Test suite
- `deno.json` - Deno configuration

## API

### `TrustOverlay` Interface

```typescript
interface TrustOverlay {
  trustReference: string;
  originTrace: string;
  injectedTimestamp: string;
  gleifChallenge?: string;
  symbolicAssertion?: string;
}
```

### `validateTrustOverlay(overlay: TrustOverlay): boolean`

Validates that a Trust Overlay has all required fields populated.

### `formatTimestamp(date: Date): string`

Formats a Date object to ISO string format for use in Trust Overlays.
