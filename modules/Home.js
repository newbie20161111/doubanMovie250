var React = require('react');
var NavLink = require('./NavLink');

var Home = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://api.douban.com/v2/movie/top250'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({
			url:this.props.url,
            type:'GET',
            data:{start: 0,count: 12},
            dataType:'JSONP'
        }).then(function(res){
			_this.setState({
				list: res.subjects
			})
		})
	},
	render:function(){
console.log(this.state.list);
		if(this.state.list.length>0){
			var lst = [];
			var data = this.state.list;
			var listLen = data.length;
			for(var i =0;i<listLen;i++){
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
					<div className="col-lg-3 col-sm-4 col-xs-6 text-center" key={i} >
			          <img 
			          src={data[i].images.medium} 
			          alt="Generic placeholder image" width="100px" height="148px"/>
			          <h3>{data[i].title}</h3>
			          <p>豆瓣评分：<span className="rate">{data[i].rating.average}</span></p>
			          <p>年代：{data[i].year}</p>
			          <p>类型：{data[i].genres.join('/')}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看更多 &raquo;</NavLink></p>
			        </div>
				)
			}

		}

		return (
			<div className="container marketing">
		      <div className="row">
		        {lst}
		      </div>
			</div>
		)
	}
});

module.exports = Home;