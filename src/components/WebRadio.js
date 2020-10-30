import React from 'react'
import Header from "./Header";
import Subheader from "./Subheader";
import Search from "./Search";
import ResponseItem from "./ResponseItem";

class WebRadio extends React.Component {
    state = {
        listItems: []
    }

    render() {
        const getInputValue = () => {
            const baseURL = 'https://de1.api.radio-browser.info/json/stations/byname/'
            const input = document.getElementById('input')
            const outputURL = baseURL + input.value

            fetch(outputURL)
                .then(res => res.json())
                .then(
                    (result) => {
                        const radios = result
                        const listItems = radios.map((d) => <li key={d.stationuuid}><p>{d.name}</p>
                            <audio src={d.url_resolved} type={d.codec} preload="none" controls></audio>
                        </li>)
                        this.setState({listItems: listItems})
                    }
                )
        }

        return (
            <div>
                <Header/>
                <Subheader/>
                <Search getInputValue={getInputValue}/>
                <ResponseItem listItems={this.state.listItems}/>
            </div>
        )
    }
}

export default WebRadio