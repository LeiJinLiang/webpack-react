import React, { Component } from 'react'
import styles from  './styles.css'



class Calendar extends Component{
    constructor(props) {
        super(props)
        this.state  = {
            img : [
                {url : 'http://wx4.sinaimg.cn/mw690/79e392d3ly1fdllaxpdavj20e60bdjrq.jpg'},
                {url : 'http://wx2.sinaimg.cn/mw690/79e392d3ly1fdllawvqwnj20e60bc752.jpg'},
                {url : 'http://wx3.sinaimg.cn/mw690/79e392d3ly1fdllb23vewj20e60bcdgx.jpg'}
            ],
            load : false
        }
    }

    handleScroll=(e) => {
       let  scrollTop = e.target.scrollTop;
       let scrollHeight = e.target.scrollHeight;
       let  clientHeight = document.body.clientHeight;
       if(scrollTop+clientHeight >= scrollHeight ) {
            console.log('到底了....')
           let _arr = [
               {url : 'http://wx4.sinaimg.cn/mw690/79e392d3ly1fdllaxpdavj20e60bdjrq.jpg'},
               {url : 'http://wx2.sinaimg.cn/mw690/79e392d3ly1fdllawvqwnj20e60bc752.jpg'},
               {url : 'http://wx3.sinaimg.cn/mw690/79e392d3ly1fdllb23vewj20e60bcdgx.jpg'},
               {url : 'http://wx4.sinaimg.cn/mw690/79e392d3ly1fdllaxpdavj20e60bdjrq.jpg'},
               {url : 'http://wx2.sinaimg.cn/mw690/79e392d3ly1fdllawvqwnj20e60bc752.jpg'},
               {url : 'http://wx3.sinaimg.cn/mw690/79e392d3ly1fdllb23vewj20e60bcdgx.jpg'}
           ]
           this.setState({ img : _arr});
       }
    }

    componentDidMount() {
      //window.addEventListener('load',()=>{
      //   this.setState({
      //       load : !this.state.load
      //   })
      //})
    }



    render() {
        let { img } = this.state;
        return (
           <main className={styles.main} onScroll = {this.handleScroll}>
               {img.map((item,index)=>(
                   <img src={item.url} alt="" key={index}  className={this.state.load?styles.normal:styles.trans5}/>
               ))}
           </main>
        )
    }
}


module.exports = Calendar