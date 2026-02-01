import { Link } from "react-router";

import type { IMenuItem } from "./TopbarMenuItem";

export const SidebarMenuItem = (props: IMenuItem) => {
  const { items, level = 0, href, title, isSection, anchorProps } = props;

  if (items != null) {
    return (
      <li>
        <details>
          <summary>{title}</summary>
          <ul>
            {items.map((item, index) => (
              <SidebarMenuItem {...item} level={level + 1} key={index} />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  if (level > 0 && isSection) {
    return <></>;
  }

  return (
    <li>
      <Link {...anchorProps} to={href ?? ""} className="hover:bg-base-200 rounded-box block px-3 py-1.5 text-sm">
        {title}
      </Link>
    </li>
  );
};
