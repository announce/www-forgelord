import { Link } from "react-router";

import { type IMenuItemBadges, MenuItemBadges } from "./MenuItemBadges";

export type IMenuItem = {
  title: string;
  icon?: string;
  items?: IMenuItem[];
  href?: string;
  level?: number;
  isSection?: boolean;
  anchorProps?: object;
  isNew?: boolean;
} & IMenuItemBadges;

export const TopbarMenuItem = (props: IMenuItem) => {
  const { items, level = 0, href, icon, title, isSection, anchorProps, badges } = props;

  if (level > 0 && items != null) {
    return (
      <div className="dropdown dropdown-hover dropdown-right w-full">
        <div
          tabIndex={0}
          role="button"
          className="hover:bg-base-200 rounded-box flex cursor-pointer items-center gap-2.5 px-3 py-1.5 text-sm">
          {icon && <span className={`iconify ${icon} size-4`}></span>}
          <span className="grow">{title}</span>
          <MenuItemBadges badges={badges} />
          <span className="iconify lucide--chevron-right"></span>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content bg-base-100 rounded-box !start-2/5 z-1 w-48 p-2 text-sm shadow-sm">
          {items.map((item, index) => (
            <TopbarMenuItem {...item} level={level + 1} key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (items != null) {
    return (
      <div className="dropdown dropdown-hover dropdown-center group">
        <button
          tabIndex={0}
          role="button"
          className="hover:bg-base-200 rounded-box flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-sm">
          {title}
          <span className="iconify lucide--chevron-down transition-all duration-300 group-hover:rotate-180"></span>
        </button>
        <div
          tabIndex={0}
          className="dropdown-content bg-base-100 rounded-box z-1 w-52 space-y-0.5 p-2 text-sm shadow-sm">
          {items.map((item, index) => (
            <TopbarMenuItem {...item} level={level + 1} key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (level > 0 && isSection) {
    return (
      <>
        <hr className="border-base-200 -mx-2 my-2" />
        <p className="text-base-content/60 mx-3 mb-1 font-medium">{title}</p>
      </>
    );
  }

  return (
    <Link
      to={href ?? ""}
      {...anchorProps}
      className="hover:bg-base-200 rounded-box flex items-center gap-2.5 px-3 py-1.5 text-sm">
      {icon && <span className={`iconify ${icon} size-4`}></span>}
      <span className="grow">{title}</span>
      <MenuItemBadges badges={badges} />
    </Link>
  );
};
