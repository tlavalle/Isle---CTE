// ============================================================
// ISLE CTE — WEEKLY CALENDAR
// ============================================================
// THIS IS THE ONLY FILE YOU NEED TO EDIT EACH WEEK.
//
// 1. Change the week dates below.
// 2. Change Monday-Friday for each active class.
// 3. Set active to true or false when a quarter class changes.
// 4. Click Commit changes in GitHub.
//
// Do not change the words before the colon (Monday:, Tuesday:, etc.).
// Keep the quotation marks around your text.
// ============================================================

const WEEKLY_DATA = {
  week: "September 14 - September 18",
  note: "Check here for the current focus in each class. Detailed assignments remain in Google Classroom.",

  classes: {

    "industrial-tech": {
      active: true,
      title: "Industrial Tech",
      goal: "Build safe, accurate, professional shop habits while learning to think, design, build, and improve.",
      days: {
        Monday: "Update Monday's activity.",
        Tuesday: "Update Tuesday's activity.",
        Wednesday: "Update Wednesday's activity.",
        Thursday: "Update Thursday's activity.",
        Friday: "Update Friday's activity."
      },
      notebook: "Record shop notes, measurements, sketches, procedures, design decisions, and reflections.",
      next: "Update what is coming next."
    },

    "home-repairs": {
      active: true,
      title: "Home Repairs",
      goal: "Develop practical skills for safely inspecting, maintaining, and repairing residential systems.",
      days: {
        Monday: "Update Monday's activity.",
        Tuesday: "Update Tuesday's activity.",
        Wednesday: "Update Wednesday's activity.",
        Thursday: "Update Thursday's activity.",
        Friday: "Update Friday's activity."
      },
      notebook: "Document procedures, diagrams, measurements, troubleshooting, and reflections.",
      next: "Update what is coming next."
    },

    "auto-tech": {
      active: true,
      title: "Auto Tech",
      goal: "Develop safe, practical automotive skills through engine, electrical, diagnostic, and repair work.",
      days: {
        Monday: "Update Monday's activity.",
        Tuesday: "Update Tuesday's activity.",
        Wednesday: "Update Wednesday's activity.",
        Thursday: "Update Thursday's activity.",
        Friday: "Update Friday's activity."
      },
      notebook: "Record procedures, measurements, component identification, diagnostic findings, calculations, and reflections.",
      next: "Update what is coming next."
    },

    "welding": {
      active: true,
      title: "Welding",
      goal: "Develop safe welding, fabrication, measurement, inspection, and quality-control skills.",
      days: {
        Monday: "Update Monday's activity.",
        Tuesday: "Update Tuesday's activity.",
        Wednesday: "Update Wednesday's activity.",
        Thursday: "Update Thursday's activity.",
        Friday: "Update Friday's activity."
      },
      notebook: "Record settings, joint preparation, weld observations, inspection notes, and improvements.",
      next: "Update what is coming next."
    },

    "manufacturing": {
      active: false,
      title: "Manufacturing",
      goal: "Use design, production, quality, and problem-solving processes to manufacture accurate products.",
      days: {
        Monday: "Update Monday's activity.",
        Tuesday: "Update Tuesday's activity.",
        Wednesday: "Update Wednesday's activity.",
        Thursday: "Update Thursday's activity.",
        Friday: "Update Friday's activity."
      },
      notebook: "Record planning, CAD/design work, process decisions, measurements, quality checks, and revisions.",
      next: "Update what is coming next."
    }

  }
};
