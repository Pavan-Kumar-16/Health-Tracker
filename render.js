// ============================================================
//  js/render.js — Builds all tab HTML from data/tasks.js
// ============================================================

const Render = (() => {

  /* ── Helpers ── */
  function icon(name, extraClass = '') {
    return `<span class="ms ${extraClass}">${name}</span>`;
  }

  function checkCard({ id, icon: ic, iconColor, title, sub, tag, tagColor }) {
    return `
      <div class="card" id="${id}" onclick="App.toggle('${id}', '${title}')">
        <div class="card-row">
          <div class="check-circle">${icon('check')}</div>
          <div class="card-icon">${icon(ic, iconColor)}</div>
          <div class="card-body">
            <div class="card-title">${title}</div>
            <div class="card-sub">${sub}</div>
          </div>
          <span class="tag ${tagColor}">${tag}</span>
        </div>
      </div>`;
  }

  function sectionLabel(text, iconName, iconColor) {
    return `<div class="section-label">${icon(iconName, iconColor)}${text}</div>`;
  }

  function infoCard(variant, iconName, title, sub) {
    return `
      <div class="info-card ${variant}">
        ${icon(iconName)}
        <div>
          <div class="info-card-title">${title}</div>
          <div class="info-card-sub">${sub}</div>
        </div>
      </div>`;
  }

  function resetBtn() {
    return `
      <button class="reset-btn" onclick="App.resetDay()">
        ${icon('restart_alt')} Reset Today's Checklist
      </button>`;
  }

  /* ── Tab builders ── */

  function buildChecklistTab(tabKey) {
    const groups = TASKS[tabKey];
    if (!groups) return '';
    return groups.map(group => {
      const label = sectionLabel(group.group, group.groupIcon, group.groupIconColor);
      const cards = group.items.map(checkCard).join('');
      return label + cards;
    }).join('');
  }

  function buildTodayTab() {
    return buildChecklistTab('today') + resetBtn();
  }

  function buildNutritionTab() {
    let html = buildChecklistTab('nutrition');
    html += sectionLabel('Reminder', 'info', 'ic-yellow');
    html += infoCard('blue', 'grocery', 'Use Iodized Salt', 'Normal iodized salt is fine — important for thyroid health');
    return html;
  }

  function buildExerciseTab() {
    let html = '';
    const groups = TASKS.exercise;

    // Daily walking group
    html += sectionLabel(groups[0].group, groups[0].groupIcon, groups[0].groupIconColor);
    html += groups[0].items.map(checkCard).join('');

    // Walk tips
    html += sectionLabel('Walk Tips', 'lightbulb', 'ic-blue');
    WALK_TIPS.forEach(tip => {
      html += infoCard('blue', tip.icon, tip.title, tip.sub);
    });

    // Weekly goals group
    html += sectionLabel(groups[1].group, groups[1].groupIcon, groups[1].groupIconColor);
    html += groups[1].items.map(checkCard).join('');

    return html;
  }

  function buildAvoidTab() {
    let html = '';

    html += sectionLabel('Foods to Avoid', 'block', 'ic-red');
    AVOID_DATA.avoid.forEach(item => {
      html += infoCard('red', item.icon, item.title, item.sub);
    });

    html += sectionLabel('Foods to Limit', 'warning', 'ic-yellow');
    AVOID_DATA.limit.forEach(item => {
      html += infoCard('yellow', item.icon, item.title, item.sub);
    });

    html += sectionLabel('Medicine Rules', 'priority_high', 'ic-red');
    AVOID_DATA.rules.forEach(item => {
      html += infoCard('blue', item.icon, item.title, item.sub);
    });

    return html;
  }

  function buildStatsTab() {
    let html = '';

    html += sectionLabel("Today's Score", 'bar_chart', 'ic-blue');
    html += `
      <div class="stats-row">
        <div class="stat-box">
          <div class="stat-num" id="stat-done" style="color:var(--green)">0</div>
          <div class="stat-label">Done</div>
        </div>
        <div class="stat-box">
          <div class="stat-num" id="stat-left" style="color:var(--yellow)">0</div>
          <div class="stat-label">Left</div>
        </div>
        <div class="stat-box">
          <div class="stat-num" id="stat-pct" style="color:var(--blue)">0%</div>
          <div class="stat-label">Score</div>
        </div>
      </div>`;

    html += sectionLabel('Last 7 Days', 'calendar_month', 'ic-muted');
    html += `<div class="streak-row" id="streakRow"></div>`;

    html += sectionLabel('Key Reminders', 'lightbulb', 'ic-yellow');
    STATS_REMINDERS.forEach(r => {
      html += infoCard('blue', r.icon, r.title, r.sub);
    });

    html += resetBtn();
    return html;
  }

  /* ── Mount all tabs ── */
  function mount() {
    document.getElementById('tab-today').innerHTML     = buildTodayTab();
    document.getElementById('tab-nutrition').innerHTML = buildNutritionTab();
    document.getElementById('tab-exercise').innerHTML  = buildExerciseTab();
    document.getElementById('tab-avoid').innerHTML     = buildAvoidTab();
    document.getElementById('tab-stats').innerHTML     = buildStatsTab();
  }

  return { mount };
})();
