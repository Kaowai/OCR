export interface IOption {
  label: string;
  value: string;
}

export interface IProject {
  id: number;
  name: string;
  amountItems: number;
}

export interface IProjectItem {
  id: number;
  name: string;
  pageNumber: number;
  confidenceScore: number;
  status: string;
  uploadAt: Date;
  updatedAt: Date;
}
