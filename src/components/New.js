import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

export class New extends Component {
  static defaultProps={
    country:"in",
    pagesize:8,
    category:"general",
  }
  static propTypes={
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }
//   articles=[
   
    
//       {
//           "source": {
//               "id": "bbc-sport",
//               "name": "BBC Sport"
//           },
//           "author": null,
//           "title": "James Anderson retires: Which bowlers could form England's new-look pace attack for Ashes?",
//           "description": "With James Anderson retiring from Test cricket in July, BBC Sport looks at the options available to Brendon McCullum and Ben Stokes as England build towards next winter's Ashes.",
//           "url": "http://www.bbc.co.uk/sport/cricket/articles/c80zzlyqnpxo",
//           "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/92ad/live/b6a5a210-110d-11ef-a190-bb979758150a.png",
//           "publishedAt": "2024-05-13T15:22:23Z",
//           "content": "There are some names that have featured for England across formats in the last 12 months that immediately spring to mind as contenders.\r\nNottinghamshire's Josh Tongue impressed with 10 wickets in two… [+2451 chars]"
//       },
//       {
//           "source": {
//               "id": "espn-cric-info",
//               "name": "ESPN Cric Info"
//           },
//           "author": null,
//           "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//           "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//           "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//           "publishedAt": "2020-04-27T11:41:47Z",
//           "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//       },
//       {
//           "source": {
//               "id": "espn-cric-info",
//               "name": "ESPN Cric Info"
//           },
//           "author": null,
//           "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//           "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//           "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//           "publishedAt": "2020-03-30T15:26:05Z",
//           "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//       }
  

// ]
capitaliseFirstLetter= (string)=>{
  return string.charAt(0).toUpperCase()+ string.slice(1);
}
constructor(props){
  super(props);
  console.log("Hello constructor from News");
  this.state={
    articles:[],
    load:true,
    page:1,
    totalResults:0,
  
  
  }
  document.title=`${this.capitaliseFirstLetter(this.props.category)} - NewsMonkey`;
}

async update(){

  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee530c587ee74046a166aad92fa8e99c&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  // this.setState({load:true})
  let data= await fetch(url);
  let parsed_data= await data.json();
  // console.log(parsed_data);
  this.setState({articles:parsed_data.articles,totalResults:parsed_data.totalResults,load:false});
}
async componentDidMount(){
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee530c587ee74046a166aad92fa8e99c&page=1&pageSize=${this.props.pagesize}`;
  // this.setState({load:true})
  // let data= await fetch(url);
  // let parsed_data= await data.json();
  // // console.log(parsed_data);
  // this.setState({articles:parsed_data.articles,totalResults:parsed_data.totalResults,load:false});
  this.update();

}

handlePrevClick= async ()=>{
// console.log("Previous");



// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee530c587ee74046a166aad92fa8e99c&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
// this.setState({load:true})
// let data= await fetch(url);
// let parsed_data= await data.json();
// console.log(parsed_data);
// // this.setState({articles:parsed_data.articles});

// this.setState({
//   page:this.state.page - 1,
//   articles:parsed_data.articles,
//   load:false,
// })
this.setState({page:this.state.page - 1});
this.update();
}


handleNextClick= async ()=>{
// console.log("Next");

// if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

// }
// else{

// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee530c587ee74046a166aad92fa8e99c&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
// this.setState({load:true})
// let data= await fetch(url);
// let parsed_data= await data.json();
// console.log(parsed_data);
// // this.setState({articles:parsed_data.articles});

// this.setState({
//   page:this.state.page+1,
//   articles:parsed_data.articles,
//   load:false,
// })
// }
this.setState({page:this.state.page + 1});
this.update();

}
fetchMoreData = async () => {
  // a fake async api call like which sends
  // 20 more records in 1.5 secs
this.setState({page:this.state.page+1});

const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee530c587ee74046a166aad92fa8e99c&page=${this.state.page}&pageSize=${this.props.pagesize}`;
this.setState({load:true})
let data= await fetch(url);
let parsed_data= await data.json();
// console.log(parsed_data);
this.setState({articles:this.state.articles.concat(parsed_data.articles),
  totalResults:parsed_data.totalResults,
  load:false});
};


  render() {
    return (
      // <div className="container my-3">
      <>
        <h1 className="text-center"> NewsMonkey- Top {this.capitaliseFirstLetter(this.props.category)} Headlines </h1>
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        {this.state.load && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4">
          <NewsItem  key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://cdna.artstation.com/p/assets/images/images/043/365/940/large/breedermaniac-ce5870cf2c824a9e8c79983fcf51-hires.jpg?1637250078"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
          {/* <div className="col-md-3">
        <NewsItem title="My title" description="My description" imageUrl="https://tse1.mm.bing.net/th?id=OIP.4UJeLyl0HmMx_0bdV_8wLQHaEK&pid=Api&P=0&h=180" newsUrl="To do" />
        </div> */}        
        </div>
        </div>
        </InfiniteScroll>

        {/* <NewsItem /> */}
        {/* <div className="container d-flex justify-content-between">
        <button disbaled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        */}
     
      </>
    )
  }
}

export default New
