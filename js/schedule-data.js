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
        Monday: "Spindle Sander Safety & Qualification — Safety instruction, teacher demonstration, safety check, and hands-on qualification.",
        Tuesday: "Belt & Disc Sander Safety & Qualification — Safety instruction, teacher demonstration, safety check, and hands-on qualification.",
        Wednesday: "Phone Stand Project — Continue fabrication and shaping using qualified tools and safe shop procedures.",
        Thursday: "Phone Stand Project — Continue fabrication, fitting, sanding, and troubleshooting.",
        Friday: "Phone Stand Project & Catch-Up — Continue project work, complete safety qualification makeups, and update the Engineering Notebook."
      },
      notebook: "Document sander safety qualifications, phone stand progress, measurements, problems encountered, improvements, and evidence of safe tool use.",
      next: "Complete the phone stand project and continue applying safe machine operation and the engineering design process."
    },

    "home-repairs": {
      active: true,
      title: "Home Repairs",
      goal: "Develop practical skills for safely inspecting, maintaining, and repairing residential systems.",
      days: {
        Monday: "Wall Build — Continue framing; check stud spacing, corners, square, and overall dimensions.",
        Tuesday: "Finish Wall Framing — Complete wall assembly and correct framing problems.",
        Wednesday: "Wall Inspection & Corrections — Complete final measurements, square/plumb checks, fastener inspection, and corrections.",
        Thursday: "Introduction to Rough-In — Learn basic rough-in layout, box/opening locations, measuring, and layout; begin layout as groups finish walls.",
        Friday: "Begin Rough-In — Lay out and begin installing rough-in components in the practice wall sections."
      },
      notebook: "Record wall measurements, framing layout, inspection results, corrections, rough-in locations, and construction notes.",
      next: "Continue rough-in work in the completed practice wall sections."
    },

    "auto-tech": {
      active: true,
      title: "Small Engine",
      goal: "Develop safe engine service skills through systematic teardown, component inspection, organization, and correct reassembly.",
      days: {
        Monday: "Finish Engine Teardown — Complete disassembly, organize and label parts, photograph components, and identify anything still needing removal.",
        Tuesday: "Inspection & Parts Identification — Clean components, inspect for wear or damage, identify parts and functions, and verify all parts are accounted for.",
        Wednesday: "Reassembly Preparation — Review assembly order, fasteners, torque specifications, lubrication, gasket surfaces, and organize parts for assembly.",
        Thursday: "Begin Engine Reassembly — Start reassembling engine components using correct procedures and specifications.",
        Friday: "Continue Engine Reassembly — Continue assembly, check work as you go, document progress, and complete cleanup."
      },
      notebook: "Document final teardown, component condition, parts identification, specifications, reassembly sequence, measurements, and technician notes.",
      next: "Continue engine reassembly using correct specifications, torque procedures, and inspection practices."
    },

    "welding": {
      active: true,
      title: "Welding / Manufacturing",
      goal: "Develop safe welding skills through spot welding practice and progressive MIG bead practice.",
      days: {
        Monday: "Spot Welding Practice — Review safety and setup, practice positioning and spot welds, and inspect weld quality.",
        Tuesday: "MIG Welding Demonstration — PPE, machine setup, work clamp, gun position, travel angle, stickout, wire speed/voltage basics, and starting/stopping a bead.",
        Wednesday: "MIG Bead Plate — Run beads across the full plate, rotate the plate, and begin the next layer while focusing on consistency.",
        Thursday: "MIG Bead Plate — Continue full-plate bead layers, rotating the plate between layers and improving bead width, travel speed, and overlap.",
        Friday: "MIG Bead Plate — Complete the four-layer bead plate, clean the plate, inspect weld quality, and evaluate improvement."
      },
      notebook: "Record spot welding observations, MIG setup information, bead plate progress, settings, technique adjustments, and weld-quality observations.",
      next: "Build consistency in MIG welding and apply the skills developed on the four-layer bead plate."
    }
  }
};
