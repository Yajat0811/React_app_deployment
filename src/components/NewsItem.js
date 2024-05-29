import React, { Component } from "react";

export class NewsItem extends Component {
  // articles=[

  //     {
  //         "source": {
  //             "id": "bbc-sport",
  //             "name": "BBC Sport"
  //         },
  //         "author": null,
  //         "title": "James Anderson retires: Which bowlers could form England's new-look pace attack for Ashes?",
  //         "description": "With James Anderson retiring from Test cricket in July, BBC Sport looks at the options available to Brendon McCullum and Ben Stokes as England build towards next winter's Ashes.",
  //         "url": "http://www.bbc.co.uk/sport/cricket/articles/c80zzlyqnpxo",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/92ad/live/b6a5a210-110d-11ef-a190-bb979758150a.png",
  //         "publishedAt": "2024-05-13T15:22:23Z",
  //         "content": "There are some names that have featured for England across formats in the last 12 months that immediately spring to mind as contenders.\r\nNottinghamshire's Josh Tongue impressed with 10 wickets in two… [+2451 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "2020-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "2020-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }

  // ]
  constructor() {
    super();
    console.log("Hello constructor from New Item");
    // this.state={
    //   articles:this.articles,
    //   load:false

    // }
  }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-4">
        {/* This is  a news Item */}

        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..."  style={{height:'300px'}}/>
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}}>
                {source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
