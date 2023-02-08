class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <header className="header">
                <a class="logo" href="index.html">
                <img className="logo__img" src="img/logoWhite.svg" />
                </a>
                <nav>
                
                </nav>
            </header>
        `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer>
        <div className="LLC">ETM Construction LLC</div>
        <div className="address">etmrowayton@gmail.com</div>
        <div className="phone">(203) 838-7727</div>
    </footer>
      `;
  }
}
