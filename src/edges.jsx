export default [
  //   { id: "a1-a2", source: "A-1", target: "A-2" },
  //   { id: "a2-b", source: "A-2", target: "B" },
  //   { id: "a2-c", source: "A-2", target: "C" },
  //   { id: "b1-b2", source: "B-1", target: "B-2" },
  //   { id: "b1-b3", source: "B-1", target: "B-3" },

  //   Pink Container 1
  {
    id: "A1-E",
    source: "A-1",
    target: "B",
    data: {
      startLabel: "eth0",
      endLabel: "e0/0",
      centerLabel: ".7",
    },
    type: "start-end",
  },
  {
    id: "A2-E",
    source: "A-2",
    target: "B",
    data: {
      startLabel: "eth0",
      endLabel: "e0/1",
      centerLabel: ".6",
    },
    type: "start-end",
  },

  //   Pink Container 2
  {
    id: "A_1-E",
    source: "A_1-1",
    target: "B_1",
    data: {
      startLabel: "eth0",
      endLabel: "e0/1",
      centerLabel: ".9",
    },
    type: "start-end",
  },
  {
    id: "A_2-E",
    source: "A_1-2",
    target: "B_1",
    data: {
      startLabel: "eth0",
      endLabel: "e0/0",
      centerLabel: ".8",
    },
    type: "start-end",
  },

  //   Blue Container 1
  { id: "C_1-1-C_1-2", source: "C_1-1", target: "C_1-2" },

  //   Blue Container 2
  { id: "C_2-1-C_2-2", source: "C_2-1", target: "C_2-2" },

  //   Blue Container 3
  { id: "C_3-1-C_3-2", source: "C_3-1", target: "C_3-2" },

  // Sw to Internet/MPLS Cloud
  { id: "E-1F1", source: "E", target: "F" },
];
