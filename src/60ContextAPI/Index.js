import React from 'react'
import {CommonContext} from './Child1'
import Main from './Child2'
import Footer from './Footer'
import Header from './Header'
import UpdateBtn from './UpdateBtn'
class Context extends React.Component{
    constructor(){
        super()
        this.updateColor=(color)=>{
            this.setState({
                color:color
            })
        }
        this.state={
            color:'blue',
            updateColor:this.updateColor
        }
        
    }
    render(){
        return(
                <CommonContext.Provider value={this.state}>
                    <h1>this is inside CommonContext</h1>
                    <Header />
                    <Main />
                    <UpdateBtn />
                    <Footer />
                </CommonContext.Provider>
        )
    }
}
export default Context

/* YAH CONTEXT API ka example hain
jaha ki application se eake comp se dusare component tak value send karna.. without any tree following.
isaka use important hain. bcoz yah direclty data send karata hain.
*/