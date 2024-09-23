import { AppProvider } from './AppContext';
import { HeaderUseContext } from './HeaderUseContext';
import { MainUseContext } from './MainUseContext';

function AppUseContext() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <AppProvider>
        <HeaderUseContext />
        <MainUseContext />
      </AppProvider>
    </div>
  );
}

export default AppUseContext;
