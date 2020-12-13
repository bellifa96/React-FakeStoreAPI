import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Navbar from "./composants/NavBar";
import Filter from "./composants/Filter";
import Products from "./composants/Products";
import {forEach} from "react-bootstrap/ElementChildren";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items :[],
            filters: [],
            filteredItems:[],
            max:1000,
            min:0,
            isFilter: false,
            search :"",
        };



        let load = this.fetchAllProducts();
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this)

    }


    handleSearchChange(e){
            this.setState(
                { search: e.target.value }
                );
    }
    handleChange(e) {
        let category = e.target.name ;
        console.log('checked = '+e.target.checked)
        if(e.target.checked){
            this.addFilter(category)

            this.setNewProducts()


        }else{
            this.deleteFilter(category)
            console.log('dddd'+this.state.filters.length);

            if(!this.state.filters.length){
                console.log('oooo'+this.state.filters.length);
              //  this.resetItems()
                this.isNotFilter()
                this.fetchAllProducts()
            }else{
                console.log('delete')
                this.resetItems()
                console.log(this.state.filters)

                for (let i = 0;i < this.state.filters.length;i++) {
                    this.fetchProductsByCategory(this.state.filters[i])
                    this.setNewProducts()
                }
            }
        }

           //  let array = this.state.filteredItems;

    }

    async resetItems(){
        this.setState({
            items: null,
            filteredItems:[],
        });
    }
    async isNotFilter(){
        this.setState({
            isFilter:false
        });
    }
    async setNewProducts(){
        this.setState({
            items: this.state.filteredItems,
        });
    }

    async addFilter(category){
        this.setState({
            filters : this.state.filters.concat(category),
        },() => { this.fetchProductsByCategory(category)});
    }
    async deleteFilter(category){
        this.setState({
            filters : this.state.filters.splice(category, 1),
        });console.log('filter'+this.state.filters)
    }


    async fetchAllProducts() {

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    async fetchProductsByCategory(category) {
          fetch("https://fakestoreapi.com/products/category/" + category)
              .then(res => res.json())
              .then(
                  (result) => {
                      this.setState({
                          isLoaded: true,
                          items : result,
                          filteredItems : [...this.state.filteredItems,...result],
                          isFilter: true
                      });
                  },
                  (error) => {
                      this.setState({
                          isLoaded: true,
                          error
                      });
                  }
              )

    }


    render(){
        const {filteredItems,isFilter, isLoaded,items, min, max,search } = this.state
        const lowercasedFilter = search.toLowerCase();
        const filteredData = items.filter(item => {
            return Object.keys(item).some(key =>

                typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
       const filterData = filteredItems.filter(item => {
            return Object.keys(item).some(key =>
                typeof item[key] === "string" &&  item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div>
                <Navbar/>
                <div className="row" id='body'>
                    <Filter
                     handleChange = {this.handleChange}
                     handleSearchChange = {this.handleSearchChange }
                    />
                    {isLoaded && !isFilter &&
                    <Products
                        products={filteredData}
                    />
                    }

                    {isLoaded && isFilter &&
                        <Products
                        products={filterData}
                        min={min}
                        max={max}
                        />
                    }
                </div>
            </div>

            /*
            <div>
                <formUser handleSubmit={this.handleSubmit()}/>
            </div>*/

        );
    }
}
export default App;
