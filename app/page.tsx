export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#f7f4f0', fontFamily: 'var(--font-jost), sans-serif'}}>
      
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 40px', borderBottom: '1px solid #e8e2da'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <polygon points="20,3 37,35 3,35" stroke="#b8960c" strokeWidth="2" fill="none"/>
            <polygon points="20,11 30,31 10,31" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
          </svg>
          <span style={{fontSize: '13px', letterSpacing: '5px', color: '#1a1a1a'}}>THRIWANA</span>
        </div>
        <div style={{display: 'flex', gap: '32px'}}>
          <a href="#collection" style={{fontSize: '11px', letterSpacing: '3px', color: '#666', textDecoration: 'none'}}>COLLECTION</a>
          <a href="#story" style={{fontSize: '11px', letterSpacing: '3px', color: '#666', textDecoration: 'none'}}>STORY</a>
          <a href="#contact" style={{fontSize: '11px', letterSpacing: '3px', color: '#666', textDecoration: 'none'}}>CONTACT</a>
        </div>
      </nav>

      <section style={{padding: '100px 40px 80px', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
        <p style={{fontSize: '11px', letterSpacing: '4px', color: '#b8960c', marginBottom: '24px'}}>SRI LANKA - LIMITED EDITION</p>
        <h1 style={{fontSize: '64px', fontWeight: '300', color: '#1a1a1a', lineHeight: '1.1', marginBottom: '24px', fontFamily: 'var(--font-cormorant)'}}>Handcrafted<br/>in Sri Lanka</h1>
        <p style={{color: '#888', fontSize: '14px', marginBottom: '48px', letterSpacing: '2px'}}>Small batches - Local textiles - Women artisans</p>
        <a href="#collection" style={{border: '1px solid #1a1a1a', color: '#1a1a1a', padding: '16px 48px', textDecoration: 'none', fontSize: '11px', letterSpacing: '3px', display: 'inline-block'}}>DISCOVER THE COLLECTION</a>
      </section>

      <div style={{width: '100%', height: '600px', backgroundColor: '#e8e2da', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{color: '#bbb', fontSize: '11px', letterSpacing: '4px'}}>CAMPAIGN IMAGE</span>
      </div>

      <section id="collection" style={{padding: '100px 40px', maxWidth: '900px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '64px'}}>
          <p style={{fontSize: '11px', letterSpacing: '4px', color: '#b8960c', marginBottom: '16px'}}>THE COLLECTION</p>
          <h2 style={{fontSize: '48px', fontWeight: '300', color: '#1a1a1a', fontFamily: 'var(--font-cormorant)'}}>Current Season</h2>
          <p style={{color: '#888', fontSize: '13px', letterSpacing: '1px', marginTop: '12px'}}>Limited batch. Locally crafted. Each piece unique.</p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
          <div>
            <div style={{width: '100%', height: '400px', backgroundColor: '#e0dbd4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
              <span style={{color: '#bbb', fontSize: '11px', letterSpacing: '3px'}}>PRODUCT PHOTO</span>
            </div>
            <p style={{fontSize: '11px', letterSpacing: '3px', color: '#888', marginBottom: '6px'}}>01</p>
            <h3 style={{fontSize: '22px', fontWeight: '300', color: '#1a1a1a', fontFamily: 'var(--font-cormorant)', marginBottom: '4px'}}>Olive Geometric</h3>
            <p style={{color: '#aaa', fontSize: '12px', letterSpacing: '1px', marginBottom: '12px'}}>Hand-block printed - Limited batch</p>
            <p style={{color: '#b8960c', fontSize: '18px', marginBottom: '16px', fontFamily: 'var(--font-cormorant)'}}>EUR 85</p>
            <button style={{border: '1px solid #ccc', padding: '12px 24px', backgroundColor: 'transparent', fontSize: '11px', letterSpacing: '2px', cursor: 'pointer', width: '100%'}}>VIEW DETAILS</button>
          </div>
          <div>
            <div style={{width: '100%', height: '400px', backgroundColor: '#e0dbd4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
              <span style={{color: '#bbb', fontSize: '11px', letterSpacing: '3px'}}>PRODUCT PHOTO</span>
            </div>
            <p style={{fontSize: '11px', letterSpacing: '3px', color: '#888', marginBottom: '6px'}}>02</p>
            <h3 style={{fontSize: '22px', fontWeight: '300', color: '#1a1a1a', fontFamily: 'var(--font-cormorant)', marginBottom: '4px'}}>Rust Stripe</h3>
            <p style={{color: '#aaa', fontSize: '12px', letterSpacing: '1px', marginBottom: '12px'}}>Hand-block printed - Limited batch</p>
            <p style={{color: '#b8960c', fontSize: '18px', marginBottom: '16px', fontFamily: 'var(--font-cormorant)'}}>EUR 85</p>
            <button style={{border: '1px solid #ccc', padding: '12px 24px', backgroundColor: 'transparent', fontSize: '11px', letterSpacing: '2px', cursor: 'pointer', width: '100%'}}>VIEW DETAILS</button>
          </div>
        </div>
      </section>

      <section id="story" style={{padding: '100px 40px', backgroundColor: '#1a1a1a', textAlign: 'center'}}>
        <p style={{fontSize: '11px', letterSpacing: '4px', color: '#b8960c', marginBottom: '24px'}}>OUR STORY</p>
        <h2 style={{fontSize: '48px', fontWeight: '300', color: '#f7f4f0', fontFamily: 'var(--font-cormorant)', marginBottom: '32px'}}>The Story</h2>
        <p style={{color: '#888', lineHeight: '1.9', maxWidth: '560px', margin: '0 auto 20px', fontSize: '14px'}}>Born in a coastal town. Built on second chances, local craft, and patience.</p>
        <p style={{color: '#888', lineHeight: '1.9', maxWidth: '560px', margin: '0 auto 20px', fontSize: '14px'}}>Each piece is made in small batches using Sri Lankan textiles, working with family workshops and women artisans in the Arugam Bay area.</p>
        <p style={{color: '#666', fontStyle: 'italic', marginTop: '32px', fontFamily: 'var(--font-cormorant)', fontSize: '20px'}}>We believe clothing should carry meaning - not just noise.</p>
      </section>

      <footer id="contact" style={{padding: '48px 40px', textAlign: 'center', borderTop: '1px solid #e8e2da'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px'}}>
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <polygon points="20,3 37,35 3,35" stroke="#b8960c" strokeWidth="2" fill="none"/>
            <polygon points="20,11 30,31 10,31" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
          </svg>
          <span style={{fontSize: '11px', letterSpacing: '4px', color: '#1a1a1a'}}>THRIWANA</span>
        </div>
        <p style={{color: '#aaa', fontSize: '11px', letterSpacing: '2px'}}>2025 THRIWANA. ALL RIGHTS RESERVED.</p>
      </footer>

    </main>
  );
}