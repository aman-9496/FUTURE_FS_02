import { useState }    from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin }  from '../../services/api';
import s               from './Login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username.trim() || !password.trim())
      return setError('Please enter username and password');

    setLoading(true);
    setError('');
    try {
      const res = await loginAdmin(username, password);
      localStorage.setItem('token', res.data.token);
      navigate('/admin/dashboard');
    } catch {
      setError('Wrong username or password. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => { if (e.key === 'Enter') handleLogin(); };

  return (
    <div className={s.page}>
      <div className={s.card}>

        <div className={s.logoSection}>
          <div className={s.logo}>CRM</div>
          <h1 className={s.title}>Admin Login</h1>
          <p className={s.subtitle}>Mini CRM — Staff Access Only</p>
        </div>

        {error && <div className={s.errorBox}>⚠️ {error}</div>}

        <div className={s.fieldGroup}>
          <label className={s.label}>Username</label>
          <input
            className={s.input}
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={onKey}
          />
        </div>

        <div className={s.fieldGroup}>
          <label className={s.label}>Password</label>
          <input
            className={s.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={onKey}
          />
        </div>

        <button
          className={loading ? s.btnLoading : s.btn}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In →'}
        </button>

        <p className={s.hint}>Default: admin / admin123</p>
      </div>
    </div>
  );
}
