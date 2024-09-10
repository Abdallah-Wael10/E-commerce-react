import './login.css';
import Nav from '../Nav bar/Nav';
import Footer from '../footer section/footer';

function Login() {
  return (
    <div className="login">

    <section id='bigsection'>
        <div className="loginn">
            <h1>Login</h1>
            <form action="">
             <input type="email" required placeholder='E-mail'/>
            <input type="text" required placeholder='Password'/>
            <button>LOGIN</button>

            </form>
           

            <button>LOGIN WITH FACEBOOK</button>
        </div>
        <hr />
        <div className="create">
    <h1>Sign Up</h1>
    <p>Create your Jumia customer account in just a few clicks! You can register either using your e-mail address or through your Facebook account.</p>
        <button>CREATE AN ACCOUNT VIA GOOGLE</button>
        <button>LOGIN WITH FACEBOOK</button>
        </div>

    </section>


    <Footer/>
    </div>
  );
}

export default Login;