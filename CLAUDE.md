# CLAUDE.md — Context Layer

**READ THIS FIRST before starting any work in this project.**

## Step 1 — Load the context layer

Read these files in order:

1. `~/.claude/projects/<this-project-hash>/memory/MEMORY.md`
   → Routing index. Tells you which files to read next.

2. `~/.claude/projects/<this-project-hash>/memory/active-work.md`
   → What other agents are doing RIGHT NOW. Avoid their files.

3. `~/.claude/projects/<this-project-hash>/memory/projects/<this-project>.md`
   → Current state of this specific project.

If debugging: check `gotchas.md` before spending time investigating.
If making a tech or architecture decision: check `decisions.md` first.

---

## Protocol

### On session start
1. Read MEMORY.md (the index)
2. Read active-work.md (coordination)
3. Read this project's file in `projects/`
4. Check gotchas.md if relevant

### During work
- Add your entry to `active-work.md` when you start a task
- Update `active-work.md` when your status changes
- Update the project file immediately after meaningful changes
- Add to `gotchas.md` the moment you discover a bug or workaround
- Add to `decisions.md` when a significant choice is made

### On session end
- Remove your entry from `active-work.md`
- Append a summary to `worklog.md`

### Critical rule
**Write continuously — not just at session end.**
If you crash mid-session, your active-work.md entry stays as a signal to the next agent.

---

## Project-specific notes
<!-- Add anything project-specific here that agents need to know -->
