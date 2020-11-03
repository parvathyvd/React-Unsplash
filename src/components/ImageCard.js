import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props)
       // console.log(this.props.image)

        this.ImageRef = React.createRef()

        this.state = {span : 0}
 
    }

    componentDidMount(){
       // console.log(this.ImageRef.current.clientHeight);
        this.ImageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () =>{
        const imgHeight = this.ImageRef.current.clientHeight
        const span = Math.ceil(imgHeight / 10);
        this.setState({span})
    }


    render(){
        const {description,urls} = this.props.image

        return(
            <div style={{gridRowEnd : `span ${this.state.span}`}}>
            <img ref={this.ImageRef} src={urls.regular} alt={description} />
            </div>
            )
    }
}

export default ImageCard;