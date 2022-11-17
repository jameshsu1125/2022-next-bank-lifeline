import useTween from 'lesca-use-tween';
import { memo, useRef, useEffect, useContext } from 'react';
import { LoadingContext } from '../../settings/config';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import './index.less';

const Logo = memo(() => {
	const ref = useRef();

	const [context] = useContext(LoadingContext);
	const { transition } = context;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle(
				{ opacity: 1 },
				{
					duration: 100,
					delay: LOGO_DURATION.logo,
					onStart: () => {
						[...ref.current.getElementsByTagName('path')].forEach((path) => {
							const total = path.getTotalLength();
							path.classList.add('on');
							path.setAttribute('style', `stroke-dasharray:${total}; stroke-dashoffset:${total}`);
						});
					},
				},
			);
		}
	}, [transition]);

	return (
		<svg
			ref={ref}
			width='197'
			height='127'
			viewBox='0 0 197 127'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={style}
		>
			<path
				d='M165.323 26.5332H150.61V19.6361H166.752C166.797 18.7147 166.846 17.8866 166.846 17.0622V12.8322H152.41V5.93506H189.168V12.8322H173.95V17.1555C173.95 17.9351 173.95 18.7632 173.905 19.6398H190.922V26.537H175.517C178.791 33.1133 184.555 37.8954 193.272 40.0589C191.704 41.5323 189.673 44.427 188.659 46.3145C180.265 43.6921 174.825 38.8653 170.995 31.9681C168.226 37.7164 162.97 43.1438 153.147 46.501C152.316 44.8448 150.195 42.0397 148.766 40.708C154.411 38.9175 158.309 36.3809 161.003 33.5273'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9.16268 20.0054C6.97424 23.3402 5.2422 26.2124 4.50524 27.0405C3.90669 25.3843 2.10731 21.6616 1 20.0054C4.96537 16.0029 8.79233 9.6578 11.0069 3.31273L17.3254 5.28973C16.1732 8.32612 14.7441 11.4968 13.128 14.5332V46.7696H6.76475V30.2149'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M23.4492 25.0635L27.5155 25.8991C26.2698 31.6473 23.9654 37.5336 21.474 41.2115C20.2282 40.1522 17.3702 38.4064 15.8027 37.6231C17.6882 35.2469 19.2144 31.666 20.2395 27.9171'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M39.6998 26.3243L43.6165 25.0038C45.8761 29.6964 47.3051 34.3965 47.9036 38.4885L41.4468 40.7415C41.2149 38.205 40.6575 35.4894 39.6025 32.1322'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M41.8583 21.8332H47.8999V10.9596L28.2975 11.038C29.128 9.0162 29.82 6.89745 30.4186 4.78243L23.8233 3.26424C22.2559 9.42653 19.3492 15.6336 15.7991 19.36C17.3216 20.3709 19.9964 22.5792 21.1935 23.7766C22.6711 21.9824 24.1451 19.7293 25.4843 17.2003H29.9135V39.4584C29.9135 40.0552 29.6816 40.1932 29.0831 40.1932C28.4359 40.1932 26.5018 40.1932 24.7025 40.1484C25.6713 41.9427 26.6851 44.9306 26.962 46.8628C30.0071 46.8628 32.3564 46.5868 34.2006 45.5274C36.0898 44.4233 36.5537 42.5843 36.5537 39.5479V17.2003'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M61.9918 29.0884H68.0334V39.5516H61.9918M61.9918 16.4206H68.0334V23.3402H61.9918M61.9918 10.6239V3.31273H55.9502V45.3894H74.0749V10.6239H61.9918Z'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M79.6602 28.3647C80.7076 30.2448 81.6204 32.0315 82.3162 33.6616L87.9874 30.2112C86.9138 28.1036 84.1792 23.7206 82.6005 21.3072'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M82.5969 21.3072L77.21 24.1869'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M77.2436 16.2341H90.5388C90.1685 31.4086 89.6148 38.1714 88.2793 39.5964C87.6808 40.2417 87.172 40.4245 86.2518 40.4245C85.3315 40.4245 79.8623 40.4245 77.8085 40.3126C77.8085 40.3126 77.7112 44.841 77.801 46.6353C80.5693 46.7285 87.1271 46.7733 88.9714 46.4525C90.999 46.0832 92.4317 45.5311 93.8608 43.5093C95.7986 40.9803 96.2587 33.5311 96.8124 13.0672C96.8572 12.2839 96.8573 10.1688 96.8573 10.1688H83.2515V3.31645H77.21V10.0532'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M101.986 10.8179C104.814 8.24405 107.882 4.06995 109.311 1L115.431 2.64875C113.04 7.07277 109.356 12.0041 105.959 15.2904'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M118.973 17.3756C121.644 16.126 136.885 5.93132 136.885 5.93132L142.732 8.87445C138.015 13.8804 118.517 24.6308 118.517 24.6308H143.185V19.3638H135.542'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M113.583 37.2725V21.2475C114.874 19.3638 116.026 17.383 116.995 15.4545L111.092 13.3395C108.97 17.6628 105.282 21.9376 101.728 24.6532C102.835 26.1266 104.586 29.5286 105.14 30.9535C105.832 30.3567 106.569 29.7114 107.261 29.0213V46.8628H113.579M117.298 47.0941C121.817 46.1727 125.157 44.841 128.801 43.0021C132.306 44.7963 136.41 46.128 141.116 47.0046C141.947 45.3036 143.697 42.588 145.081 41.2116C141.344 40.7043 138.026 39.9246 135.03 38.8653C138.026 36.1982 141.573 31.6622 143.185 27.5255L127.682 27.477L121.888 27.4583C119.711 31.058 116.845 34.8255 116.845 34.8255L122.853 39.0965C120.896 39.8314 115.887 41.2675 113.665 41.7338M125.898 32.3374H132.998C131.891 33.7176 130.507 34.9113 128.939 36.0154'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M119.4 12.6643C119.4 12.6643 126.059 9.00128 133.137 4.37584L128.932 1.09326C124.151 4.09234 121.469 5.93133 119.838 6.8788'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.15028 86.5745C5.29104 84.743 3.91813 84.0081 1.54639 82.5421C6.48814 76.5328 10.5919 66.4911 12.7729 56.5986L22.4618 59.0904C21.6912 62.3133 20.7298 65.4653 19.6412 68.6173H27.8525V55.8675H37.6051V68.6173H58.5841V79.0246H42.9995M37.6051 74.9661V90.2376H56.0179V100.499H37.6051V113.104H61.9883V123.511H3.59641V113.104H27.8488V100.499H11.2316V90.2376H27.8488V79.0246H15.5299'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M86.233 109.579H78.3509V98.6343H86.233M69.3765 90.1592V118.054H93.1014V90.1592H69.3765V90.1592Z'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M110.542 109.206C112.446 109.273 112.547 109.273 113.295 109.273C114.043 109.273 114.312 109.071 114.312 108.392V98.97H106.969V125.477H97.2463V90.2935H123.829V108.598C123.829 112.664 123.22 115.107 120.496 116.528C117.915 117.953 114.649 118.02 110.571 118.02'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M96.4532 67.8041C91.4179 72.7093 81.4222 81.2142 68.011 86.5596L64.3374 77.3945C81.2912 70.6391 92.4167 57.7438 92.5252 57.617L94.0066 55.8787L98.896 55.8712L100.377 57.6207C100.482 57.7438 111.608 70.6391 128.561 77.3945L124.888 86.5596'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M97.6202 73.8396H116.1V83.374H89.0161'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M133.515 71.1538C137.521 66.1516 143.312 57.837 143.312 57.837L150.165 62.5035L135.939 82.4041L142.785 86.8095'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M158.803 106.188H162.948C162.028 108.553 160.857 110.776 159.439 112.678C159.428 112.693 159.424 112.712 159.413 112.727C158.773 113.641 157.741 114.719 157.404 115.066C157.385 115.088 157.363 115.107 157.344 115.129C157.31 115.163 157.292 115.181 157.292 115.181H157.28C156.603 115.853 155.885 116.427 155.163 116.923C156.794 118.587 159.185 121.84 160.251 123.918C166.595 118.285 172.667 108.501 172.667 98.9214V98.1194L158.807 98.153'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M174.152 109.232V115.502C174.152 116.263 173.901 116.472 173.146 116.472C172.394 116.543 172.45 116.543 170.501 116.401C170.501 116.401 171.234 122.843 171.548 125.544C175.506 125.544 177.354 125.406 179.741 123.951C182.191 122.429 182.82 119.934 182.82 115.711V113.771C184.892 117.513 187.343 120.698 190.294 123.052L196.197 115.017C192.808 112.94 189.98 109.825 187.657 106.083C190.107 104.144 191.686 102.536 194.577 100.249L188.719 94.6952C186.332 97.0974 182.823 100.544 182.823 100.544V92.789H183.587H191.338V66.8865H168.664V59.1352H160.247V66.8865V92.789H174.156'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M168.66 82.4638H182.479V86.7573H168.66'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M168.66 72.4594H182.479V76.7566H168.66'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M149.32 107.273H132.321V115.931H149.32'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M151.284 92.7592H155.16V101.275H132.321V92.7592L137.042 87.1713'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M143.806 79.4796L149.035 72.4594L156.779 76.9879C153.094 82.3929 146.956 91.3305 143.806 95.9037'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
});
export default Logo;