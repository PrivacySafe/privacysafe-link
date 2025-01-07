import { Outlet } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#000d1d] text-white py-2">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    <a href="https:\/\/psafe.ly/vgZeqv" target="_blank" style={{color: '#6ec1e4'}}>Source Code</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/bugs" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Found A Bug?</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/abuse" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Report Abuse</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/VNuFWf" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Terms of Use</a><br>
                    <span style={{color: '#ffffff'}}>Tor hidden service: </span><a href="http:\/\/bjaxm2ek3e45ie3bohcvdjtrgsjyw72quv4dwupkst5ektwv3lie3myd.onion" id="contact" target="_blank" style={{color: '#6ec1e4'}}>bjaxm2ek3e45ie3bohcvdjtrgsjyw72quv4dwupkst5ektwv3lie3myd.onion</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/torproject.org/download" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Download Tor Browser</a>
                </p>
            </div>
        </footer>
    );
}

const RootLayout = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout;
