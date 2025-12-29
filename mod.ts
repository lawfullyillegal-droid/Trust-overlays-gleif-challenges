/**
 * Trust Overlays GLEIF Challenges Module
 * 
 * This module provides utilities for Trust Overlay validation
 * and GLEIF challenge processing.
 */

export interface TrustOverlay {
  trustReference: string;
  originTrace: string;
  injectedTimestamp: string;
  gleifChallenge?: string;
  symbolicAssertion?: string;
}

/**
 * Validates a Trust Overlay structure
 * @param overlay - The trust overlay to validate
 * @returns true if valid, false otherwise
 */
export function validateTrustOverlay(overlay: TrustOverlay): boolean {
  return !!(
    overlay.trustReference &&
    overlay.originTrace &&
    overlay.injectedTimestamp
  );
}

/**
 * Formats a timestamp for Trust Overlay
 * @param date - The date to format
 * @returns Formatted timestamp string
 */
export function formatTimestamp(date: Date): string {
  return date.toISOString();
}
