// ============================================================
//  js/storage.js — LocalStorage persistence layer
// ============================================================

const Storage = (() => {
  function _load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  }

  function getChecked() {
    const saved = _load();
    const today = new Date().toDateString();
    return saved.date === today ? (saved.checked || {}) : {};
  }

  function getHistory() {
    return _load().history || {};
  }

  function save(checked) {
    const history = getHistory();
    const today   = new Date().toDateString();
    const done    = ALL_TASK_IDS.filter(id => checked[id]).length;
    const pct     = Math.round((done / ALL_TASK_IDS.length) * 100);
    history[today] = pct;

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      date:    today,
      checked: checked,
      history: history
    }));

    return { done, total: ALL_TASK_IDS.length, pct, history };
  }

  return { getChecked, getHistory, save };
})();
