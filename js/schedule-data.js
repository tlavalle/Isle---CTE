// ============================================================
// ISLE CTE — WEEKLY CALENDAR
// ============================================================
// THIS IS THE ONLY FILE YOU NEED TO EDIT EACH WEEK.
// Change the week dates and Monday-Friday activities, then Commit changes.
// ============================================================

const WEEKLY_DATA = {
  week: "September 21 - September 25",
  note: "Check here for the current focus in each class. Detailed assignments remain in Google Classroom.",

  classes: {
    "industrial-tech": {
      active: true,
      title: "Industrial Tech",
      goal: "Build safe, accurate, professional shop habits while learning to think, design, build, and improve.",
      days: {
        Monday: "Wood Project Planning — Review the design brief; create sketches, dimensions, and a material plan.",
        Tuesday: "Board Selection & Layout — Identify reference faces and edges, inspect material, and plan accurate layout.",
        Wednesday: "Cut & Reference Surfaces — Practice accurate sizing and establish square reference surfaces.",
        Thursday: "Drill, Shape & Inspect — Apply safe drilling and shaping procedures and inspect work for accuracy.",
        Friday: "Assembly Planning — Review fasteners, adhesives, dry fitting, quality control, and Engineering Notebook documentation."
      },
      notebook: "Record project sketches, dimensions, material plans, layout decisions, inspection results, and improvements.",
      next: "Continue the wood project through assembly, inspection, and improvement."
    },

    "home-repairs": {
      active: true,
      title: "Home Repairs",
      goal: "Develop practical skills for safely inspecting, maintaining, and repairing residential systems.",
      days: {
        Monday: "4×4 Corner Wall Planning — Review wall parts, dimensions, and the corner-wall construction plan.",
        Tuesday: "Framing Layout — Practice 16-inch-on-center layout, stud locations, corners, and accurate measurement.",
        Wednesday: "Material & Cut-List Planning — Calculate framing members and prepare a cut list before construction.",
        Thursday: "Full-Scale Layout & Quality Control — Lay out the wall plan, inspect dimensions and square, and correct errors.",
        Friday: "Framing Troubleshooting — Find and correct layout, measurement, corner, and material-planning problems."
      },
      notebook: "Document wall plans, framing vocabulary, dimensions, material calculations, inspection results, and corrections.",
      next: "Begin the 4×4 corner-wall build when lumber arrives."
    },

    "auto-tech": {
      active: true,
      title: "Auto Tech",
      goal: "Develop safe, practical automotive skills through engine, electrical, diagnostic, and repair work.",
      days: {
        Monday: "Four-Stroke Cycle Review — Connect intake, compression, power, and exhaust to piston and valve movement.",
        Tuesday: "Engine Component Relationships — Trace how the piston, connecting rod, crankshaft, camshaft, and valves work together.",
        Wednesday: "Engine Diagram & Identification — Label major internal engine components and explain their functions.",
        Thursday: "Engine Inspection & Technician Thinking — Use diagrams or non-running components to observe, identify, and document engine parts.",
        Friday: "Engine Fundamentals Skill Check — Demonstrate component knowledge, cycle sequence, and Engineering Notebook documentation."
      },
      notebook: "Record engine diagrams, component functions, four-stroke cycle relationships, observations, and technician conclusions.",
      next: "Move into engine measurement, inspection, teardown concepts, and engine math."
    },

    "welding": {
      active: true,
      title: "Welding / Manufacturing",
      goal: "Develop safe welding, fabrication, manufacturing, measurement, inspection, and quality-control skills.",
      days: {
        Monday: "Fabrication Planning — Read a customer job, identify finished dimensions, and plan a steel frame project.",
        Tuesday: "Technical Drawing & Cut List — Create front, side, and top views and determine required parts and lengths.",
        Wednesday: "Fit-Up & Assembly Planning — Plan the sequence: FIT → CLAMP → CHECK SQUARE → TACK → RECHECK → WELD → INSPECT.",
        Thursday: "Quality Control — Inspect dimensions, squareness, alignment, and fit-up using PASS, REWORK, or REJECT.",
        Friday: "Production Challenge — Scale the fabrication plan for multiple units, calculate material needs, and document the manufacturing process."
      },
      notebook: "Record fabrication drawings, cut lists, assembly sequence, inspection decisions, material calculations, and improvements.",
      next: "Apply the completed fabrication plan to hands-on welding/manufacturing work when materials are available."
    }
  }
};
