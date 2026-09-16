// ============================================================
// ISLE CTE — WEEKLY CALENDAR
// ============================================================
// THIS IS THE ONLY FILE YOU NEED TO EDIT EACH WEEK.
// Change the week dates and Monday-Friday activities, then Commit changes.
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
        Monday: "Measurement & Layout — Review measuring tools, accurate layout, and shop measurement procedures.",
        Tuesday: "Measurement Practice — Hands-on measurement and layout skill practice.",
        Wednesday: "Onshape Introduction — Chromebook setup, interface, navigation, and basic sketch tools.",
        Thursday: "Onshape Design Challenge — Create and revise a simple CAD design using accurate dimensions.",
        Friday: "Engineering Notebook Check — Update notebook entries, document this week's work, and review measurement and CAD skills."
      },
      notebook: "Record measurements, sketches, Onshape work, procedures, design decisions, and reflections.",
      next: "Continue Onshape CAD and move into design-build activities."
    },

    "home-repairs": {
      active: true,
      title: "Home Repairs",
      goal: "Develop practical skills for safely inspecting, maintaining, and repairing residential systems.",
      days: {
        Monday: "Wall Framing Introduction — Identify the parts of a framed wall and their functions.",
        Tuesday: "Framing Layout — Practice measuring and laying out plates, studs, corners, and openings.",
        Wednesday: "Wall Framing Planning — Read a simple wall plan and calculate framing materials.",
        Thursday: "Hands-On Framing — Measure, mark, and begin assembling a practice wall section.",
        Friday: "Framing Check & Documentation — Check square, spacing, and accuracy; document work in the Engineering Notebook."
      },
      notebook: "Document wall framing vocabulary, measurements, layout, diagrams, procedures, and reflections.",
      next: "Continue wall framing and residential construction skills."
    },

    "auto-tech": {
      active: true,
      title: "Auto Tech",
      goal: "Develop safe, practical automotive skills through engine, electrical, diagnostic, and repair work.",
      days: {
        Monday: "Engine Fundamentals — Identify major engine systems and explain the purpose of the internal combustion engine.",
        Tuesday: "Engine Components — Identify major internal and external engine components and their functions.",
        Wednesday: "Four-Stroke Cycle — Intake, compression, power, and exhaust; connect piston and valve movement to engine operation.",
        Thursday: "Engine Inspection Activity — Locate components on an engine and document observations, tools, and safety procedures.",
        Friday: "Engine Fundamentals Review — Component identification, four-stroke cycle review, and Engineering Notebook check."
      },
      notebook: "Record engine diagrams, component identification, procedures, measurements, observations, and reflections.",
      next: "Move deeper into engine measurement, inspection, teardown, and engine math."
    },

    "welding": {
      active: true,
      title: "Welding / Manufacturing",
      goal: "Develop safe welding, fabrication, manufacturing, measurement, inspection, and quality-control skills.",
      days: {
        Monday: "SMAW Equipment — Identify the welder, leads, electrode holder, work clamp, PPE, and supporting equipment.",
        Tuesday: "SMAW Setup — Learn the correct equipment setup sequence and safe pre-weld checks.",
        Wednesday: "Setup Errors & Troubleshooting — Identify common setup problems and determine READY, REWORK, or STOP.",
        Thursday: "Hands-On Setup Practice — Practice safe machine setup, electrode selection, work clamp placement, and workstation preparation.",
        Friday: "SMAW Skill Check — Demonstrate correct setup, explain safety checks, document settings, and complete an Engineering Notebook entry."
      },
      notebook: "Record welding equipment, machine settings, setup sequence, safety checks, observations, inspection notes, and improvements.",
      next: "Continue SMAW practice and welding skill development before transitioning into manufacturing later in the course."
    }
  }
};
