import CustomThemeProvider from '@/components/CustomThemeProvider'
import './globals.css'
import { Roboto } from 'next/font/google'
import Nav from '@/components/Nav'

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export const metadata = {
  title: 'Ari Visuals Unleashed',
  description: '',
}

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={`${roboto.className} bg-black text-white`}>
				<CustomThemeProvider>
					<Nav />
					{children}
				</CustomThemeProvider>
				<script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js"></script>
			</body>
		</html>
	);
}
