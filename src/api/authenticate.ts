export type User = {
  id: string;
  name: string;
};
// this function simulates a successful login authentication
export function authenticate(): Promise<User | undefined> {
  return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'Bob' }), 1000));
}
