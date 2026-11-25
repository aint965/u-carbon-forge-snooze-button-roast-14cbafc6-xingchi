# Snooze Button Roast

A one-line roast of an alarm clock that rings at 6 AM on a Saturday, written by a small deterministic Node program (`main.ts`) that writes the line to `/output/entry.txt`.

[![Snooze Button Roast](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/aint965/u-carbon-forge-snooze-button-roast-14cbafc6-xingchi/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/aint965/u-carbon-forge-snooze-button-roast-14cbafc6-xingchi/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)

## The roast

> 6 AM Saturday: my alarm clock goes off like it's collecting a debt I never owed — from a job I don't even have.

## How it works

Run `node main.ts` (Node 22, no dependencies, no network). It creates the output directory and writes exactly one line to `/output/entry.txt` — no trailing newline, deterministic on every run. Run `node verify.mjs` to check determinism, length, and format.
