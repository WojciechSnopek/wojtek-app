export function Login() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', background: 'grey'}}>
            <label htmlFor="fname">Login</label>
            <input type="text" id="fname" name="fname"/>
            <label htmlFor="fname">Password</label>
            <input type="text" id="fname" name="fname"/>
         <button>Log in</button>
      </div>
    );
  }
  