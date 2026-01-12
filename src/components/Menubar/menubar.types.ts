export type MenuProps = {
  menus: Menu[];
};

export interface Menu {
  title: string;
  url: string;
  subMenu?: SubMenu[];
}

export type SubMenu = Omit<Menu, 'subMenu'>;