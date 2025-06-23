import React from "react";

const LoginSection = () => {
  return (
    <section className="w3l-forms-31">
      <div id="w3l-forms-31_sur">
        <div className="wrapper">
          <div className="d-grid">
            <div className="w3l-forms-31-top">
              <h4>Sign in with Social Media</h4>
              <p>Access your account quickly and securely using one of your social accounts.</p>
              <form action="#" method="post" className="signin-form">
                <div className="form-input">
                  <a href="#facebook" className="facebook">
                    <span className="fa fa-facebook"></span> Sign in with Facebook
                  </a>
                </div>
                <div className="form-input">
                  <a href="#linkedin" className="linkedin">
                    <span className="fa fa-linkedin"></span> Sign in with LinkedIn
                  </a>
                </div>
                <div className="form-input">
                  <a href="#google-plus" className="google">
                    <span className="fa fa-google-plus"></span> Sign in with Google
                  </a>
                </div>
                <p className="no-margin">
                  By clicking "Login", you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
            <div className="w3l-forms-31-right">
              <h4>Login with Email</h4>
              <form action="#" method="post" className="login-form">
                <div className="form-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <a href="#url" className="forgot">
                  Forgot password?
                </a>
                <button className="btn">Login</button>
                <div className="clear"></div>
                <p className="form_acunt text-center">
                  Don’t have an account? <a href="/auth/signup">Create one now</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
