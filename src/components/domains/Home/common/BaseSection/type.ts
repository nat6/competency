import { ReactNode } from "react";

export interface IBaseSectionProps {
  sectionTitle: string;
  children: ReactNode;
  id?: string;
  className?: string;
}
