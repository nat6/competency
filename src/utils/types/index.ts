export interface ISectionData {
  title: string,
  label: string,
  id: string,
  type?: string,
}

export interface ISectionsData {
  [key: string]: ISectionData;
}