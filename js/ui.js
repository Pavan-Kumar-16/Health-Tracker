// ============================================================
//  js/ui.js — Tab switching, toast, streak calendar
// ============================================================

const UI = (() => {

  /* ── Tab switching ── */
  function switchTab(name) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));

    document.getElementById('tab-' + name).classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(b => {
      if (b.dataset.tab === name) b.classList.add('active');
    });

    const bnav = document.getElementById('bnav-' + name);
    if (bnav) bnav.classList.add('active');
  }

  /* ── Toast ── */
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  }

  /* ── Progress bar & stats ── */
  function updateProgress(done, total, pct) {
    document.getElementById('doneCount').textContent = done;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('progressFill').style.width = pct + '%';

    const statDone = document.getElementById('stat-done');
    const statLeft = document.getElementById('stat-left');
    const statPct  = document.getElementById('stat-pct');
    if (statDone) statDone.textContent = done;
    if (statLeft) statLeft.textContent = total - done;
    if (statPct)  statPct.textContent  = pct + '%';
  }

  /* ── Streak calendar ── */
  function renderStreak(history) {
    const row = document.getElementById('streakRow');
    if (!row) return;
    row.innerHTML = '';
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key     = d.toDateString();
      const pct     = history[key];
      const isToday = i === 0;

      const div = document.createElement('div');
      div.className = 'streak-day'
        + (pct >= 80 ? ' done'  : '')
        + (isToday   ? ' today' : '');
      div.textContent = days[d.getDay()];
      div.title = pct != null ? `${pct}%` : 'No data';
      row.appendChild(div);
    }
  }

  /* ── Date badge ── */
  function setDateBadge() {
    const el = document.getElementById('dateBadge');
    if (!el) return;
    el.textContent = new Date().toLocaleDateString('en-IN', {
      weekday: 'short', day: 'numeric', month: 'short'
    });
  }

  return { switchTab, showToast, updateProgress, renderStreak, setDateBadge };
})();
