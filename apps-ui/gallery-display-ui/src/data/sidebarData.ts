

export interface SidebarItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  children?: SidebarItem[];
  parentIds?: string[];
}

export const sidebarData: SidebarItem[] = [
  {
    id: 'A',
    title: 'A',
    children: [
      {
        id: 'a1',
        title: 'a1',
        children: [
          { id: 'aa1', title: 'Valami', description: 'aa1 description', imageUrl: './vite.svg' },
          { id: 'aa2', title: 'aa2' },
          { id: 'aa3', title: 'aa3' },
          { id: 'aa4', title: 'aa4' },
          { id: 'aa5', title: 'aa5' },
          { id: 'aa6', title: 'aa6' },
          { id: 'aa7', title: 'aa7' },
          { id: 'aa8', title: 'aa8' },
        ],
      },
      { id: 'a2',
        title: 'a2',
        children: [
          { id: 'ab1', title: 'ab1' },
          { id: 'ab2', title: 'ab2' },
          { id: 'ab3', title: 'ab3' },
          { id: 'ab4', title: 'ab4' },
          { id: 'ab5', title: 'ab5' },
          { id: 'ab6', title: 'ab6' },
          { id: 'ab7', title: 'ab7' },
          { id: 'ab8', title: 'ab8' },
        ]       
      },
      { id: 'a3',
        title: 'a3',
        children: [
          { id: 'ac1', title: 'ac1' },
          { id: 'ac2', title: 'ac2' },
          { id: 'ac3', title: 'ac3' },
          { id: 'ac4', title: 'ac4' },
          { id: 'ac5', title: 'ac5' },
          { id: 'ac6', title: 'ac6' },
          { id: 'ac7', title: 'ac7' },
          { id: 'ac8', title: 'ac8' },
        ] 
      },
      { id: 'a4', 
        title: 'a4',
        children: [
          { id: 'ad1', title: 'ad1' },
          { id: 'ad2', title: 'ad2' },
          { id: 'ad3', title: 'ad3' },
          { id: 'ad4', title: 'ad4' },
          { id: 'ad5', title: 'ad5' },
          { id: 'ad6', title: 'ad6' },
          { id: 'ad7', title: 'ad7' },
          { id: 'ad8', title: 'ad8' },
        ]
      },
    ],
  },
  { id: 'B', 
    title: 'B',
    children: [
      { id: 'b1',
        title: 'b1',
        children: [
          { id: 'ba1', title: 'ba1' },
          { id: 'ba2', title: 'ba2' },
          { id: 'ba3', title: 'ba3' },
          { id: 'ba4', title: 'ba4' },
          { id: 'ba5', title: 'ba5' },
          { id: 'ba6', title: 'ba6' },
          { id: 'ba7', title: 'ba7' },
          { id: 'ba8', title: 'ba8' },
        ]
      },
      { id: 'b2', 
        title: 'b2',
        children: [
          { id: 'bb1', title: 'bb1' },
          { id: 'bb2', title: 'bb2' },
          { id: 'bb3', title: 'bb3' },
          { id: 'bb4', title: 'bb4' },
          { id: 'bb5', title: 'bb5' },
          { id: 'bb6', title: 'bb6' },
          { id: 'bb7', title: 'bb7' },
          { id: 'bb8', title: 'bb8' },
        ]
      },
      { id: 'b3',
        title: 'b3',
        children: [
          { id: 'bc1', title: 'bc1' },
          { id: 'bc2', title: 'bc2' },
          { id: 'bc3', title: 'bc3' },
          { id: 'bc4', title: 'bc4' },
          { id: 'bc5', title: 'bc5' },
          { id: 'bc6', title: 'bc6' },
          { id: 'bc7', title: 'bc7' },
          { id: 'bc8', title: 'bc8' },
        ] 
      },
      { id: 'b4', 
        title: 'b4',
        children: [
          { id: 'bd1', title: 'bd1' },
          { id: 'bd2', title: 'bd2' },
          { id: 'bd3', title: 'bd3' },
          { id: 'bd4', title: 'bd4' },
          { id: 'bd5', title: 'bd5' },
          { id: 'bd6', title: 'bd6' },
          { id: 'bd7', title: 'bd7' },
          { id: 'bd8', title: 'bd8' },
        ]
      },
]},
  { id: 'C', 
    title: 'C',
    children: [
      { id: 'c1',
        title: 'c1',
        children: [
          { id: 'ca1', title: 'ca1' },
          { id: 'ca2', title: 'ca2' },
          { id: 'ca3', title: 'ca3' },
          { id: 'ca4', title: 'ca4' },
          { id: 'ca5', title: 'ca5' },
          { id: 'ca6', title: 'ca6' },
          { id: 'ca7', title: 'ca7' },
          { id: 'ca8', title: 'ca8' },
        ]
      },
      { id: 'c2', 
        title: 'c2',
        children: [
          { id: 'cb1', title: 'cb1' },
          { id: 'cb2', title: 'cb2' },
          { id: 'cb3', title: 'cb3' },
          { id: 'cb4', title: 'cb4' },
          { id: 'cb5', title: 'cb5' },
          { id: 'cb6', title: 'cb6' },
          { id: 'cb7', title: 'cb7' },
          { id: 'cb8', title: 'cb8' },
        ]
  },
      { id: 'c3',
        title: 'c3',
        children: [
          { id: 'cc1', title: 'cc1' },
          { id: 'cc2', title: 'cc2' },
          { id: 'cc3', title: 'cc3' },
          { id: 'cc4', title: 'cc4' },
          { id: 'cc5', title: 'cc5' },
          { id: 'cc6', title: 'cc6' },
          { id: 'cc7', title: 'cc7' },
          { id: 'cc8', title: 'cc8' },
        ] 
      },
      { id: 'c4', 
        title: 'c4',
        children: [
          { id: 'cd1', title: 'cd1' },
          { id: 'cd2', title: 'cd2' },
          { id: 'cd3', title: 'cd3' },
          { id: 'cd4', title: 'cd4' },
          { id: 'cd5', title: 'cd5' },
          { id: 'cd6', title: 'cd6' },
          { id: 'cd7', title: 'cd7' },
          { id: 'cd8', title: 'cd8' },
        ]}
  ]},
  { id: 'D',
    title: 'D',
    children: [
      { id: 'd1',
        title: 'd1',
        children: [
          { id: 'da1', title: 'da1' },
          { id: 'da2', title: 'da2' },
          { id: 'da3', title: 'da3' },
          { id: 'da4', title: 'da4' },
          { id: 'da5', title: 'da5' },
          { id: 'da6', title: 'da6' },
          { id: 'da7', title: 'da7' },
          { id: 'da8', title: 'da8' },
        ]
      },
      { id: 'd2', 
        title: 'd2',
        children: [
          { id: 'db1', title: 'db1' },
          { id: 'db2', title: 'db2' },
          { id: 'db3', title: 'db3' },
          { id: 'db4', title: 'db4' },
          { id: 'db5', title: 'db5' },
          { id: 'db6', title: 'db6' },
          { id: 'db7', title: 'db7' },
          { id: 'db8', title: 'db8' },
        ]
  },
      { id: 'd3',
        title: 'd3',
        children: [
          { id: 'dc1', title: 'dc1' },
          { id: 'dc2', title: 'dc2' },
          { id: 'dc3', title: 'dc3' },
          { id: 'dc4', title: 'dc4' },
          { id: 'dc5', title: 'dc5' },
          { id: 'dc6', title: 'dc6' },
          { id: 'dc7', title: 'dc7' },
          { id: 'dc8', title: 'dc8' },
        ] 
      },
      { id: 'd4', 
        title: 'd4',
        children: [
          { id: 'dd1', title: 'dd1' },
          { id: 'dd2', title: 'dd2' },
          { id: 'dd3', title: 'dd3' },
          { id: 'dd4', title: 'dd4' },    
          { id: 'dd5', title: 'dd5' },
          { id: 'dd6', title: 'dd6' },
          { id: 'dd7', title: 'dd7' },
          { id: 'dd8', title: 'dd8' },
        ]}
  ]}
];
