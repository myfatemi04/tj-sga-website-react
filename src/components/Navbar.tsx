import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

let pages = [
	{
		url: '/',
		title: 'Home',
	},
	{
		url: '#',
		title: 'About Us',
		items: [
			{ url: '/officers', title: 'Officers' },
			{ url: '/committee', title: 'Executive Committee' },
			{ url: '/class-council', title: 'Class Council' },
		],
	},
	{
		url: '#',
		title: 'News',
		items: [
			{
				url: '/news',
				title: 'News',
			},
			{
				url: '/newsletter',
				title: 'Newsletter',
			},
		],
	},
	{
		url: '/initiatives',
		title: 'Initiatives',
	},
	{
		url: '#',
		title: 'What We Do',
		items: [
			{
				url: '/mission',
				title: 'Mission and History',
			},
			{
				url:
					'https://docs.google.com/document/d/1ftcFGlGiyU4cS5zNX5KLoIm4M1TR90C7btj9nIWxp4M/edit',
				title: 'Constitution',
			},
			{
				url:
					'https://drive.google.com/open?id=0B7IEunr2_iS7MTcyMDA0NmQtOTFjYy00MWQ2LThiOTItNzg5NmJiZjgxMmIy',
				title: 'Meeting Minutes',
			},
			{
				url:
					'https://docs.google.com/document/d/1MuKBJScwG3tu0dWI3vqoHLI-W6fxs1mGO0TRc96bOos/edit?usp=sharing',
				title: 'Finance',
			},
		],
	},
	{
		url: '/involved',
		title: 'Get Involved',
	},
	{
		url: '/feedback',
		title: 'Feedback',
	},
];

export default function Navbar() {
	return (
		<div className='nav'>
			<Link to='/' key='/'>
				<img src='/images/banner.png' alt='TJ SGA' className='nav-logo' />
			</Link>
			{pages.map((page) => {
				if ('items' in page) {
					return (
						<div key={page.title} className='submenu-outer'>
							<Link className='nav-link' to={page.url}>
								{page.title}
							</Link>
							<div className='submenu-content'>
								{/* Most of these are external so we use <a> tags instead of <Link> */}
								{page.items?.map((item) => {
									let isExternal = /https?:\/\//.test(item.url);
									if (isExternal) {
										// Treat external links differently; add 'target=_blank' so they
										// open in a new window
										return (
											<div key={item.title}>
												<a
													className='submenu-link'
													href={item.url}
													target='_blank'
													rel='noreferrer'
												>
													{item.title}
												</a>
												<br />
											</div>
										);
									}
									return (
										<div key={item.title}>
											<Link className='submenu-link' to={item.url}>
												{item.title}
											</Link>
											<br />
										</div>
									);
								})}
							</div>
						</div>
					);
				} else {
					return (
						<Link key={page.title} className='nav-link' to={page.url}>
							{page.title}
						</Link>
					);
				}
			})}
		</div>
	);
}
