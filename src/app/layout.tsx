 
import "../styles/style.scss";
import "../styles/index.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			 <head> 
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
			<body>{children}</body>
		</html>
	);
}
