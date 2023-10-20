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

  // Blue Container 1 to Internet/MPLS Cloud
  { id: "C_1-1-G", source: "C_1-1", target: "G" },

  // Blue Container 2 to Internet/MPLS Cloud
  { id: "C_2-1-G", source: "C_2-1", target: "G" },

  // Blue Container 3 to Internet/MPLS Cloud
  { id: "C_3-1-G", source: "C_3-1", target: "G" },

  // Blue Container 1 to Internet/MPLS Cloud 1
  { id: "C_1-1-G_1", source: "C_1-1", target: "G_1" },

  // Blue Container 2 to Internet/MPLS Cloud 1
  { id: "C_2-1-G_1", source: "C_2-1", target: "G_1" },

  // Blue Container 3 to Internet/MPLS Cloud 1
  { id: "C_3-1-G_1", source: "C_3-1", target: "G_1" },

  // SW to vBond-1
  { id: "D-3-D-2-1", source: "D-3", target: "D-2-1" },

  // SW to vBond-2
  { id: "D-3-D-2-2", source: "D-3", target: "D-2-2" },

  // SW to CA
  { id: "D-3-E", source: "D-3", target: "E" },

  // SW to Internet / MPLS Cloud
  { id: "D-3-G", source: "D-3", target: "G" },

  // SW to Internet / MPLS Cloud 1
  { id: "D-3-G_1", source: "D-3", target: "G_1" },

  // SW to vManage 1
  { id: "D-3-D-1-1", source: "D-3", target: "D-1-1" },

  // SW to vManage 2
  { id: "D-3-D-1-2", source: "D-3", target: "D-1-2" },

  // SW to vManage 3
  { id: "D-3-D-1-3", source: "D-3", target: "D-1-3" },

  // vManage 0 to vManage 1
  { id: "D-1-0-D-1-1", source: "D-1-0", target: "D-1-1" },

  // vManage 0 to vManage 2
  { id: "D-1-0-D-1-2", source: "D-1-0", target: "D-1-2" },

  // vManage 0 to vManage 3
  { id: "D-1-0-D-1-3", source: "D-1-0", target: "D-1-3" },

  // CA to Physical LAN
  { id: "F_1-E", source: "F_1", target: "E" },
];
