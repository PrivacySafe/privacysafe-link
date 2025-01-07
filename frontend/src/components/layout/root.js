import { Outlet } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#000d1d] text-white py-2">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    <a href="https:\/\/psafe.ly/vgZeqv" target="_blank" style={{color: '#6ec1e4'}}>Source Code</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/bugs" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Found A Bug?</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/abuse" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Report Abuse</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/VNuFWf" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Terms of Service</a>
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
