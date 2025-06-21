export interface ITableHeader<T extends { id: number }> {
  label: string;
  renderRow?: (data: T) => React.ReactNode;
  renderHeader?: (data: string) => React.ReactNode;
}
