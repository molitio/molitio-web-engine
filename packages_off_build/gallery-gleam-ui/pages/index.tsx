import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h3>main content</h3>

                {/*    <DynamicButton styleVariant="btn-rounded" label="test button"/> */}
            </main>

            <footer className={styles.footer}>
                <span>footer text</span>
            </footer>
        </div>
    );
};

export default Home;
