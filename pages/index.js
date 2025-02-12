import Layout from '../components/Layout';
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <Layout>
      <div className="content">
        <Welcome />
      </div>
    </Layout>
  );
}


