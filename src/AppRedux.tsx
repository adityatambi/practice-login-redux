import { Provider } from 'react-redux';
import { store } from './store/store';
import { HeaderRedux } from './HeaderRedux';
import { MainRedux } from './MainRedux';

function AppUseRedux() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Provider store={store}>
        <HeaderRedux />
        <MainRedux />
      </Provider>
    </div>
  );
}

export default AppUseRedux;
