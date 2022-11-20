import Header from '../components/common/Header/Header';
import styles from './AppLayout.module.scss';

type AppLayoutProps = {
	children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
	const { children } = props;
	return (
		<div className={styles.wrapper}>
			<Header />
			{children}
		</div>
	);
}
