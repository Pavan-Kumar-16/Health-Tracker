// ============================================================
//  js/app.js — Main controller; wires storage, render & UI
// ============================================================

const App = (() => {
  let state = {};   // { taskId: true/false }

  /* ── Apply persisted checked state to DOM ── */
  function _applyState() {
    ALL_TASK_IDS.forEach(id => {
      const card = document.getElementById(id);
      if (card) card.classList.toggle('checked', !!state[id]);
    });
  }

  /* ── Refresh progress bar + stats ── */
  function _refresh() {
    const { done, total, pct, history } = Storage.save(state);
    UI.updateProgress(done, total, pct);
    UI.renderStreak(history);
  }

  /* ── Public: toggle a task ── */
  function toggle(id, label) {
    state[id] = !state[id];
    const card = document.getElementById(id);
    if (!card) return;

    card.classList.toggle('checked', state[id]);
    card.classList.add('pop');
    setTimeout(() => card.classList.remove('pop'), 300);

    if (state[id]) UI.showToast(label);
    _refresh();
  }

  /* ── Public: reset today ── */
  function resetDay() {
    if (!confirm("Reset today's checklist?")) return;
    state = {};
    _applyState();
    _refresh();
    UI.showToast('Checklist reset');
  }

  /* ── Bootstrap ── */
  function init() {
    // 1. Render all tab HTML from data
    Render.mount();

    // 2. Load persisted state
    state = Storage.getChecked();

    // 3. Apply checked classes
    _applyState();

    // 4. Refresh progress
    _refresh();

    // 5. Set date badge
    UI.setDateBadge();
  }

  return { init, toggle, resetDay };
})();

// ── Entry point ──
document.addEventListener('DOMContentLoaded', App.init);
