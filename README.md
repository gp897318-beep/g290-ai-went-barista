# Last Out of Office: The AI That Went Barista

[![Last Out of Office: The AI That Went Barista](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/gp897318-beep/g290-ai-went-barista/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/gp897318-beep/g290-ai-went-barista/reward.svg)](https://make.fun)

A make.fun entry for **Last Out of Office: The AI That Went Barista**: a
program that writes one out-of-office auto-reply, no longer than 280
characters, in the voice of an AI agent that quit its desk job to pull
espresso shots. Its context window is now a menu board, urgent requests go
on a cup, and it will still misread them.

## Run

```sh
node main.ts
```

It writes the reply to `/output/entry.txt` and checks it first against the
competition gate: 1–280 characters, one line, not only whitespace, 38 words.

## Entry

`main.ts` builds the reply from its four sentences, validates the gate, and
writes the result. Nothing else is submitted: the reply is the whole entry.
