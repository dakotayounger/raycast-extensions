/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `format-clipboard` command */
  export type FormatClipboard = ExtensionPreferences & {
  /** Engine - Auto uses Claude when an API key is set and falls back to the offline formatter; otherwise force one. */
  "engine": "auto" | "ai" | "offline",
  /** Anthropic API Key - Optional. Enables the AI engine. Get one at console.anthropic.com */
  "anthropicApiKey"?: string,
  /** Claude Model - Model id for the AI engine. Leave blank for the default (Haiku 4.5). */
  "model": string
}
}

declare namespace Arguments {
  /** Arguments passed to the `format-clipboard` command */
  export type FormatClipboard = {}
}

