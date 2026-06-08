export default function Success() {
  return (
    <main style={{fontFamily: 'Cormorant Garamond, serif', backgroundColor: '#f5f0e8', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
      <div>
        <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>THANK YOU</p>
        <h1 style={{fontSize: '48px', fontWeight: '300', color: '#2c2c2c', marginBottom: '24px'}}>Order Confirmed.</h1>
        <p style={{fontSize: '16px', color: '#888', marginBottom: '48px'}}>Your Thriwana shirt is on its way. We will be in touch shortly.</p>
        <a href="/" style={{border: '1px solid #2c2c2c', padding: '14px 40px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', textDecoration: 'none'}}>BACK TO HOME</a>
      </div>
    </main>
  );
}