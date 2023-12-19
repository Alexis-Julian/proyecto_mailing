"use client"
import TinyMCE, { MembersTable } from '../../components/TinyEditor';

const HomePage = () => {
	return (
		<div>
      <h1>Hermes Espera su mensaje</h1>
      <MembersTable/>
      <TinyMCE />
    </div>
  );
};

export default HomePage;

