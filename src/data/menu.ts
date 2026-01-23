export const menus = [
  { url: '/', title: 'Home', subMenu: [] },
  { url: '/about-us', title: 'About Us', subMenu: [] },
  // { url: '/logistics-and-storage', title: 'Logistics & Storage', subMenu: [] },
  // { url: '/corporate', title: 'Corporate', subMenu: [] },
  // { url: '/dialysis-products', title: 'Dialysis Products', subMenu: [] },
  // {
  //   url: '/hemodialysis',
  //   title: 'Hemodialysis Powder and Liquids',
  //   subMenu: [],
  // },
  // { url: '/reverse-osmosis', title: 'Reverse Osmosis', subMenu: [] },
  // { url: '/spare-parts', title: 'Spare Parts', subMenu: [] },
  {
    url: '#', // Use '#' for parent menu with dropdown
    title: 'Products',
    subMenu: [
      { url: '/hd-used-machines', title: 'Pre-Owned' },
      { url: '/ro-system', title: 'RO System' }
    ]
  },
  { url: '/contact-us', title: 'Contact', subMenu: [] },
  // { url: '/blog', title: 'Blog', subMenu: [] },
];