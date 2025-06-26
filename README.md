# CodeQuest – Real-Time Collaborative Algorithm Learning Platform

**CodeQuest** is an end-to-end platform designed to transform algorithm learning into an interactive, visual, and collaborative experience. Unlike traditional platforms like LeetCode, CodeQuest is built for both learners and educators to co-create and customize programming challenges, visualize ideas, and safely execute user-submitted code across multiple languages.

---

## Problem Statement

Modern algorithm platforms focus heavily on individual problem-solving with minimal support for visual content, real-time teamwork, or custom test configurations. Educators struggle to customize content, and learners face limitations when collaborating or working offline.

---

## What CodeQuest Solves

### Visual + Modular Problem Authoring

* Compose problems using draggable blocks: problem text, code editor, canvas, test cases.
* Embed rich media, input constraints, and Markdown-powered formatting.

### AI-Powered Authoring & Guidance

* Use OpenAI GPT-4 to auto-generate problem statements, solutions, and step-by-step explanations.
* Rephrase unclear text and provide real-time hints to learners.

### Real-Time + Offline Collaboration

* Built with **Yjs** CRDT and **IndexedDB** for real-time editing and offline-first experience.
* Features live cursors, comments, mentions, and thread-based discussions.

### Transparent & Secure Code Execution

* Custom-built execution system with:

  * **Isolate** sandbox
  * Queue-based workers
  * Compiled/interpreted language support (Python, C++, Java, JS...)
  * Resource control (CPU, RAM, Timeout)

### Extensible Architecture

* All modules communicate via a unified event bus: canvas, editor, AI prompts, runner.
* Designed for future add-ons like grading analytics, contest modes, and student progress tracking.

---

## User Value Delivered

| Stakeholder      | Value                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Learners**     | Run code, create test cases, get AI help, collaborate and sync work offline               |
| **Educators**    | Author visual & interactive problems, use AI to scaffold, organize collaborative sessions |
| **Institutions** | Deploy an extensible platform with visibility, auditability, and high security            |

---

## System Architecture

### Real-Time Collaboration Flow

![Collab Data Flow](https://github.com/user-attachments/assets/15d962ee-9f15-402d-a69d-2101d787b209)

* Yjs + IndexedDB enable seamless syncing and offline editing.
* Ensures consistency across collaborators even with unstable connectivity.

### Code Execution System

![Code Execution System](https://github.com/user-attachments/assets/34e34be0-63c1-4eb0-bc5f-1d2c80467bab)

* Submissions are stored and queued asynchronously.
* Execution is handled by workers using **Isolate** inside secure sandboxes.
* Supports both interpreted (JS, Python) and compiled (C++, Java) code.

### Sequence Diagram for Submission Lifecycle

![Execution Sequence](https://github.com/user-attachments/assets/63b1ca58-cc12-4219-80c1-5f8b85171302)

* From user submission ➔ sandbox initialization ➔ code compile/run ➔ results returned.
* Clean-up and result parsing ensure safe, traceable execution.

---

## Tech Stack Summary

* **Frontend**: Next.js 15 (App Router, Server Actions), TailwindCSS, Shadcn UI
* **Collab Engine**: Yjs + IndexedDB (CRDT-based)
* **Code Execution**: Self-hosted sandbox with Isolate, queue worker system
* **Backend**: Convex (Realtime BaaS for document and access control)
* **AI Integration**: OpenAI GPT-4 for explanation, generation, feedback
* **Authentication**: Clerk.dev (Role-based access)

---

## Development Methodology

* 8 sprint cycles with continuous testing and design iteration.
* Mid-project pivot to remove Piston API and build in-house runner using Isolate.
* Emphasis on resilience, modularity, and extensibility.

---

> CodeQuest bridges the gap between passive problem-solving and active, visual, collaborative learning in computer science education.
