import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import FormUser from './form.js';
import Profil from "./profil";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            user: false,
            github: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        const data = new FormData(e.target)
        const username = data.get('username')
        console.log(username,data)
        this.fetchUser(username)
        this.fetchUserRepos(username)
    }
    async fetchUser(username) {
        fetch("https://api.github.com/users/"+username)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        user: result
                    });console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    async fetchUserRepos(username) {
        fetch("https://api.github.com/users/"+username+"/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        github: result
                    });console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { isLoading, user, github } = this.state
        return (
            <div>
                {!github &&
                < FormUser
                    handleSubmit={this.handleSubmit}
                    notfound = {false}
                    />
                }
                { isLoading && <p>Fetching github ...</p> }
                { !isLoading && !github.message && github && user &&
                <Profil
                    user= {user}
                       github={github}
                />
                }
                { !isLoading && github.message &&
                < FormUser
                    handleSubmit={this.handleSubmit}
                    notfound = {true}

                    />
                }
            </div>
            /*
            <div>
                <formUser handleSubmit={this.handleSubmit()}/>
            </div>*/

        );
    }
}
export default App;
