var React = require('react');
var NavLink = require('./NavLink');
var IndexLink = require('react-router').IndexLink;

var App = React.createClass({
	render:function(){
		return (
				 <div className="navbar-wrapper">
      				<div className="container">
						<nav className="navbar navbar-inverse navbar-static-top">
				          <div className="container">
				            <div className="navbar-header">
				              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				                <span className="sr-only">Toggle navigation</span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				              </button>
				              <a className="navbar-brand" href="#">豆瓣电影Top-250</a>
				            </div>
				            <div id="navbar" className="navbar-collapse collapse">
				              <ul className="nav navbar-nav">
				                <li><IndexLink to="/">首页</IndexLink></li>
				                <li className="dropdown">
				                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">分类 <span className="caret"></span></a>
				                  <ul className="dropdown-menu">
				                    <li><a href="#">动作片</a></li>
				                    <li><a href="#">科幻片</a></li>
				                    <li><a href="#">喜剧片</a></li>
				                    <li><a href="#">爱情片</a></li>
				                    <li><a href="#">战争片</a></li>
				                    <li><a href="#">剧情片</a></li>
				                  </ul>
				                </li>
				                <li><NavLink to="/about">关于我们</NavLink></li>
				                <li><NavLink to="/contact">联系我们</NavLink></li>
				                <li><NavLink to="/load">登录</NavLink></li>
				                <li><NavLink to="/register">注册</NavLink></li>
				                <li style={{margin: '12px auto',marginLeft:'1em'}}>
				                	<form className="form-inline" style={{marginBottom: '0'}}>
				                		<div className="form-group">
					                		<label for="sr-only"></label>
					                		<div className="input-group srch">
			  									<input type="text" className="form-control" style={{borderRight:"none"}}/>
			  									<div className="input-group-addon" style={{padding:'0',border:'none'}}><button type="button" className="btn btn-primary" style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0"}} >搜索</button></div>
		  									</div>
										</div>
									</form>
								</li>
				              </ul>
				            </div>
				          </div>
				        </nav>

				        {this.props.children}
						
				         <footer style={{marginTop:'10em'}}>
					        <p className="pull-right"><a href="#">回到顶部</a></p>
					        <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
						 </footer>
					</div>
				</div>
		)
	}
});

module.exports = App;