var React = require('react');

var Detail = React.createClass({
	comment:function(){
		$(".textArea").on("change",function(){
			if($(this).val()){
				$(".commentBtn").removeAttr("disabled");
			}
		})
	},
	getDefaultProps:function(){
		return {
			url:'http://api.douban.com/v2/movie/subject/'
		}
	},
	getInitialState:function(){
		return {
			list:{}
		}
	},
	componentWillMount:function(){
		var _this = this;
		var thisId = this.props.params.id;
		$.ajax({
			url:this.props.url+thisId,
			type:'GET',
            dataType:'JSONP'
        }).then(function(res){
			_this.setState({
				list: res
			})
		})
	},
	render:function(){
		if(this.state.list.rating){//注意获取到的数据格式，对象没有长度
			var data = this.state.list;
			var dir = data.directors;
			var cast = data.casts;
			var dirnameLs = [];
			var castnameLs = [];
			var myDir = new Map();
			var myCast = new Map();
			var dirInfo = [],castInfo = [];
			var movieDetail=[];
			for(var j in dir){
				dirnameLs.push(dir[j].name);
				myDir.set(dir[j].name,dir[j].avatars.medium)
			};
			for(var k in cast){
				castnameLs.push(cast[k].name);
				myCast.set(cast[k].name,cast[k].avatars.medium)
			};
			for (var [key, value] of myDir.entries()){
			  	dirInfo.push(<div className="col-lg-2  col-xs-12 text-center" key={dirInfo} ><img src={value}/><h4>{key}</h4></div>)
			};
			
			for (var [key, value] of myCast.entries()) {
			  	castInfo.push(<div className="col-lg-2 col-xs-12 text-center" key={castInfo}><img src={value}/><h4>{key}</h4></div>)
			};
			movieDetail.push(
		    	<div className="detail" key={movieDetail}>
		    		<div className="col-lg-4 text-center" >
			    		<img src={data.images.large} alt="Generic placeholder image" />
			    	</div>
			    	<div className="col-lg-8" >
			    	  <h1>{data.original_title}</h1>
			          <h1>{data.title}</h1>
			          <h4>又名：{data.aka.join('/')}</h4>
			          <h3>豆瓣评分：<span className="rate">{data.rating.average}</span></h3>
			          <h3>年代：{data.year}</h3>
			          <h3>类型：{data.genres.join('/')}</h3>
			          <h3>地区：{data.countries}</h3>
			          <h3>导演：{dirnameLs.join('/')}</h3>
			          <h3>主演：{castnameLs.join('/')}</h3>
			        </div>
			        <div className="col-lg-12">
			          <h3>剧情简介</h3>
			         	<p style={{fontSize:'1.5em',textIndent:'2em'}}>{data.summary}</p>
			        </div>
			        <div className="col-lg-12">
			          <h3>导演</h3>
			         	{dirInfo}
			        </div>
			        <div className="col-lg-12">
			          <h3>主演</h3>
			          	{castInfo}
			        </div>
			        <div className="col-lg-12">
			        	<h4>评论</h4>
			        	<textarea className="form-control textArea" rows="3"></textarea>
			        	<button type="button" className="btn btn-primary pull-right commentBtn" disabled="disabled" style={{width:"10em",marginTop:"20px"}}>评论</button>
			        	<h4 style={{marginTop:'5em'}}>最新评论</h4>
			        </div>
		        </div>
		    );
		
		}
	    
			
	
	
		
		return (
			<div className="container">
		        {movieDetail}
			</div>
		)
	}
});

module.exports = Detail;