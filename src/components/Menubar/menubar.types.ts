export interface Menu {
  title: string;
  url: string;
  submenu: SubMenu[];
}

type SubMenu = Omit<Menu, 'submenu'>;
