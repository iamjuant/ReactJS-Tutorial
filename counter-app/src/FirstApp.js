//there's two types of components class components and functional components
import React, { Fragment } from 'react'
import './index.css'
import PropTypes from 'prop-types'

const FirstApp = ({saludo = 'Hello World', subtitulo})=>{
    //when you want to return several things you can put them in div tags
    //also you can import fragment tag so you dont have to have a lot of divs
    // or you can use <> </> empty, this is the same as fragment
    // if you want to print an object or a boolean you have to use JSON.stringify
    // const saludo = 3<2
    return <>
            <h1>{saludo}</h1>    
            {/* <pre> {JSON.stringify(saludo,null,3)}</pre> */}
            <p>{subtitulo}</p>
        </>
};

//using proptypes is to force a developer to send a prop in a specific way ex. String, required, number.
FirstApp.propTypes = {
    saludo: PropTypes.string
}

//We can use defaultProps to assign default properties and they can be viewed in the props section 
//even if not passed
FirstApp.defaultProps ={
    subtitulo: 'soy un subtitulo'
}
export default FirstApp;