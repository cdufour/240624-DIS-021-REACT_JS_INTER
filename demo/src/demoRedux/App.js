import { Provider } from 'react-redux';
import store from './store';
import Demo from './Demo';

export default function App() {
    return (
        <Provider store={store}>
            <h1>App utilisant Redux</h1>
            <Demo />
            <Demo />
        </Provider>
    )
}