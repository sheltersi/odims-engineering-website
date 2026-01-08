import "@/styles/globals.css";
import "@/styles/custom-styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./fontawesome"; // <-- the config file you created above

import AnalyticsLoader from "@/components/AnalyticsLoader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next"

// import "@/styles/custom-styles.css";

export const metadata = {
  title:{
    default:  "ODIMS Welding & Automation",
    template: "%s | ODIMS Welding & Automation",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
    ],
  },
  description: "ODiMs Welding & Automation offers professional welding, gate motor repairs, automated gates,steel fabrication services, remote coding, garage doors repairs & installation",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Analytics />
      <AnalyticsLoader />
        <div className="app-root">
          <Providers>
            <Header />
            <main className="main-content">{children}</main>
            
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
