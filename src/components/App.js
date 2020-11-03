import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
    state = {images : []}

    onSearchTerm = async (term) =>{
        console.log(`inside App`,term);
        const response = await unsplash.get('/search/photos', {
            params:{
                query : term
            }
        })

        this.setState({
            images : response.data.results
        })

        //console.log(response.data.results)

    }


    render()
    {
        return(
            <div className="ui container" style={{marginTop : '10px'}}>
                <SearchBar onAppSearch = {this.onSearchTerm}/>
                <ImageList images = {this.state.images}/>
            </div>
        )
    }
}


export default App;
