//This method simulates a user being authorized as admin
export function authorize(id: string): Promise<string[] | undefined> {
  return new Promise((resolve) => setTimeout(() => resolve(['admin']), 1000));
}
