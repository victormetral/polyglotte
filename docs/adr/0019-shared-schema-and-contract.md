# 19. Shared SQL migrations and OpenAPI contract

- Date: 2026-10-20
- Status: Accepted

## Context
Four back ends must stay strictly comparable.

## Decision
One PostgreSQL schema in shared SQL migrations (dbmate) that the ORMs read but never generate, and one OpenAPI 3.1 contract.

## Consequences
Same data and same API everywhere; documentation and contract tests come from the OpenAPI file.
