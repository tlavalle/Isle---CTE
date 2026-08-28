function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function renderWeek(targetId, courseKey) {
  const target = document.getElementById(targetId);
  if (!target || typeof WEEKLY_DATA === "undefined") return;

  const course = WEEKLY_DATA.classes[courseKey];
  if (!course) return;

  if (course.active === false) {
    target.innerHTML = `
      <div class="week-banner">
        <strong>${esc(course.title)} is not currently in session.</strong><br>
        <span class="small">This course page will become active again when the class returns.</span>
      </div>
    `;
    return;
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  target.innerHTML = `
    <div class="week-banner">
      <strong>${esc(WEEKLY_DATA.week)}</strong><br>
      <span class="small">${esc(WEEKLY_DATA.note)}</span>
    </div>
    <h3>Learning Goal</h3>
    <p>${esc(course.goal)}</p>
    <div class="week-grid">
      ${days.map(day => `
        <div class="day">
          <h4>${day}</h4>
          <p>${esc(course.days[day])}</p>
        </div>
      `).join("")}
    </div>
    <div class="course-layout">
      <div class="panel">
        <h3>Engineering Notebook</h3>
        <p>${esc(course.notebook)}</p>
      </div>
      <div class="panel">
        <h3>Coming Next</h3>
        <p>${esc(course.next)}</p>
      </div>
    </div>
  `;
}

function renderDashboard(targetId) {
  const target = document.getElementById(targetId);
  if (!target || typeof WEEKLY_DATA === "undefined") return;

  const activeClasses = Object.entries(WEEKLY_DATA.classes)
    .filter(([key, course]) => course.active !== false);

  target.innerHTML = `
    <div class="week-banner">
      <strong>${esc(WEEKLY_DATA.week)}</strong><br>
      <span class="small">${esc(WEEKLY_DATA.note)}</span>
    </div>
    ${activeClasses.map(([key, course]) => `
      <div class="panel">
        <h3>${esc(course.title)}</h3>
        <p><strong>Goal:</strong> ${esc(course.goal)}</p>
        <p>
          <strong>Monday:</strong> ${esc(course.days.Monday)}
          &nbsp; | &nbsp;
          <strong>Tuesday:</strong> ${esc(course.days.Tuesday)}
          &nbsp; | &nbsp;
          <strong>Wednesday:</strong> ${esc(course.days.Wednesday)}
          &nbsp; | &nbsp;
          <strong>Thursday:</strong> ${esc(course.days.Thursday)}
          &nbsp; | &nbsp;
          <strong>Friday:</strong> ${esc(course.days.Friday)}
        </p>
        <a class="button" href="${key}.html">Open ${esc(course.title)}</a>
      </div>
    `).join("")}
  `;
}
