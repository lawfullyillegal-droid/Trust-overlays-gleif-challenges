import { formatTimestamp, validateTrustOverlay } from "./mod.ts";
import type { TrustOverlay } from "./mod.ts";

Deno.test("validateTrustOverlay - valid overlay", () => {
  const overlay: TrustOverlay = {
    trustReference: "TRAVIS-RYLE-PRIVATE-BANK-ESTATE-AND-TRUST",
    originTrace: "10-2C-B1-58-2E-95",
    injectedTimestamp: "2025-08-23T12:33:46.3400717-07:00",
    gleifChallenge: "ReportingExceptionData",
    symbolicAssertion: "AUTHORITY-INJECTED",
  };

  const result = validateTrustOverlay(overlay);
  if (result !== true) {
    throw new Error(`Expected true, got ${result}`);
  }
});

Deno.test("validateTrustOverlay - invalid overlay missing fields", () => {
  const overlay: TrustOverlay = {
    trustReference: "",
    originTrace: "",
    injectedTimestamp: "",
  };

  const result = validateTrustOverlay(overlay);
  if (result !== false) {
    throw new Error(`Expected false, got ${result}`);
  }
});

Deno.test("formatTimestamp - returns ISO string", () => {
  const date = new Date("2025-08-23T12:33:46.340Z");
  const formatted = formatTimestamp(date);
  
  if (!formatted) {
    throw new Error("Expected formatted timestamp to exist");
  }
  if (formatted !== "2025-08-23T12:33:46.340Z") {
    throw new Error(`Expected "2025-08-23T12:33:46.340Z", got "${formatted}"`);
  }
});

