export interface IAgent {
  id: number;
  type: string;
  os: string;
  name: string;
  status: string;
  ip: string;
  path: string;
  resources: Array<string>;
}
