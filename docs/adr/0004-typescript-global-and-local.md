# 4. TypeScript installed globally and per project

- Date: 2026-10-12
- Status: Accepted

## Context
TypeScript is used in this repository and in other projects.

## Decision
Install it globally for quick checks, and locally (npm install -D) in each project; always run npx tsc inside a project.

## Consequences
The version used by each project is pinned in its package.json.
