import BarChartIcon from "@mui/icons-material/BarChart";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import DescriptionIcon from "@mui/icons-material/Description";


export const servicesData = [
  {
    icon: <DescriptionIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Effortless Invoice Creation and Management",
    subheading:
      "Create professional invoices in minutes! With Invoicean, you can easily generate custom invoices tailored to your business needs. Add your logo, customize fields, and personalize invoices to reflect your brand identity. Whether you're billing for products or services, Invoicean has you covered.",
  },
  {
    icon: <ShareIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Send Invoices to your clients with Ease",
    subheading:
      "Once your invoice is ready, sending it to clients is just a click away. With Invoicean, you can effortlessly email invoices directly to your clients, saving time and ensuring prompt delivery. Keep track of sent invoices and manage payment statuses with real-time updates.",
  },
  {
    icon: <FolderCopyIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Comprehensive Reporting Capabilities",
    subheading:
      "Stay on top of your finances with Invoicean's comprehensive reporting features. Access detailed reports of all your invoices at your fingertips. With our downloadable reports, you can analyze your financial data, track payments, and make informed decisions to drive your business forward.",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Insightful Dashboard with Graphical Representation",
    subheading:
      "Visualize your business's financial health with our dynamic dashboard. Track key metrics, monitor payment statuses, and gain valuable insights with graphical representations of your invoicing data. Our dashboard provides a clear overview of your business performance, empowering you to make informed decisions with confidence.",
  },
  {
    icon: <PictureAsPdfIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Downloadable Invoices in PDF Format",
    subheading:
      "Need a printable version of your invoice? Invoicean offers the option to download invoices in PDF format. Easily save or print invoices for your records or share them with clients, ensuring clarity and professionalism in your financial interactions.",
  },
  {
    icon: <FileDownloadIcon sx={{ fontSize: "2.2rem" }} />,
    heading: "Downloadable Invoices Reports in CSV Format",
    subheading:
      "Take control of your data! Export your invoice data in CSV format with Invoicean, facilitating easy manipulation and compatibility with spreadsheet software. Seamlessly integrate your invoicing information with other tools for a more cohesive and streamlined financial management process.",
  },
];

export const footerLinksGeneral = [
  { path: "/", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/aboutus", label: "About Invoicean" },
  { path: "/contact", label: "Contact with us" },
];
export const footerLinksLegal = [
  { path: "/legal/terms-and-conditions", label: "Terms & Conditions" },
  { path: "/legal/privacy-policy", label: "Privacy Policy" },
];

export const testimonialData = [
  {
    name: "Sarah Johnson",
    testimonial:
      "Invoicean makes creating invoices a breeze! It's intuitive and user-friendly, saving me time and hassle.",
    position: "Freelance Graphic Designer",
  },
  {
    name: "Mark Thompson",
    testimonial:
      "Sending invoices with Invoicean is effortless. It streamlines the entire process, allowing me to focus more on my business.",
    position: "Small Business Owner",
  },
  {
    name: "Emily Chen",
    testimonial:
      "Invoicean's product sharing feature has transformed how I collaborate with clients. Sharing files and documents has never been easier!",
    position: "Marketing Consultant",
  },
  {
    name: "John Reynolds",
    testimonial:
      "As a freelancer, Invoicean has been a game-changer for me. The ability to create and send invoices on the go has greatly improved my workflow.",
    position: "Freelance Writer",
  },
  {
    name: "Maria Rodriguez",
    testimonial:
      "Invoicean simplifies the entire invoicing process. It's easy to use and helps me keep track of all my transactions efficiently.",
    position: "Small Business Owner",
  },
  {
    name: "Michael Nguyen",
    testimonial:
      "I highly recommend Invoicean to fellow entrepreneurs. It's a reliable tool for creating professional invoices and managing payments seamlessly.",
    position: "Startup Founder",
  },
  {
    name: "Jessica Carter",
    testimonial:
      "Invoicean's product sharing feature has revolutionized how I collaborate with my team. Sharing documents and updates has never been smoother.",
    position: "Project Manager",
  },
  {
    name: "David Miller",
    testimonial:
      "Sending invoices with Invoicean has simplified my billing process. It's straightforward and saves me a lot of time each month.",
    position: "Freelance Web Developer",
  },
  {
    name: "Rachel Evans",
    testimonial:
      "Invoicean is my go-to tool for invoicing. It's user-friendly, efficient, and helps me maintain a professional image with my clients.",
    position: "Independent Consultant",
  },
  {
    name: "Alex Foster",
    testimonial:
      "Sharing product updates and files with clients is a breeze with Invoicean. It's a reliable platform that enhances collaboration and communication.",
    position: "Product Manager",
  },
];
