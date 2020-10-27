import React from 'react'
import styled from 'styled-components';
import PicApi from '../api/picsApi'




const Container=styled.div`
    width:100%;
    background: #1C437E;
    position:absolute;
    top:0;
    height: 80px;
    display:flex;
    justify-content: space-between;
    align-items:center;

`
const H2=styled.h2`
    font-size:30px;
    color:#fff;
    margin-left:5%;
`;

const Img=styled.img`
    width:70px;
    height:70px;
    border-radius:50%;
    margin-right:5%

`



 class Header extends React.Component{

    state={
        url:''
    }
    
    componentDidMount() {
        const randomNumber= Math.floor(Math.random() * 1000)
        PicApi.get(`/${randomNumber}/info`).then(res=> {
            this.setState({url: res.data.download_url})
            console.log(res)
        })
    }

     

    render() {
        const {url} = this.state;
        return (
            <Container>
                <H2>Tasksboard</H2>
                <Img src={url} alt='profilePicture'/>
            </Container>
        )
    }
    
}

export default Header;
