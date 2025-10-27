import Link from "next/link";

import cn from "clsx";
import { motion } from "framer-motion";

import { ArrowIcon } from "@/components/domains/Home/Header/NavItem/helpers";
import { ARROW_DIRECTION_ANGLES } from "@/components/domains/Home/Header/NavItem/NavItem.data";
import styles from "@/components/domains/Home/Header/NavItem/NavItem.module.scss";
import { subNavItemVariants } from "@/components/domains/Home/Header/NavItem/NavItem.variants";
import { INavItemProps } from "@/components/domains/Home/Header/NavItem/type";
import { checkItemType } from "@/components/domains/Home/Header/NavItem/utils";
import {
  NAV_ITEM_TYPES,
  SCREEN_VARIANTS,
} from "@/components/domains/Home/Header/type";

export const NavItem = (props: INavItemProps) => {
  const {
    item,
    type,
    hasChildren,
    isActive,
    isOpening,
    screenVariant = SCREEN_VARIANTS.desktop,
    onHover,
    onLeave,
    onClick,
    className,
    animationVariant,
    index,
  } = props;

  const itemType = checkItemType(item, type, hasChildren);

  const itemProps =
    screenVariant === SCREEN_VARIANTS.mobile
      ? { onClick }
      : { onMouseEnter: onHover, onMouseLeave: onLeave };

  if (itemType === NAV_ITEM_TYPES.subNavLink) {
    return (
      <motion.a
        href={item.href ?? "#"}
        target="_blank"
        rel="noreferrer"
        custom={index}
        initial="hidden"
        animate={animationVariant}
        exit="exit"
        variants={subNavItemVariants}
        className={cn(styles.item, styles.subNavLink, className, {
          [styles.subNavLink_mobile]: screenVariant === SCREEN_VARIANTS.mobile,
        })}
      >
        <div className={styles.itemHeader}>
          {item.iconPath && (
            <img src={item.iconPath} alt="" className={styles.itemIcon} />
          )}
          <div className={styles.itemTitle}>{item.label}</div>
        </div>
      </motion.a>
    );
  }

  const content = (
    <>
      {item.iconPath && (
        <img src={item.iconPath} alt="" className={styles.icon} />
      )}
      <div className={styles.label}>{item.label}</div>
    </>
  );

  return (
    <motion.div
      {...itemProps}
      animate={{
        scale:
          isOpening && screenVariant === SCREEN_VARIANTS.desktop ? 1.03 : 1,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        styles.item,
        styles[itemType],
        isActive ? styles.active : styles.inactive,
        screenVariant === SCREEN_VARIANTS.mobile && styles.mobileItem,
        className,
      )}
    >
      {item.href ? (
        <Link href={item.href} className={styles.navLink}>
          {content}
        </Link>
      ) : (
        content
      )}

      {itemType === NAV_ITEM_TYPES.arrowButton && (
        <ArrowIcon
          isActive={!!isActive}
          directionAngle={
            screenVariant === SCREEN_VARIANTS.mobile
              ? ARROW_DIRECTION_ANGLES.right
              : ARROW_DIRECTION_ANGLES.down
          }
        />
      )}
    </motion.div>
  );
};
