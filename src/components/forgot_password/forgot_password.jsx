// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './forgot_password';
import './forgot_password.css';

function Forgot_password() {
  return (
    <>
      <div className="bgcolor">
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

        </div>
        <div className="form-gap"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="text-center">
                    <h3><i className="fa fa-lock fa-4x"></i></h3>
                    <h2 className="text-center">Forgot Password?</h2>
                    <p>You can reset your password here.</p>
                    <div className="panel-body">

                      <form id="register-form" role="form" autoComplete="off" className="form" method="post">

                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                            <input id="email" name="email" placeholder="email address" className="form-control" type="email" />
                          </div>
                        </div>
                        <div className="form-group">
                          <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" />
                        </div>

                        <input type="hidden" className="hide" name="token" id="token" value="" />
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot_password;
