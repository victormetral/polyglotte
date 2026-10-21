# Roadmap

> Where this conservatory is heading, from the basics to a deployed four-back-end application.
> Decisions are frozen and reviewed once a quarter (end of January, April, July and October).

## Horizons

| When | Goal | Certifications |
|---|---|---|
| **3 months** (Jan 2027) | Sessions 04–20: the basics in four languages, React and Linux; tests and CI from session 08; SQL from session 09 | React Junior · PCEP (Python) |
| **6 months** (Apr 2027) | Work-study begins (reduced pace); HTTP, databases, advanced OOP; the Repertoire starts: OpenAPI contract, SQL schema, React front end, NestJS API | LFCA (Linux) · AWS Cloud Practitioner |
| **9 months** (Jul 2027) | FastAPI, Symfony and Spring Boot APIs under Docker Compose; deployment on AWS; OWASP Top 10 compared across the four back ends | React Mid-level · PCAP (Python) |
| **12 months** (Oct 2027) | Complete Repertoire: four back ends, a second front end in Angular, CI/CD, logs and metrics | Docker · LFCS (Linux) |
| **24 months** (Oct 2028) | Go back end; Terraform and Kubernetes; hexagonal and microservice variants | AWS Solutions Architect · Terraform · OCP Java SE 25 |

## Sessions 04 to 25

| # | Scale (4 languages) | Algorithm | React etude | Linux | SQL |
|---|---|---|---|---|---|
| 04 | Comparison operators | Larger of two numbers | Rendering a boolean | Comparisons (`test`, `[ ]`) | — |
| 05 | Conditions + review | Leap year | Conditional rendering | Permissions and users | — |
| 06 | Strings | Palindrome | Formatting text | Processes | — |
| 07 | Functions | Algo 03 variants as functions | Components and props | Packages, environment variables | — |
| 08 | Tests + CI | Testing the variants | Vitest + Testing Library | Bash scripts + ShellCheck | — |
| 09 | Arrays and lists | Reversing a list | Rendering lists | Pipes and filters | `SELECT` |
| 10 | Loops + review | Maximum, sum 1 to n | State and events | Loops in Bash | `WHERE`, `ORDER BY` |
| 11 | Objects, dictionaries, maps | Counting occurrences | Object state | SSH and keys | `JOIN` |
| 12 | Classes and OOP | Stack | Controlled forms | Services (`systemd`) | `GROUP BY` |
| 13 | Errors and exceptions | Input validation | Displaying errors | Logs (`journalctl`) | Constraints and keys |
| 14 | Modules and packages | Binary search | Splitting into modules | Networking | Transactions |
| 15 | Generics and interfaces + review | Queue | Generic typed components | Storage | Indexes |
| 16 | Higher-order functions | Sorting | Filtering and sorting a list | Scheduled tasks (`cron`) | Views |
| 17 | Files and JSON | Reading a CSV | Loading JSON | Archives and backups | Importing a CSV |
| 18 | Dates and times | Duration between two dates | Formatting dates (`Intl`) | `sudo` and advanced permissions | Dates in SQL |
| 19 | Asynchronous code | Recursion | `useEffect` + `fetch` | Docker CLI | Subqueries |
| 20 | HTTP client + review | Big O: comparing two solutions | Loading and error states | HTTP with `curl` | CTEs (`WITH`) |
| 21 | HTTP server without a framework | Hand-made hash table | React Router | Reverse proxy (Nginx) | Window functions |
| 22 | Database access | Pagination | Form connected to an API | Secrets and `.env` files | Parameterized queries |
| 23 | Advanced OOP (SOLID) | Binary tree | Component composition | Firewall (`ufw`) | Modeling, normalization |
| 24 | Design patterns | Graph traversal (BFS) | Context (`useContext`) | LFCA mock exam | Migrations (dbmate) |
| 25 | General review; the Repertoire begins | Review | React Junior mock exam | Review | Repertoire schema |

## The Repertoire: a Practice Log

An API to track music practice: pieces, practice sessions, duration, tempo and progress. Built four times on the same contract and database:

- **Contract**: OpenAPI 3.1 (`repertoire/contract/openapi.yaml`)
- **Database**: one PostgreSQL schema, shared SQL migrations (dbmate)
- **Front end**: React + TypeScript
- **Back ends**: NestJS + Prisma · FastAPI + SQLAlchemy · Symfony + Doctrine · Spring Boot + JPA

## Tooling

| Language | Packages | Tests | Types / lint |
|---|---|---|---|
| TypeScript | npm | Vitest | tsc · ESLint · Prettier |
| PHP | Composer | PHPUnit | PHPStan · PHP-CS-Fixer |
| Java | Maven | JUnit 5 | javac · Spotless |
| Python | uv | pytest | mypy · Ruff |
| Bash | — | — | ShellCheck |
