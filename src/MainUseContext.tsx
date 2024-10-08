import { useAppContext } from './AppContext';
import { ContentUseContext } from './ContentUseContext';

export function MainUseContext() {
  const { user } = useAppContext();
  return (
    <main className="py-8">
      <h1 className="text-3xl text-center font-bold underline">Welcome</h1>
      <p className="mt-8 text-xl text-center">{user ? `Hello ${user.name}!` : 'Please sign in'}</p>
      <ContentUseContext />
    </main>
  );
}
