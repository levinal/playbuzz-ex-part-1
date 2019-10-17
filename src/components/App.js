import React, { Component, lazy, Suspense } from 'react';

import './App.css'

import Navbar from '../components/Navbar/Navbar'
import playbuzz from '../api/playbuzz';

const ItemsList = lazy(() => import('./ItemsList/ItemsList'));

class App extends Component {
    state = { items: [] };

    render() {
        return (
            <div className="app">
                <Navbar />
                <main>
                    <Suspense fallback={'Loading..'}>
                        <ItemsList items={this.state.items} />
                    </Suspense>
                </main>
            </div>
        );
    }

    componentDidMount() {
        this.getItems().then((res) => {
            this.setState({items: res});
        });
    }

    async getItems() {
        const response = await playbuzz.get('/content/feed/resources.json');
        return response.data.items;

    }
}

export default App;