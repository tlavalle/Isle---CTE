// ============================================================
// ISLE CTE — WEEKLY CALENDAR
// ============================================================
// THIS IS THE ONLY FILE YOU NEED TO EDIT EACH WEEK.
// Change the week dates and Monday-Friday activities, then Commit changes.
// ============================================================

const WEEKLY_DATA = {
  week: "September 28 - October 2",
  note: "Check here for the current focus in each class. Detailed assignments remain in Google Classroom.",

  classes: {
    "industrial-tech": {
      active: true,
      title: "Industrial Tech",
      goal: "Build safe, accurate, professional shop habits while learning to think, design, build, and improve.",
      days: {
        Monday: "Phone Stand Project — Continue design work, measurements, material selection, and project planning.",
        Tuesday: "Phone Stand & Safety Skills — Continue the phone stand project while completing required shop safety skill checks.",
        Wednesday: "Phone Stand Build — Apply safe tool procedures while manufacturing and refining the phone stand.",
        Thursday: "Phone Stand Build & Safety Skills — Continue fabrication, inspect accuracy, and complete remaining safety skill checks.",
        Friday: "Phone Stand Testing & Documentation — Test function and stability, make improvements, and update the Engineering Notebook."
      },
      notebook: "Document phone stand dimensions, material choice, build progress, safety skill checks, inspection results, and improvements.",
      next: "Complete the phone stand project and required shop safety qualifications."
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
