export type Menu = {
  id: number;
  link? : string;
  label: string;
  subMenu?: any;
  isSubMenu?: boolean;
  icon?: React.ReactElement;
};
