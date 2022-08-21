export default function PurchaseForm() {
    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <header>
                        <div className="left">
                            <p className="title">🐱‍👤 Ninja Name Service</p>
                            <p className="subtitle">Your immortal API on the blockchain!</p>
                        </div>
                    </header>
                </div>

                {!currentAccount && renderNotConnectedContainer()}
                {/* Render the input form if an account is connected */}
                {currentAccount && renderInputForm()}

                <div className="footer-container">
                    <img alt="GITHUB Logo" className="GITHUB-logo" src={GITHUBLogo} />
                    <a
                        className="footer-text"
                        href={GITHUB_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`built with @${GITHUB_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
}
