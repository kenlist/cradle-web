import dva from 'dva';
import createLoading from 'dva-loading';
// import { browserHistory } from 'dva/router';
import './index.css';

import {createBrowserHistory as createHistory} from 'history';

// 1. Initialize
// const app = dva();
const app = dva({
  history: createHistory()
});

// 2. Plugins
app.use(createLoading({effects: true}));

// 3. Model
// app.model(require('./models/app').default);
// app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
