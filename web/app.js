/* SQTP front-end prototype. All records below are demo data kept in this browser. */
const STORAGE_KEY = 'sqtp-demo-v1';
const STATUS = {
  completed: { label: '已修读', cls: 'green' },
  inProgress: { label: '正在修读', cls: 'yellow' },
  planned: { label: '计划修读', cls: 'blue' },
  notStarted: { label: '未修读', cls: 'red' },
};

const catalog = [
  { id: 'cs1001', code: 'CS1001', name: '程序设计基础', credits: 3, category: '专业基础课程', term: '2026 秋冬', prerequisites: [], instructor: '周老师', description: '学习程序设计基本思想、常用数据结构和基础编程实践。', meetings: [{ day: 1, start: 1, end: 2, weeks: '1-16周' }, { day: 3, start: 3, end: 4, weeks: '1-16周' }] },
  { id: 'math1001', code: 'MATH1001', name: '线性代数', credits: 4, category: '专业基础课程', term: '2026 秋冬', prerequisites: [], instructor: '王老师', description: '面向人工智能专业的线性代数基础课程。', meetings: [{ day: 2, start: 1, end: 2, weeks: '1-16周' }] },
  { id: 'ai1002', code: 'AI1002', name: '人工智能导论', credits: 2, category: '专业核心课程', term: '2027 春夏', prerequisites: ['CS1001'], instructor: '陈老师', description: '介绍人工智能的主要问题、方法和应用场景。', meetings: [{ day: 3, start: 3, end: 4, weeks: '1-16周' }] },
  { id: 'cs1003', code: 'CS1003', name: '离散数学', credits: 3, category: '专业基础课程', term: '2027 春夏', prerequisites: [], instructor: '李老师', description: '逻辑、集合、图论与离散结构基础。', meetings: [{ day: 4, start: 5, end: 6, weeks: '1-16周' }] },
  { id: 'cs1004', code: 'CS1004', name: '数据结构与算法', credits: 4, category: '专业核心课程', term: '2027 春夏', prerequisites: ['CS1001'], instructor: '赵老师', description: '学习常用数据结构、算法分析与实现。', meetings: [{ day: 5, start: 1, end: 2, weeks: '1-16周' }] },
  { id: 'cs1005', code: 'CS1005', name: '数字逻辑', credits: 2, category: '专业基础课程', term: '2027 春夏', prerequisites: [], instructor: '孙老师', description: '数字系统与逻辑电路基础课程。', meetings: [{ day: 3, start: 3, end: 4, weeks: '1-16周' }] },
  { id: 'ge1001', code: 'GE1001', name: '大学英语（1）', credits: 2, category: '通识必修课程', term: '2026 秋冬', prerequisites: [], instructor: '外语学院', description: '通识必修课程示例。', meetings: [{ day: 2, start: 3, end: 4, weeks: '1-16周' }] },
  { id: 'ge1002', code: 'GE1002', name: '思想道德与法治', credits: 2, category: '通识必修课程', term: '2026 秋冬', prerequisites: [], instructor: '马老师', description: '通识必修课程示例。', meetings: [{ day: 4, start: 1, end: 2, weeks: '1-16周' }] },
  { id: 'ge1003', code: 'GE1003', name: '体育（1）', credits: 1, category: '通识必修课程', term: '2026 秋冬', prerequisites: [], instructor: '体育部', description: '体育通识必修课程示例。', meetings: [{ day: 5, start: 3, end: 4, weeks: '1-16周' }] },
  { id: 'ai2001', code: 'AI2001', name: '数据结构与算法实践', credits: 2, category: '专业选修课程', term: '2027 秋冬', prerequisites: ['CS1004'], instructor: '赵老师', description: '结合课程项目训练算法实现能力。', meetings: [{ day: 1, start: 5, end: 6, weeks: '1-16周' }] },
  { id: 'ge1004', code: 'GE1004', name: '大学英语（2）', credits: 2, category: '通识必修课程', term: '2027 春夏', prerequisites: ['GE1001'], instructor: '外语学院', description: '通识必修课程示例。', meetings: [{ day: 2, start: 5, end: 6, weeks: '1-16周' }] },
];

const requirementGroups = [
  { id: 'general', title: '通识必修课程', minCredits: 18, courseIds: ['ge1001', 'ge1002', 'ge1003', 'ge1004'] },
  { id: 'foundation', title: '专业基础课程', minCredits: 32, courseIds: ['cs1001', 'math1001', 'cs1003', 'cs1005'] },
  { id: 'core', title: '专业核心课程', minCredits: 26, courseIds: ['ai1002', 'cs1004'] },
  { id: 'electives', title: '专业选修课程', minCredits: 12, courseIds: ['ai2001'] },
];

const demoRecords = [
  { courseId: 'cs1001', status: 'inProgress', term: '2026 秋冬', score: null, gradePoint: null },
  { courseId: 'math1001', status: 'inProgress', term: '2026 秋冬', score: null, gradePoint: null },
  { courseId: 'ge1001', status: 'inProgress', term: '2026 秋冬', score: null, gradePoint: null },
  { courseId: 'ge1002', status: 'inProgress', term: '2026 秋冬', score: null, gradePoint: null },
  { courseId: 'ge1003', status: 'planned', term: '2026 秋冬', score: null, gradePoint: null },
  { courseId: 'ai1002', status: 'planned', term: '2027 春夏', score: null, gradePoint: null },
  { courseId: 'cs1003', status: 'planned', term: '2027 春夏', score: null, gradePoint: null },
  { courseId: 'cs1004', status: 'planned', term: '2027 春夏', score: null, gradePoint: null },
  { courseId: 'cs1005', status: 'planned', term: '2027 春夏', score: null, gradePoint: null },
];

const demoHistory = [
  { courseId: 'ge1003', term: '2025 秋冬', year: '2025-2026', score: 86, gradePoint: 3.9 },
  { courseId: 'math1001', term: '2025 秋冬', year: '2025-2026', score: 82, gradePoint: 3.6 },
  { courseId: 'ge1001', term: '2025 春夏', year: '2025-2026', score: 91, gradePoint: 4.5 },
  { courseId: 'ge1002', term: '2026 秋冬', year: '2026-2027', score: 88, gradePoint: 4.2 },
  { courseId: 'cs1001', term: '2026 秋冬', year: '2026-2027', score: 84, gradePoint: 3.9 },
];

const initialState = {
  profile: { name: '林同学', studentId: '3260****', major: '人工智能专业', cohort: '2026级', auth: '演示身份' },
  records: demoRecords,
  history: demoHistory,
  plan: ['ai1002', 'cs1004', 'cs1005'],
  plannerTerm: '2027 春夏',
  estimates: {
    cs1001: [
      { name: '平时作业', weight: 20, current: 92, expected: 95 },
      { name: '期中考试', weight: 30, current: 84, expected: 84 },
      { name: '期末考试', weight: 50, current: null, expected: 88 },
    ],
    math1001: [
      { name: '作业', weight: 25, current: null, expected: 88 },
      { name: '期中考试', weight: 25, current: null, expected: 85 },
      { name: '期末考试', weight: 50, current: null, expected: 86 },
    ],
  },
  openGroups: ['general', 'foundation', 'core'],
  historyOpen: false,
  historyYear: '2026-2027',
  query: '',
  term: '全部学期',
  recordFilter: 'all',
  toastTimer: null,
  feedback: [],
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...structuredClone(initialState), ...saved } : structuredClone(initialState);
  } catch { return structuredClone(initialState); }
}
let state = loadState();
const appView = document.querySelector('#app-view');
const overlayRoot = document.querySelector('#overlay-root');
const toastEl = document.querySelector('#toast');

function saveState() {
  const { toastTimer, ...safeState } = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(safeState));
}
function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
}
function courseById(id) { return catalog.find(course => course.id === id); }
function recordById(id) { return state.records.find(record => record.courseId === id); }
function recordStatus(id) { return recordById(id)?.status || 'notStarted'; }
function statusPill(status, labelOverride = '') {
  const data = STATUS[status] || STATUS.notStarted;
  return `<span class="pill pill-${data.cls}">${esc(labelOverride || data.label)}</span>`;
}
function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
}
function routeFromHash() {
  const bits = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
  return { page: bits[0] || 'courses', param: bits[1] || '' };
}
function navigate(page, param = '') {
  location.hash = `#${page}${param ? `/${encodeURIComponent(param)}` : ''}`;
}
function currentGpaForCourse(id) {
  const rec = recordById(id);
  if (rec && rec.status !== 'completed') return '—';
  if (rec?.gradePoint != null) return Number(rec.gradePoint).toFixed(1);
  const hist = state.history.find(item => item.courseId === id);
  return hist ? Number(hist.gradePoint).toFixed(1) : '—';
}
function creditSummary(group) {
  const credits = group.courseIds.reduce((sum, id) => {
    return sum + (recordStatus(id) === 'completed' ? (courseById(id)?.credits || 0) : 0);
  }, 0);
  const inProgress = group.courseIds.reduce((sum, id) => {
    return sum + (recordStatus(id) === 'inProgress' ? (courseById(id)?.credits || 0) : 0);
  }, 0);
  return { credits, inProgress, total: group.minCredits, pct: Math.min(1, credits / group.minCredits) };
}
function overallCourseRows() {
  return catalog.filter(course => {
    const q = state.query.trim().toLowerCase();
    const queryOk = !q || `${course.name} ${course.code} ${course.instructor}`.toLowerCase().includes(q);
    const termOk = state.term === '全部学期' || course.term === state.term;
    return queryOk && termOk;
  });
}

function renderHeader(route) {
  const titles = {
    courses: ['课程', '查询课程、查看修读进度并规划选课'],
    curriculum: ['培养方案', '人工智能专业 · 课程模块与学分要求'],
    gpa: ['绩点', '估算正在修读课程成绩 · 查看历史 GPA'],
    me: ['我的', '账号、课程记录与内测反馈'],
    'course-detail': ['课程详情', '课程信息与开课安排'],
    history: ['学年成绩', '历史课程成绩与学年 GPA'],
  };
  const [title, subtitle] = titles[route.page] || titles.courses;
  document.querySelector('#page-title').textContent = title;
  document.querySelector('#page-subtitle').textContent = subtitle;
  const active = route.page === 'course-detail' ? 'courses' : route.page === 'history' ? 'gpa' : route.page;
  document.querySelectorAll('[data-nav]').forEach(link => link.classList.toggle('active', link.dataset.nav === active));
}

function renderProgressCard() {
  const groups = requirementGroups.filter(group => group.id !== 'electives' || group.minCredits > 0);
  return `<section class="card card-pad progress-card">
    <div class="card-title-row"><h3>修读进度</h3><div class="inline-actions"><a class="primary-link tiny" href="#curriculum">查看培养方案　›</a><button class="btn btn-outline no-print" data-action="print-pdf">导出 PDF</button></div></div>
    <div class="progress-grid">${groups.map(group => {
      const result = creditSummary(group);
      const cls = group.id === 'general' ? '' : group.id === 'electives' ? 'violet' : 'green';
      return `<div class="progress-item">
        <div class="progress-item-head"><span>${esc(group.title.replace('课程', ''))}</span><b>${result.credits} / ${result.total} 学分</b></div>
        <div class="progress-track"><div class="progress-fill ${cls}" style="width:${Math.max(2, result.pct * 100)}%"></div></div>
        <div class="progress-meta">${Math.round(result.pct * 100)}% 已完成${result.inProgress ? ` · ${result.inProgress} 学分在修` : ''}</div>
      </div>`;
    }).join('')}</div>
  </section>`;
}

function renderCourseRow(course, includeAdd = false) {
  const status = recordStatus(course.id);
  return `<div class="course-row">
    <div class="course-row-main" data-action="course-detail" data-id="${esc(course.id)}" role="button" tabindex="0">
      <span class="course-code">${esc(course.code)}</span><span class="course-name">${esc(course.name)}</span>
      <span class="course-meta">${course.credits.toFixed(1)} 学分 · ${esc(course.term)} · ${esc(course.instructor)}</span>
    </div>
    ${statusPill(status)}
    ${includeAdd ? `<button class="icon-button" title="加入计划" data-action="add-plan" data-id="${esc(course.id)}">＋</button>` : `<span class="row-arrow">›</span>`}
  </div>`;
}

function scheduleMarkup() {
  const days = ['一', '二', '三', '四', '五'];
  const periods = ['1-2节', '3-4节', '5-6节', '7-8节'];
  const planCourses = state.plan.map(courseById).filter(course => course && course.term === state.plannerTerm);
  const collisions = [];
  const cell = (day, period) => {
    const lessons = [];
    planCourses.forEach(course => course.meetings.forEach(meeting => {
      if (meeting.day === day && period >= meeting.start && period <= meeting.end) lessons.push(course);
    }));
    if (lessons.length > 1) collisions.push({ day, period, lessons });
    return lessons.map(course => `<span class="schedule-block ${lessons.length > 1 ? 'conflict' : recordStatus(course.id) === 'inProgress' ? 'green' : 'yellow'}" title="${esc(course.name)}">${esc(course.name)}</span>`).join('');
  };
  let grid = `<div class="schedule-cell head"></div>${days.map(day => `<div class="schedule-cell head">${day}</div>`).join('')}`;
  periods.forEach((period, index) => {
    grid += `<div class="schedule-cell period">${period}</div>`;
    days.forEach((_, day) => { grid += `<div class="schedule-cell">${cell(day + 1, index + 1)}</div>`; });
  });
  const warnings = [];
  planCourses.forEach(course => course.prerequisites.forEach(prereq => {
    const completed = state.records.some(record => record.courseId === catalog.find(c => c.code === prereq)?.id && record.status === 'completed') || state.history.some(record => record.courseId === catalog.find(c => c.code === prereq)?.id);
    if (!completed) warnings.push(`${course.name} 尚未满足先修课 ${prereq}`);
  }));
  if (collisions.length) warnings.unshift('课程班次存在时间冲突');
  const creditTotal = planCourses.reduce((sum, course) => sum + course.credits, 0);
  return `<div class="schedule-wrap">${grid}</div>
    ${warnings.length ? `<div class="warning-box"><b>规划提醒</b><small>${warnings.map(esc).join('；')}</small></div>` : `<div class="score-result"><span>当前计划无冲突</span><strong>${creditTotal.toFixed(1)} 学分</strong></div>`}
    <div class="selected-course-list">${planCourses.map(course => `<div class="selected-course"><span>${esc(course.name)}</span><span class="muted">${course.credits.toFixed(1)} 学分 <button class="text-button" data-action="remove-plan" data-id="${esc(course.id)}" aria-label="移除${esc(course.name)}">×</button></span></div>`).join('') || '<div class="empty-state">尚未添加课程班次</div>'}</div>`;
}

function renderCourses() {
  const results = overallCourseRows();
  const terms = ['全部学期', ...new Set(catalog.map(course => course.term))];
  return `<div class="card search-row">
      <label class="search-box"><span class="search-icon" aria-hidden="true">⌕</span><input id="course-search" type="search" placeholder="搜索课程名称、课程号或任课教师" value="${esc(state.query)}" aria-label="搜索课程"></label>
      <select id="term-select" class="select-control" aria-label="筛选学期">${terms.map(term => `<option ${state.term === term ? 'selected' : ''}>${esc(term)}</option>`).join('')}</select>
    </div>
    <div class="section-heading"><h2>修读进度</h2><p>已修读、正在修读和计划修读共用同一份课程记录</p></div>
    ${renderProgressCard()}
    <div class="section-heading"><h2>课程查询与选课模拟</h2><p>示例课程信息 · 计划不会提交到教务系统</p></div>
    <div class="course-layout">
      <section class="card course-list-card">
        <div class="card-title-row"><h3>课程查询</h3><span class="pill pill-gray">${results.length} 门课程</span></div>
        <div class="course-list">${results.length ? results.map(course => renderCourseRow(course, true)).join('') : '<div class="empty-state">没有匹配的课程</div>'}</div>
      </section>
      <section class="card planner-card">
        <div class="card-title-row"><h3>选课模拟</h3><select id="plan-term" class="select-control"><option ${state.plannerTerm==='2026 秋冬'?'selected':''}>2026 秋冬</option><option ${state.plannerTerm==='2027 春夏'?'selected':''}>2027 春夏</option><option ${state.plannerTerm==='2027 秋冬'?'selected':''}>2027 秋冬</option></select></div>
        <div class="schedule-tools"><span class="tiny muted">加入课程班次后自动检查时间冲突、先修要求和学分负担</span></div>
        ${scheduleMarkup()}
      </section>
    </div>
    <div class="print-only print-history-block"><h2>历史 GPA 摘要</h2>${renderHistorySummaryForPrint()}</div>`;
}

function renderCurriculum() {
  return `<section class="card curriculum-banner"><div><h2>2026级人工智能专业 · ${esc(state.profile.name)}</h2><p>培养方案版本：2026级本科培养方案</p></div><span class="pill pill-blue">适用方案</span></section>
    <div class="section-heading"><h2>培养要求</h2><p>板块可多开；点击课程查看详情</p></div>
    <div class="accordion-list">${requirementGroups.map(group => {
      const opened = state.openGroups.includes(group.id);
      const summary = creditSummary(group);
      return `<section class="card accordion-card">
        <button class="accordion-trigger" data-action="toggle-group" data-id="${group.id}" aria-expanded="${opened}">
          <span><strong>${esc(group.title)}</strong><small>${group.id === 'electives' ? '至少' : ''} ${summary.total} 学分要求 · 已完成 ${summary.credits} 学分${summary.inProgress ? ` · ${summary.inProgress} 学分在修` : ''}</small></span>
          <span class="chevron">${opened ? '⌃' : '⌄'}</span>
        </button>
        ${opened ? `<div class="accordion-body">${group.courseIds.map(id => courseById(id)).filter(Boolean).map(course => {
          const status = recordStatus(course.id);
          const gp = currentGpaForCourse(course.id);
          return `<div class="requirement-course">
            <span class="requirement-course-name" data-action="course-detail" data-id="${esc(course.id)}" role="button" tabindex="0">${esc(course.name)}</span>
            ${statusPill(status)}<span class="pill pill-blue">绩点 ${gp}</span><span class="pill pill-gray">建议 ${esc(course.term)}</span><span class="row-arrow">›</span>
          </div>`;
        }).join('')}</div>` : ''}
      </section>`;
    }).join('')}</div>
    <p class="accordion-note">课程与学分要求以官方培养方案为准；通识选修暂不纳入本原型。</p>`;
}

function gradePoint(score) {
  const n = Number(score);
  if (!Number.isFinite(n)) return null;
  if (n >= 95) return 5.0;
  if (n >= 92) return 4.8;
  if (n >= 89) return 4.5;
  if (n >= 86) return 4.2;
  if (n >= 83) return 3.9;
  if (n >= 80) return 3.6;
  if (n >= 77) return 3.3;
  if (n >= 74) return 3.0;
  if (n >= 71) return 2.7;
  if (n >= 68) return 2.4;
  if (n >= 65) return 2.1;
  if (n >= 62) return 1.8;
  if (n >= 60) return 1.5;
  return 0;
}
function estimateAssessmentRows(courseId) {
  return state.estimates[courseId] || [{ name: '平时成绩', weight: 40, current: null, expected: 80 }, { name: '期末考试', weight: 60, current: null, expected: 80 }];
}
function estimateScenario(rows, mode) {
  if (!rows.length || rows.some(row => row.current == null && row.expected == null)) return null;
  const weight = rows.reduce((sum, row) => sum + Number(row.weight || 0), 0);
  if (Math.abs(weight - 100) > 0.001) return null;
  const total = rows.reduce((sum, row) => {
    let score = row.current == null ? Number(row.expected) : Number(row.current);
    if (row.current == null && mode === 'low') score = Math.max(0, score * .9);
    if (row.current == null && mode === 'high') score = Math.min(100, score * 1.05);
    return sum + score * Number(row.weight) / 100;
  }, 0);
  return total;
}
function renderEstimateCard(course) {
  const rows = estimateAssessmentRows(course.id);
  const weight = rows.reduce((sum, row) => sum + Number(row.weight || 0), 0);
  const low = estimateScenario(rows, 'low'), target = estimateScenario(rows, 'target'), high = estimateScenario(rows, 'high');
  const expanded = state.openEstimate === course.id || (state.openEstimate == null && course.id === 'cs1001');
  return `<section class="card grade-course-card">
    <div class="grade-course-toggle" data-action="toggle-estimate" data-id="${esc(course.id)}">
      <div><h3>${esc(course.name)}</h3><p>课程号 ${esc(course.code)} · ${course.credits.toFixed(1)} 学分</p></div>
      <div>${statusPill('inProgress')} <span class="chevron">${expanded ? '⌃' : '⌄'}</span></div>
    </div>
    ${expanded ? `<div class="assessment-scroll"><table class="assessment-table"><thead><tr><th>总评分数构成</th><th>占比</th><th>当前分数</th><th>预期分数</th><th>加权贡献</th><th></th></tr></thead><tbody>
      ${rows.map((row, index) => `<tr><td><input data-est="name" data-course="${esc(course.id)}" data-index="${index}" value="${esc(row.name)}" aria-label="考核项名称" style="width:min(100%,130px);text-align:left;padding:0 8px"></td>
        <td><input data-est="weight" data-course="${esc(course.id)}" data-index="${index}" type="number" min="0" max="100" value="${esc(row.weight)}" aria-label="权重百分比">%</td>
        <td><input data-est="current" data-course="${esc(course.id)}" data-index="${index}" type="number" min="0" max="100" value="${row.current ?? ''}" placeholder="—" aria-label="已知分数"></td>
        <td><input data-est="expected" data-course="${esc(course.id)}" data-index="${index}" type="number" min="0" max="100" value="${row.expected ?? ''}" placeholder="填写预期" aria-label="预期分数"></td>
        <td><b>${row.current == null ? (row.expected == null ? '—' : (row.expected * row.weight / 100).toFixed(1)) : (row.current * row.weight / 100).toFixed(1)}</b></td>
        <td><button class="icon-button" data-action="remove-assessment" data-course="${esc(course.id)}" data-index="${index}" aria-label="删除考核项">×</button></td></tr>`).join('')}
    </tbody></table></div>
    <div class="assessment-actions"><div><button class="text-button" data-action="add-assessment" data-id="${esc(course.id)}">＋ 添加考核项</button><span class="tiny ${Math.abs(weight-100)<.001?'':'invalid-weight'}">　占比合计 ${weight}% ${Math.abs(weight-100)<.001?'✓':'（需为100%）'}</span></div>
      <div class="scenario-pills"><span class="pill pill-gray">保守 ${low == null ? '—' : `${low.toFixed(1)} · GPA ${gradePoint(low).toFixed(1)}`}</span><span class="pill pill-green">目标 ${target == null ? '—' : `${target.toFixed(1)} · GPA ${gradePoint(target).toFixed(1)}`}</span><span class="pill pill-blue">乐观 ${high == null ? '—' : `${high.toFixed(1)} · GPA ${gradePoint(high).toFixed(1)}`}</span></div>
    </div>${Math.abs(weight-100) < .001 && target != null ? `<div class="score-result"><span>目标估算总评</span><strong>${target.toFixed(1)}</strong><span class="muted">课程绩点 ${gradePoint(target).toFixed(1)}</span><span class="tiny muted">估算未计入教师公布的单项不及格底线（如适用）</span></div>` : ''}` : ''}
  </section>`;
}
function historyGpa(rows) {
  const sum = rows.reduce((acc, row) => acc + Number(row.gradePoint) * (courseById(row.courseId)?.credits || 0), 0);
  const credits = rows.reduce((acc, row) => acc + (courseById(row.courseId)?.credits || 0), 0);
  return credits ? sum / credits : 0;
}
function renderHistorySummaryForPrint() {
  const years = [...new Set(state.history.map(row => row.year))];
  return years.map(year => {
    const rows = state.history.filter(row => row.year === year);
    return `<span class="pill pill-blue">${esc(year)} GPA ${historyGpa(rows).toFixed(2)} · ${rows.length} 门课</span>`;
  }).join(' ') || '<span class="muted">暂无历史成绩</span>';
}
function renderGpa() {
  const inProgress = state.records.filter(record => record.status === 'inProgress').map(record => courseById(record.courseId)).filter(Boolean);
  const years = [...new Set(state.history.map(row => row.year))].sort();
  return `<div class="notice">成绩估算与历史记录仅供参考，以教务系统最终成绩为准。历史记录使用示例数据模拟教务网同步结果。</div>
    <div class="section-heading"><h2>正在修读</h2><p>自定义评分构成 · 输入当前已知分数</p></div>
    <div class="grade-course-list">${inProgress.length ? inProgress.map(renderEstimateCard).join('') : '<section class="card empty-state">暂时没有正在修读的课程，可在“我的”中更新课程状态。</section>'}</div>
    <div class="section-heading"><h2>已修读</h2><p>选择学年查看成绩记录与学年 GPA</p></div>
    <section class="card history-card">
      <div class="history-heading" data-action="toggle-history"><div><h3>历史成绩与 GPA</h3><p>展开后选择学年，进入独立成绩页面。</p></div><span class="chevron">${state.historyOpen ? '⌃' : '⌄'}</span></div>
      ${state.historyOpen ? `<div class="history-year-row"><label for="history-year" class="tiny muted">选择学年</label><select id="history-year" class="select-control">${years.map(year => `<option ${state.historyYear===year?'selected':''}>${esc(year)}</option>`).join('')}</select><button class="btn btn-soft" data-action="open-history">查看 ${esc(state.historyYear)} 成绩　→</button></div>` : ''}
    </section>`;
}

function renderHistoryYear(year) {
  const rows = state.history.filter(row => row.year === year);
  const byTerm = Object.groupBy ? Object.groupBy(rows, row => row.term) : rows.reduce((groups, row) => ((groups[row.term] ||= []).push(row), groups), {});
  const terms = Object.keys(byTerm);
  return `<div class="back-row"><button class="btn btn-outline" data-action="back-gpa">← 返回绩点</button><span class="pill pill-blue">${esc(year)} 学年</span></div>
    <div class="year-summary"><div class="summary-box"><small>学年 GPA（常规口径）</small><strong>${historyGpa(rows).toFixed(2)}</strong></div><div class="summary-box"><small>计入课程</small><strong>${rows.length} 门</strong></div><div class="summary-box"><small>计入学分</small><strong>${rows.reduce((sum,row)=>sum+(courseById(row.courseId)?.credits||0),0).toFixed(1)}</strong></div></div>
    <div class="notice">此处为教务网课程记录的演示数据。真实版本需另行接入获准的数据来源；本原型不会登录或读取教务网。</div>
    ${terms.map(term => `<section class="card card-pad"><div class="card-title-row"><h2 style="margin:0;font-size:15px">${esc(term)}</h2><span class="pill pill-gray">学期 GPA ${historyGpa(byTerm[term]).toFixed(2)}</span></div><table class="history-table"><thead><tr><th>课程</th><th>课程号</th><th>学分</th><th>总评</th><th>绩点</th></tr></thead><tbody>${byTerm[term].map(row => {
      const course = courseById(row.courseId);
      return `<tr><td>${esc(course?.name || row.courseId)}</td><td>${esc(course?.code || '—')}</td><td>${(course?.credits || 0).toFixed(1)}</td><td>${esc(row.score)}</td><td>${Number(row.gradePoint).toFixed(1)}</td></tr>`;
    }).join('')}</tbody></table></section>`).join('') || '<section class="card empty-state">该学年暂无已修课程记录</section>'}`;
}

function renderMy() {
  const filter = state.recordFilter;
  const records = state.records.filter(record => filter === 'all' || record.status === filter);
  const counts = { all: state.records.length, completed: state.records.filter(r => r.status === 'completed').length, inProgress: state.records.filter(r => r.status === 'inProgress').length, planned: state.records.filter(r => r.status === 'planned').length };
  return `<section class="card profile-card"><span class="avatar">林</span><div class="profile-main"><h2>${esc(state.profile.name)}</h2><p>浙江大学统一身份认证 · ${esc(state.profile.major)}</p><span class="pill pill-blue">${esc(state.profile.cohort)}</span></div>
      <div class="profile-meta"><div><small>学号</small><strong>${esc(state.profile.studentId)}</strong></div><div><small>所属专业</small><strong>${esc(state.profile.major)}</strong></div><div><small>身份认证</small><strong><span class="pill pill-blue">演示账号</span></strong></div></div>
    </section>
    <div class="section-heading"><h2>个人课程信息</h2><p>编辑记录后自动同步到课程与绩点页面</p></div>
    <section class="card record-card"><div class="record-toolbar"><div class="filter-pills">
      ${[['all',`全部 ${counts.all}`,'gray'],['completed',`已修读 ${counts.completed}`,'green'],['inProgress',`正在修读 ${counts.inProgress}`,'yellow'],['planned',`计划修读 ${counts.planned}`,'blue']].map(([key,label,color])=>`<button class="pill pill-${color}" data-action="record-filter" data-id="${key}" aria-pressed="${filter===key}">${label}</button>`).join('')}
    </div><button class="btn btn-primary" data-action="add-record">＋ 添加课程</button></div>
    <div class="table-scroll"><table class="records-table"><thead><tr><th>课程名称</th><th>学期</th><th>学分</th><th>状态</th><th>成绩 / 绩点</th><th>操作</th></tr></thead><tbody>${records.map(record => {
      const course = courseById(record.courseId);
      if (!course) return '';
      return `<tr><td>${esc(course.name)}</td><td>${esc(record.term)}</td><td>${course.credits.toFixed(1)}</td><td>${statusPill(record.status)}</td><td>${record.score == null ? (record.status === 'inProgress' ? '估算中' : '—') : `${esc(record.score)} / ${Number(record.gradePoint ?? gradePoint(record.score)).toFixed(1)}`}</td><td><button class="text-button" data-action="edit-record" data-id="${esc(course.id)}">编辑</button></td></tr>`;
    }).join('') || '<tr><td colspan="6" class="empty-state">当前筛选下没有课程记录</td></tr>'}</tbody></table></div>
    <button class="text-button" data-action="show-all-records">查看全部课程记录 →</button></section>
    <div class="section-heading"><h2>内测与反馈</h2><p>体验全流程后提交问卷和问题</p></div>
    <div class="my-lower-grid"><section class="card feedback-card"><h3>帮助我们改进工具</h3><p>请体验课程查询、培养方案、选课模拟和绩点估算后提交反馈。</p><form id="feedback-form" class="feedback-form"><textarea class="textarea-control" name="message" placeholder="反馈内容 / 遇到的问题…" required maxlength="1000"></textarea><button class="btn btn-primary" type="submit">提交反馈</button></form><button class="text-button" data-action="survey">问卷入口 →</button></section>
      <section class="card privacy-card"><h3>数据与隐私</h3><p>本地演示原型使用此浏览器的本地存储；不接入真实统一身份认证或教务网。</p><div class="privacy-actions"><button class="btn btn-outline" data-action="privacy">查看隐私说明</button><button class="btn btn-danger-soft" data-action="reset-demo">重置演示数据</button></div></section></div>`;
}

function renderCourseDetail(id) {
  const course = courseById(id);
  if (!course) return '<section class="card empty-state">找不到这门课程。<button class="text-button" data-action="back-courses">返回课程</button></section>';
  const status = recordStatus(id);
  return `<div class="back-row"><button class="btn btn-outline" data-action="back-courses">← 返回</button>${statusPill(status)}</div>
    <section class="card card-pad course-detail"><div class="detail-top"><div><p class="course-code">${esc(course.code)} · ${esc(course.category)}</p><h2>${esc(course.name)}</h2><p class="muted">${esc(course.description)}</p></div><button class="btn btn-primary" data-action="add-plan" data-id="${esc(course.id)}">＋ 加入选课模拟</button></div>
      <div class="detail-grid"><div class="detail-stat"><small>学分</small><strong>${course.credits.toFixed(1)}</strong></div><div class="detail-stat"><small>建议修读学期</small><strong>${esc(course.term)}</strong></div><div class="detail-stat"><small>任课教师</small><strong>${esc(course.instructor)}</strong></div></div>
      <div class="divider"></div><h3>先修要求</h3><p class="tiny muted">${course.prerequisites.length ? course.prerequisites.map(esc).join('、') : '无'}</p>
      <h3>开课班次</h3>${course.meetings.map(meeting => `<p class="tiny">周${['一','二','三','四','五'][meeting.day-1]} ${meeting.start}-${meeting.end}节 · ${esc(meeting.weeks)}</p>`).join('')}
      <button class="btn btn-outline" data-action="edit-record" data-id="${esc(course.id)}">编辑个人修读状态</button></section>`;
}

function render() {
  const route = routeFromHash();
  renderHeader(route);
  const view = route.page === 'courses' ? renderCourses()
    : route.page === 'curriculum' ? renderCurriculum()
    : route.page === 'gpa' ? renderGpa()
    : route.page === 'me' ? renderMy()
    : route.page === 'course-detail' ? renderCourseDetail(route.param)
    : route.page === 'history' ? renderHistoryYear(route.param || state.historyYear)
    : renderCourses();
  appView.innerHTML = view;
  if (route.page === 'history') document.querySelector('#page-title').textContent = `${route.param || state.historyYear} 学年成绩`;
}

function showModal(title, content) {
  overlayRoot.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-label="${esc(title)}"><header class="modal-header"><h2>${esc(title)}</h2><button class="icon-button" data-action="close-modal" aria-label="关闭">×</button></header>${content}</section></div>`;
}
function closeModal() { overlayRoot.innerHTML = ''; }
function recordModal(courseId = '') {
  const record = courseId ? recordById(courseId) : null;
  const course = courseId ? courseById(courseId) : null;
  const options = catalog.map(item => `<option value="${esc(item.id)}" ${(record?.courseId || courseId) === item.id ? 'selected' : ''}>${esc(item.name)} · ${item.credits.toFixed(1)} 学分</option>`).join('');
  showModal(record ? '编辑个人课程信息' : '添加个人课程', `<form id="record-form" data-edit-id="${esc(record?.courseId || '')}">
    <div class="form-grid"><div class="field full"><label for="record-course">课程</label><select id="record-course" name="courseId">${options}</select></div>
    <div class="field"><label for="record-status">修读状态</label><select id="record-status" name="status">${Object.entries(STATUS).filter(([key])=>key!=='notStarted').map(([key,val])=>`<option value="${key}" ${(record?.status || 'planned')===key?'selected':''}>${val.label}</option>`).join('')}</select></div>
    <div class="field"><label for="record-term">学期</label><input id="record-term" name="term" value="${esc(record?.term || course?.term || '2026 秋冬')}" required></div>
    <div class="field"><label for="record-score">成绩（已修课程）</label><input id="record-score" name="score" type="number" min="0" max="100" value="${record?.score ?? ''}" placeholder="可留空"></div>
    <div class="field"><label>数据来源</label><input value="网页表单（演示）" disabled></div></div>
    <div class="modal-actions"><button type="button" class="btn btn-outline" data-action="close-modal">取消</button><button class="btn btn-primary" type="submit">保存记录</button></div></form>`);
}

function updateEstimateInput(input) {
  const courseId = input.dataset.course, index = Number(input.dataset.index), field = input.dataset.est;
  const rows = estimateAssessmentRows(courseId);
  if (!rows[index]) return;
  const raw = input.value;
  rows[index][field] = field === 'name' ? raw : raw === '' ? null : Number(raw);
  state.estimates[courseId] = rows;
  saveState();
  let selection = null;
  try { selection = [input.selectionStart, input.selectionEnd]; } catch {}
  render();
  const next = document.querySelector(`[data-est="${field}"][data-course="${courseId}"][data-index="${index}"]`);
  if (next) { next.focus(); if (selection) { try { next.setSelectionRange(...selection); } catch {} } }
}
function addPlan(id) {
  if (!state.plan.includes(id)) state.plan.push(id);
  const course = courseById(id);
  if (course) state.plannerTerm = course.term;
  if (course && !recordById(id)) state.records.push({ courseId: id, status: 'planned', term: course.term, score: null, gradePoint: null });
  saveState(); render(); toast('已加入选课模拟');
}
function saveRecord(form) {
  const data = new FormData(form);
  const courseId = String(data.get('courseId'));
  const status = String(data.get('status'));
  const scoreRaw = String(data.get('score') || '').trim();
  const score = scoreRaw === '' ? null : Math.max(0, Math.min(100, Number(scoreRaw)));
  const existingIndex = state.records.findIndex(record => record.courseId === courseId);
  const next = { courseId, status, term: String(data.get('term') || courseById(courseId)?.term || ''), score, gradePoint: score == null ? null : gradePoint(score) };
  if (existingIndex >= 0) state.records[existingIndex] = next; else state.records.push(next);
  if (status === 'planned' && !state.plan.includes(courseId)) state.plan.push(courseId);
  if (status !== 'planned') state.plan = state.plan.filter(id => id !== courseId);
  saveState(); closeModal(); render(); toast('课程记录已保存并同步');
}

appView.addEventListener('input', event => {
  if (event.target.id === 'course-search') { state.query = event.target.value; saveState(); render(); const input = document.querySelector('#course-search'); input?.focus(); input?.setSelectionRange(state.query.length, state.query.length); }
});
appView.addEventListener('change', event => {
  if (event.target.matches('[data-est]')) updateEstimateInput(event.target);
  if (event.target.id === 'term-select') { state.term = event.target.value; saveState(); render(); }
  if (event.target.id === 'history-year') { state.historyYear = event.target.value; saveState(); }
  if (event.target.id === 'plan-term') { state.plannerTerm = event.target.value; saveState(); render(); }
});
appView.addEventListener('click', event => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const { action, id } = target.dataset;
  if (action === 'course-detail') navigate('course-detail', id);
  else if (action === 'toggle-group') {
    state.openGroups = state.openGroups.includes(id) ? state.openGroups.filter(item => item !== id) : [...state.openGroups, id]; saveState(); render();
  } else if (action === 'add-plan') addPlan(id);
  else if (action === 'remove-plan') { state.plan = state.plan.filter(item => item !== id); const record = recordById(id); if (record?.status === 'planned') state.records = state.records.filter(item => item.courseId !== id); saveState(); render(); toast('已从计划移除'); }
  else if (action === 'toggle-estimate') { state.openEstimate = state.openEstimate === id ? '' : id; render(); }
  else if (action === 'add-assessment') { const rows = estimateAssessmentRows(id); rows.push({ name: '新考核项', weight: 0, current: null, expected: null }); state.estimates[id] = rows; saveState(); render(); }
  else if (action === 'remove-assessment') { const rows = estimateAssessmentRows(target.dataset.course); rows.splice(Number(target.dataset.index),1); state.estimates[target.dataset.course]=rows; saveState(); render(); }
  else if (action === 'toggle-history') { state.historyOpen = !state.historyOpen; saveState(); render(); }
  else if (action === 'open-history') navigate('history', state.historyYear);
  else if (action === 'back-gpa') navigate('gpa');
  else if (action === 'record-filter') { state.recordFilter = id; saveState(); render(); }
  else if (action === 'edit-record') recordModal(id);
  else if (action === 'add-record') recordModal();
  else if (action === 'show-all-records') { state.recordFilter = 'all'; render(); }
  else if (action === 'close-modal') { if (target.classList.contains('modal-backdrop') && event.target !== target) return; closeModal(); }
  else if (action === 'survey') toast('演示问卷入口：内测阶段替换为正式问卷链接');
  else if (action === 'privacy') showModal('数据与隐私说明', `<p class="tiny">这是前端演示原型。个人课程记录保存在当前浏览器的本地存储中，不会发送到服务器；统一身份认证和教务网读取均未接入。正式版本需经授权接入学校认证，并明确数据保存、删除和访问规则。</p><div class="modal-actions"><button class="btn btn-primary" data-action="close-modal">知道了</button></div>`);
  else if (action === 'reset-demo') { if (confirm('重置本浏览器中的演示课程记录？')) { localStorage.removeItem(STORAGE_KEY); state = loadState(); render(); toast('演示数据已重置'); } }
  else if (action === 'back-courses') navigate('courses');
  else if (action === 'print-pdf') window.print();
});
appView.addEventListener('keydown', event => {
  const target = event.target.closest('[data-action="course-detail"]');
  if (target && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); navigate('course-detail', target.dataset.id); }
});
overlayRoot.addEventListener('click', event => {
  if (event.target.matches('[data-action="close-modal"]')) closeModal();
});
overlayRoot.addEventListener('submit', event => {
  if (event.target.id === 'record-form') { event.preventDefault(); saveRecord(event.target); }
});
appView.addEventListener('submit', event => {
  if (event.target.id === 'feedback-form') {
    event.preventDefault(); const message = String(new FormData(event.target).get('message') || '').trim();
    if (!message) return;
    state.feedback.push({ message, createdAt: new Date().toISOString() }); saveState(); event.target.reset(); toast('反馈已保存在本地演示数据中');
  }
});
window.addEventListener('hashchange', render);
window.addEventListener('beforeprint', () => document.body.classList.add('printing'));
window.addEventListener('afterprint', () => document.body.classList.remove('printing'));
render();
