// ============================================================
// ISLE CTE — WEEKLY CALENDAR
// ============================================================
// THIS IS THE ONLY FILE YOU NEED TO EDIT EACH WEEK.
// Change the week dates and Monday-Friday activities, then Commit changes.
// ============================================================

const WEEKLY_DATA = {
  week: "October 5 - October 9",
  note: "Check here for the current focus in each class. Detailed assignments remain in Google Classroom.",

  classes: {
    "industrial-tech": {
      active: true,
      title: "Industrial Tech",
      goal: "Build safe, accurate, professional shop habits while learning to think, design, build, and improve.",
      days: {
        Monday: "Phone Stand Build — Continue fabrication with emphasis on accurate measurement, safe tool use, and quality workmanship.",
        Tuesday: "Phone Stand Build — Continue construction, check fit and stability, and correct problems found during the build.",
        Wednesday: "Phone Stand Finish & Test — Complete construction, test the stand, and make final design improvements.",
        Thursday: "Phone Stand Final Inspection — Complete quality-control checks, final improvements, and Engineering Notebook documentation.",
        Friday: "Engineering Design Challenge Prep — Review the design process and practice identifying criteria, constraints, and possible solutions."
      },
      notebook: "Document phone stand progress, measurements, problems encountered, testing results, improvements, and evidence of safe tool use.",
      next: "Apply the engineering design process in a short design-build-test-improve challenge."
    },

    "home-repairs": {
      active: true,
      title: "Home Repairs",
      goal: "Develop practical skills for safely inspecting, maintaining, and repairing residential systems.",
      days: {
        Monday: "Wall Construction — Continue building the practice wall sections using the approved framing plan.",
        Tuesday: "Wall Framing — Measure, mark, cut, and assemble wall components using safe construction procedures.",
        Wednesday: "Wall Assembly — Continue framing, checking stud spacing, corners, and fastener placement.",
        Thursday: "Square & Brace — Check wall dimensions and square, make corrections, and brace assemblies as needed.",
        Friday: "Wall Inspection & Documentation — Complete quality-control checks and document the wall build in the Engineering Notebook."
      },
      notebook: "Record wall measurements, framing layout, construction steps, tool use, inspection results, corrections, and reflections.",
      next: "Complete wall construction and move into additional residential construction and repair skills."
    },

    "auto-tech": {
      active: true,
      title: "Small Engine",
      goal: "Develop safe engine service skills through systematic teardown, component identification, inspection, and documentation.",
      days: {
        Monday: "Small Engine Teardown — Begin systematic disassembly while identifying and organizing removed components.",
        Tuesday: "Small Engine Teardown — Continue disassembly, label parts, and document component locations and condition.",
        Wednesday: "Internal Components — Continue teardown and identify major internal engine components and their functions.",
        Thursday: "Inspection & Documentation — Inspect removed parts for wear or damage and record observations.",
        Friday: "Teardown Review — Organize components, verify documentation, and review how the engine systems work together."
      },
      notebook: "Document teardown sequence, component names and functions, tool use, part organization, condition observations, and technician notes.",
      next: "Complete teardown and move into inspection, measurement, and preparation for reassembly."
    },

    "welding": {
      active: true,
      title: "Welding / Manufacturing",
      goal: "Develop safe welding and manufacturing knowledge through equipment study, safety skills, and technical application.",
      days: {
        Monday: "Miller OpenBook — Continue assigned welding safety and equipment learning modules.",
        Tuesday: "Powder Puff Football — Special school activity today; regular Miller OpenBook work resumes next class.",
        Wednesday: "Miller OpenBook — Continue assigned welding safety, equipment, and process modules.",
        Thursday: "Miller OpenBook — Continue modules and document key welding concepts and safety information.",
        Friday: "Miller OpenBook — Complete assigned work, review progress, and document learning in the Welding Notebook."
      },
      notebook: "Record key Miller OpenBook safety rules, equipment information, welding concepts, questions, and module progress.",
      next: "Continue welding safety qualification and transition OpenBook knowledge into supervised shop practice."
    }
  }
};
