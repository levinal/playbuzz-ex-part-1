import React, { Component } from 'react';

import './App.css'

import Navbar from '../components/Navbar/Navbar'
import ItemsList from './ItemsList/ItemsList'
import playbuzz from '../api/playbuzz';

class App extends Component {
    state = { items: [] };

    render() {
        return (
            <div className="app">
                <Navbar />
                <main>
                    <ItemsList items={this.state.items} />
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