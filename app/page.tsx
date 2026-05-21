export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#f7f4f0', fontFamily: 'var(--font-jost), sans-serif'}}>
      
      {/* Nav */}
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 40px', borderBottom: '1px solid #e8e2da'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <polygon points="20,3 37,35 3,35" stroke="#b8960c" strokeWidth="2" fill="none"/>
            <polygon points="20,11 30,31 10,31" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
          </svg>
          <span style={{fontSize: '13px', letterSpacing: '5px', color: '#1a1a1a', fontWeight: '400'}}>THRIWANA</span>
        </div>
        <div style={{display: 'flex', gap: '32px', alignItems: 'center'}}>
          <a href="#collection" style={{fontSize: '11px', letterSpacing: '3px', color: '#666', textDecoration: 'none'}}>COLLECTION</a>
          <a href="#story" style={{fontSize: '11px', letterSpacing: '3px', color: '#666', textDecoration: 'none'}}>STORY</a>
          <a href="#contact" style={{fontSize: '11px', letterSpacing: '3px', color: '#666', textDecoration: 'none'}}>CONTACT</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{padding: '100px 40px 80px', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
        <p style={{fontSize: '11px', letterSpacing: '4px', color: '#b8960c', marginBottom: '24px', fontFamily: 'var(--font-jost)'}}>SRI LANKA — LIMITED EDITION</p>
        <h1 style={{fontSize: '64px', fontWeight: '300', color: '#1a1a1a', lineHeight: '1.1', marginBottom: '24px', fontFamily: 'var(--font-cormorant)'}}>
          Handcrafted<br/>in Sri Lanka
        </h1>
        <p style={{color: '#888', fontSize: '14px', marginBottom: '48px', letterSpacing: '2px', fontFamily: 'var(--font-jost)'}}>
          Small batches · Local textiles · Women artisans
        </p>
        <a href="#collection" style={{border: '1px solid #1a1a1a', color: '#1a1a1a', padding: '16px 48px', textDecoration: 'none', fontSize: '11px', letterSpacing: '3px', display: 'inline-block'}}>
          DISCOVER THE COLLECTION
        </a>
      </section>

      {/* Hero Image */}
      <div style={{width: '100%', height: '600px', backgroundColor: '#e8e2da', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{color: '#bbb', fontSize: '11px', letterSpacing: '4px'}}>CAMPAIGN IMAGE</span>
      </div>

      {/* Collection */}
      <section id="collection" style={{padding: '100px 40px', maxWidth: '1100px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '64px'}}>
          <p style={{fontSize: '11px', letterSpacing: '4px', color: '#b8960c', marginBottom: '16px'}}>THE COLLECTION</p>
          <h2 style={{fontSize: '48px', fontWeight: '300', color: '#1a1a1a', fontFamily: 'var(--font-cormorant)'}}>Current Season</h2>
          <p style={{color: '#888', fontSize: '13px', letterSpacing: '1px', marginTop: '12px'}}>Limited batch. Locally crafted. Each piece unique.</p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '800px', margin: '0 auto'}}>
          {/* Product 1 */}
          <div>
            <div style={{width: '100%', aspectRatio: '0.75', backgroundColor: '#e0dbd4', display