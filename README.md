# Raycast extensions

Source for two clipboard tools:

- **[Magic Formatter](./text-formatter)** — re-spaces copied text into clean paragraphs and keeps bold, italics, and bullets.
- **[Magic Eraser](./magic-eraser)** — strips bullet, number, and checkbox junk while keeping the rest of the formatting.

## Install (for anyone else)

Once these are in the [Raycast Store](https://www.raycast.com/store), open Raycast and search for **Magic Formatter** or **Magic Eraser**, then press Enter to install.

Do not clone this repo to install. GitHub is for the source code only.

Store links (filled in after Raycast accepts the listings). Both were submitted on
2026-09-09 and are awaiting Raycast review:

- Magic Formatter — [submission #30947](https://github.com/raycast/extensions/pull/30947)
- Magic Eraser — [submission #30948](https://github.com/raycast/extensions/pull/30948)

## For Dakota (rebuild after a Raycast update)

If a command shows **Missing executable**, rebuild from this folder (not `npm run build` — that one is for the Store, not for your Mac):

```bash
cd text-formatter && npm install && npx ray build -e dev -I
cd ../magic-eraser && npm install && npx ray build -e dev -I
```

## Publish to the Store

From each extension folder:

```bash
cd text-formatter && npm run publish
cd ../magic-eraser && npm run publish
```

That opens a pull request on [raycast/extensions](https://github.com/raycast/extensions). After Raycast merges it, anyone can install from the Store.

Run those two commands **one at a time**. The first publish on a new machine asks you to
authorize Raycast against GitHub in the browser, and if a second command is already sitting
in the terminal it gets swallowed by that prompt — the authorization silently never
completes and publish fails with `fork extensions repo: forbidden`.

The publish flow forks [raycast/extensions](https://github.com/raycast/extensions) to your
account and keeps a working clone in `~/.config/raycast/public-extensions-fork`. That fork is
`dakotayounger/extensions`; leave it in place so later publishes reuse it.
