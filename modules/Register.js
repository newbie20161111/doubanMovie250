var React = require('react');

var Register = React.createClass({
	getRegister:function(){

	},
	render:function(){
		return (
			<div className="container-fluid">
				<form className="form-horizontal">
					<div className="form-group">
					    <label for="inputEmail3" className="col-sm-2 control-label">邮箱</label>
					    <div className="col-sm-10">
					      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
					    </div>
					</div>
					<div className="form-group">
					    <label for="inputPassword3" className="col-sm-2 control-label">密码</label>
					    <div className="col-sm-10">
					      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
					    </div>
					</div>
					<div className="form-group">
					    <label for="inputPassword3" className="col-sm-2 control-label">再次输入密码</label>
					    <div className="col-sm-10">
					      <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" />
					    </div>
					</div>
					<div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10">
					      <button type="submit" className="btn btn-block btn-primary">注册</button>
					    </div>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = Register;